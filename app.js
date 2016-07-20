'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;
var Admin = new Module('admin');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */

Admin.register(function(app, auth, database, circles) {

    var icons = 'admin/assets/img/icons/';

    Admin.menus.add({
        title: 'admin settings',
        link: 'admin settings',
        roles: ['admin'],
        menu: 'main'
    });

    Admin.menus.add({
        roles: ['admin'],
        title: 'MODULES',
        link: 'modules',
        icon: 'view_module',
        menu: 'admin'
    });
    // Admin.menus.add({
    //     roles: ['admin'],
    //     title: 'THEMES',
    //     link: 'themes',
    //     icon: 'palette',
    //     menu: 'admin'
    // });
    // Admin.menus.add({
    //     roles: ['admin'],
    //     title: 'SETTINGS',
    //     link: 'settings',
    //     icon: 'settings',
    //     menu: 'admin'
    // });
    Admin.menus.add({
        roles: ['admin'],
        title: 'USERS',
        link: 'users',
        icon: 'people',
        menu: 'admin'
    });

    Admin.angularDependencies(['ngClipboard', 'mean.users']);

    // We enable routing. By default the Package Object is passed to the routes
    Admin.routes(app, auth, database, circles);

    circles.registerCircle('admin');
    circles.registerCircle('can delete content', ['admin']);
    circles.registerCircle('can edit content', ['admin']);
    circles.registerCircle('can create content', ['admin']);

    return Admin;
});
