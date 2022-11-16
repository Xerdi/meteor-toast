Package.describe({
    name: 'xerdi:toast',
    version: '0.0.1',
    summary: 'Admin-LTE Toasts for MeteorJS',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.8.0');
    api.use([
        'ecmascript',
        'blaze-html-templates@1.2.1',
        'ostrio:flow-router-extra@3.9.0',
        'xerdi:admin-lte@0.0.4'
    ]);
    api.mainModule('toasts.js', 'client');
});
