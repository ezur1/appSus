// import keepService from 
import keepService from '../../mr-keep/keep-services.js';
import keepList from './add-keep.cmp.js'
import keepPreview from './keep-preview.cmp.js'
import keepTxt from './txt-keep.cmp.js';
import keepImg from './img-keep.cmp.js';
import keepTodo from './todo-keep.cmp.js';
import keepVideo from './video-keep.cmp.js';

export default {
    props: ['keeps'],
    template: `
        <section class="keep-list-container flex wrap">
            <div v-for="keep in keeps" :key=keep.id :keep="keep">
                <component :is="keep.type" :data="keep.data" :id="keep.id"></component>
            </div>
        </section>
    `,
    data() {
        return {
            // keeps: null
        };
    },
    methods: {


    },
    created() {
        // this.keeps = keepService.query();
    },
    components: {
        keepList,
        keepPreview,
        keepTxt,
        keepImg,
        keepTodo,
        keepVideo
    }
}