// import keepService from 
import keepService from '../../mr-keep/keep-services.js';
import keepList from './add-keep.cmp.js'
import keepPreview from './keep-preview.cmp.js'

export default {
    template: `
        <section class=keep-list-container>
            <keep-preview v-for="keep in keeps" :key=keep.id :keep="keep"></keep-preview>
        </section>

    `,
    data() {
        return {
            keeps: null

        };
    },
    created() {
        this.keeps = keepService.getKeeps();
        console.log('this.keeps: ', this.keeps);
    },
    components: {
        keepList,
        keepPreview
    }
}