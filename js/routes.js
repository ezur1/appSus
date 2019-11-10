'use strict';
import keepApp from './apps/mr-keep/keep-app.cmp.js';
import homePage from './main-cmp/home-page.cmp.js';
import emailApp from './apps/mr-email/email-app.cmp.js';
import emailListCmp from './apps/mr-email/cmp/email-list.cmp.js';
import emailDetailsCmp from './apps/mr-email/cmp/email-details.cmp.js';

const mainRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/email',
        component: emailApp,
        children: [
            {
                path: '/',
                component: emailListCmp
            },
            {
                path: ':id',
                component: emailDetailsCmp
            }

        ]
    },
    {
        path: '/books',
        component: homePage
    }
]

const router = new VueRouter({
    routes: mainRoutes
})

export default router;