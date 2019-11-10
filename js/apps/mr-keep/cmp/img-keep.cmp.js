import keepService from '../../mr-keep/keep-services.js';
import colorPicker from './color-picker.cmp.js'

export default {
    template: `
        <section class="card-container flex col" :class="cardColor">
        <img class="grow " :src="data" alt="">
        <div class="card-icons flex align-end">
            <i @click="pinKeep(id)" class="fas fa-thumbtack" :class="{pinColor:pinnedColor}"></i>
            <i @click="showColors()" class="fas fa-palette"></i>
            <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
        </div>
        <color-picker class="color-picker animated  bounce" v-show="isShow"  @changeColor="setBackgroundColor"></color-picker>
        </section>
    `,
    props: ['data', 'id'],
    data() {
        return {
            cardColor: '',
            isShow: false,
            pinnedColor: null
        }
    },
    computed: {
        imgUrl() {
            return this.data;
        }
    },
    methods: {
        deleteKeep(id) {
            keepService.deleteKeep(id);
        },
        setBackgroundColor(color) {
            this.cardColor = color;
            console.log('this.color', this.cardColor);
            this.isShow = !this.isShow;
        },
        showColors() {
            this.isShow = !this.isShow;
        },
        pinKeep(id) {
            this.pinnedColor = !this.pinnedColor;
            keepService.setPin(id);
        }

    },
    components: {
        colorPicker,
    }

}