import {FlowRouter} from "meteor/ostrio:flow-router-extra";
import {Template} from "meteor/templating";

import './index.html';

Template.toast.helpers({
    //add you helpers here
});

Template.toast.events({
    'show.bs.toast'(event, template) {
        if (template.data.onShow)
            template.data.onShow(template.data.handle, event, template);
    },
    'shown.bs.toast'(event, template) {
        if (template.data.onShown)
            template.data.onShown(template.data.handle, event, template);
    },
    'hide.bs.toast'(event, template) {
        if (template.data.onHide)
            template.data.onHide(template.data.handle, event, template);
    },
    'hidden.bs.toast'(event, template) {
        if (template.data.onHidden)
            template.data.onHidden(template.data.handle, event, template);
    },
    'click .toast'(event, template) {
        if (template.data.onClick)
            template.data.onClick(event, template);
        else if (template.data.defaultAction)
            Meteor.setTimeout(() => FlowRouter.go(template.data.defaultAction), 0);
        template.$(template.firstNode).toast('hide');
    }
});

Template.toast.onCreated(function () {

});

Template.toast.onRendered(function () {
    this.data.handle = this.$(this.firstNode).toast({
        animation: this.data.animation || true,
        autohide: this.data.autohide || true,
        delay: this.data.delay || 5000
    });
    if (this.data.visitor && typeof this.data.visitor === 'function')
        this.data.visitor(this.data.handle);
});
