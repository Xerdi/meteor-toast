import {Meteor} from 'meteor/meteor';
import {Template} from "meteor/templating";
import {Blaze} from "meteor/blaze";
import {i18n} from "meteor/universe:i18n";

import './i18n/en.i18n.json';
import './i18n/nl.i18n.json';
import './template';

export class Toast {

    static containerSelector = '.toasts-top-right';

    handle = null;
    element = null;

    promises = [];

    constructor(options) {
        const self = this;
        this.handle = Blaze.renderWithData(Template.toast, {
            ...options,
            visitor(element) {
                self.element = element;
                self.element.on('hidden.bs.toast', function () {
                    Blaze.remove(self.handle);
                });
                for (let resolve of self.promises)
                    resolve(element);
            }
        }, document.body.querySelector(Toast.containerSelector));
    }

    async getElement() {
        return new Promise(function (resolve) {
            if (this.element) {
                resolve(this.element);
            } else {
                this.promises.push(resolve);
            }
        }.bind(this));
    }

    show() {
        return new Promise(function (resolve) {
            this.getElement()
                .then(function (element) {
                    resolve(element.toast('show'));
                });
        }.bind(this));
    }

    hide() {
        return new Promise(function (resolve) {
            this.getElement().then(function (element) {
                resolve(element.toast('hide'));
            });
        }.bind(this));
    }

    static success(message, options = undefined) {
        const opts = options || {};

        return new Toast({
            title: i18n.__('xerdi:toast.successTitle'),
            body: message,
            'class': 'bg-success',
            ...opts
        }).show();
    }

    static error(messageOrObject, options = undefined) {
        let msg;
        switch(typeof(messageOrObject)) {
            case 'string':
                msg = messageOrObject;
                break;
            case 'object':
                msg = messageOrObject.reason || messageOrObject.message
        }
        if (!msg)
            throw new Meteor.Error('bad argument', 'Wrong argument given.');

        const opts = options || {};

        return new Toast({
            title: i18n.__('xerdi:toast.errorTitle'),
            body: msg,
            'class': 'bg-danger',
            ...opts
        }).show();
    }
}

if (globalThis && !globalThis.Toast)
    globalThis.Toast = Toast;
