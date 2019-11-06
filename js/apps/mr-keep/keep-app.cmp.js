'use strict';
import addKeep from './cmp/add-keep.cmp.js';
import keepList from './cmp/keep-list.cmp.js';

export default {
    template: `
        <section class="keep-app-container">
            <h1>KEEP-APP</h1>
            <add-keep></add-keep>
            <keep-list></keep-list>

        </section>
    `,
    components: {
        keepList,
        addKeep
    }

}