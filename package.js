Package.describe({
    name: 'xerdi:toast',
    version: '0.0.4',
    summary: 'Admin-LTE Toasts for MeteorJS',
    git: '',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.11.0');
    api.use([
        'ecmascript',
        'universe:i18n@1.32.6',
        'blaze-html-templates@2.0.0',
        'ostrio:flow-router-extra@3.9.0',
        'xerdi:admin-lte@0.0.8'
    ]);
    api.mainModule('toasts.js', 'client');
});
