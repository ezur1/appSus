'use strict';

import keepList from './cmp/keep-list.cmp.js'

export default {
    template: `
        <section class="keep-app-container">
            <h1>KEEP-APP</h1>
            <keep-list></keep-list>

        </section>
    `,
    components: {
        keepList,
    }

}