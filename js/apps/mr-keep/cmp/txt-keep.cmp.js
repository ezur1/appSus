import keepService from '../../mr-keep/keep-services.js';
import colorPicker from './color-picker.cmp.js'

export default {
    template: `
        <section class="card-container flex col" :class="cardColor">
        <h1 v-if="!edit" class="grow">{{data}}</h1>
        <input class="grow" ref="editInput" v-if="edit" type="text" :placeholder="placeholder"/>
        <i @click="onAddUpdatedKeep(id)" v-if="edit" class="fas fa-plus"></i>
        <div class="card-icons align-end flex align-c ">
            <i @click="pinKeep(id)" class="fas fa-thumbtack" :class="{pinColor:pinnedColor}"></i>
            <i @click="showColors()" class="fas fa-palette"></i>
            <i @click="onEditKeep(id)"  class="far fa-edit"></i>
            <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
        </div>
        <color-picker class="color-picker animated bounce" v-show="show"  @changeColor="setBackgroundColor"></color-picker>
        </section>
    `,
    props: ['data', "id", "hover"],
    data() {
        return {
            content: this.data,
            cardColor: '',
            edit: false,
            elInput: null,
            placeholder: '',
            show: false,
            pinnedColor: false
        }
    },
    computed: {},
    methods: {
        deleteKeep(id) {
            keepService.deleteKeep(id);
        },
        onEditKeep() {
            this.edit = true;
            this.elInput.value = this.data
            this.placeholder = this.elInput.value;

        },
        onAddUpdatedKeep(keepId) {
            let newContent = this.$refs.editInput.value
            keepService.saveUpdatedKeep(keepId, newContent)
            this.edit = false;
        },
        setBackgroundColor(color) {
            this.cardColor = color;
            console.log('this.color', this.cardColor);
        },
        showColors() {
            this.show = !this.show;
        },
        pinKeep(id) {
            this.pinnedColor = !this.pinnedColor;
            keepService.setPin(id);
        },



    },
    mounted() {
        this.elInput = this.$refs;
    },
    components: {
        colorPicker,
    }
}