import keepService from '../../mr-keep/keep-services.js';
import colorPicker from './color-picker.cmp.js'

export default {
    template: `
        <section class="card-container flex col" :class="cardColor">
        <iframe class="grow" :src='imgUrl'></iframe>
        <div class="align-end">
            <i @click="showColors()" class="fas fa-palette"></i>
            <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
            <color-picker class="color-picker animated bounce" v-show="show"  @changeColor="setBackgroundColor"></color-picker>
        </div>
        </section>
    `,
    props: ['data', 'id'],
    data() {
        return {
            videoUrl: 'http://www.youtube.com/embed/',
            cardColor: '',
            show: false
        }
    },
    created() {},
    computed: {
        imgUrl() {
            return this.videoUrl + this.data
        }
        // replaceUrl() {
        //     var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        //     var match = this.videoUrl.match(regExp);
        //     if (match && match[2].length == 11) this.videoUrl += match[2];
        //     console.log('this.videoUrl', this.videoUrl);
        // }
    },
    methods: {
        deleteKeep(id) {
            keepService.deleteKeep(id);
        },
        setBackgroundColor(color) {
            this.cardColor = color;
            console.log('this.color', this.cardColor);
        },
        showColors() {
            this.show = !this.show;
        }
    },
    components: {
        colorPicker,
    }


}