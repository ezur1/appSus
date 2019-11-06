'use strict';
import keepApp from './apps/mr-keep/keep-app.cmp.js';
import homePage from './main-cmp/home-page.cmp.js';
import emailApp from './apps/mr-email/email-app.cmp.js';

const mainRoutes = [
    { path: '/', component: homePage },
    { path: '/keep', component: keepApp },
    { path: '/email', component: emailApp }
]

const router = new VueRouter({
    routes: mainRoutes
})

export default router;