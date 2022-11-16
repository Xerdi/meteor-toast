import {Template} from "meteor/templating";
import {Blaze} from "meteor/blaze";

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
}

if (globalThis && !globalThis.Toast)
    globalThis.Toast = Toast;
