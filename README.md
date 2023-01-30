# Meteor Toast

Admin-LTE Toasts for MeteorJS.

## Installation

Add the package to your project:

```shell
meteor add xerdi:toast
```

Also see `xerdi:admin-lte` (requirement).

## Usage

The toast will by default be placed in `.toasts` which is included in `xerdi:admin-lte`.
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
    'class': 'bg-danger'
});

toast.show();
toast.hide();
```

The toast will be destroyed when hidden.

There are also two short-hands for showing a success message or error message.
```javascript
Toast.success('A success message', {title: 'Title override'});
try {
    // ... faulty code
} catch(e) {
    Toast.error(e);
    // or
    Toast.error(e.reason)
}
```
When using these short-hands, the toast will be shown in advance.
The locale keys of the default titles are `xerdi:toast.errorTitle` and `xerdi:toast.successTitle`.

