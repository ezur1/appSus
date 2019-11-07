'use strict';
import addKeep from './cmp/add-keep.cmp.js';
import keepList from './cmp/keep-list.cmp.js';
import keepHeader from './cmp/keep-header.cmp.js'

export default {
    template: `
        <section class="keep-app-container ">
            <keep-header></keep-header>
            <!-- <div class="input-and-list flex col"> -->
                <add-keep></add-keep>
                <keep-list></keep-list>
            <!-- </div> -->

        </section>
    `,
    components: {
        keepList,
        addKeep,
        keepHeader
    }

}