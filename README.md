# Meteor Toast

Admin-LTE Toasts for MeteorJS.

## Installation

Add the package to your project:

```shell
meteor add xerdi:toast
```

Also see `xerdi:admin-lte` (requirement).

## Usage

The toast will by default be placed in `.toasts-top-right` which is included in `xerdi:admin-lte`.
To change that you can set `Toast.containerSelector` to your container.

To show a toast, you can do the following:
```javascript
const toast = new Toast({
    title: 'My Title',
    icon: 'fas fa-icons',
    image: '/path/to/image',
    defaultAction: '/myMessages',
    createdAt: new Date(),
    close: false,
    body: 'Hi <b>there</b>!',
    class: 'bg-danger'
});

toast.show();
toast.hide();
```

The toast will be destroyed when hidden.
