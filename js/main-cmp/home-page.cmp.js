'use strict';

import mainHeader from './main-header.cmp.js';
import mainFooter from './main-footer.cmp.js';

export default {
    template: `
        <section class="home-page-container">
            <main-header></main-header>
            <div class="home-page-content"></div>
            <main-footer></main-footer>

        </section>
    `,
    components: {
        mainHeader,
        mainFooter
    }

}