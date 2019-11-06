// import keepService from 
import keepService from '../../mr-keep/keep-services.js';
import keepList from './add-keep.cmp.js'
import keepPreview from './keep-preview.cmp.js'
import keepTxt from './txt-keep.cmp.js';
import keepImg from './img-keep.cmp.js';

export default {
    template: `
        <section class="keep-list-container flex">
            <div v-for="keep in keeps" :key=keep.id :keep="keep">
                <component :is="keep.type" :data="keep.data"></component>
            </div>
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
        keepPreview,
        keepTxt,
        keepImg
    }
}