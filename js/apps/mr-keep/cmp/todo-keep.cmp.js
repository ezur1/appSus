import keepService from '../../mr-keep/keep-services.js';
import colorPicker from './color-picker.cmp.js'

export default {
    template: `
        <section class="card-container flex col align-end" :class="cardColor">
            <div class="todos grow">
                <ul >
                    <li v-for="(todo, index) in todos" :key="index" :todo="todo">{{todo}}</li>
                </ul>
            </div>
            <div class="card-icons flex align-end align-c ">
                <i @click="pinKeep(id)" class="fas fa-thumbtack" :class="{pinColor:pinnedColor}"></i>
                <i @click="showColors()" class="fas fa-palette"></i>
                <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
            </div>
            <color-picker class="color-picker animated bounce" v-show="show"  @changeColor="setBackgroundColor"></color-picker>
        </section>
    `,
    props: ['data', 'id'],
    data() {
        return {
            cardColor: '',
            show: false,
            pinnedColor: null
        }
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
        },
        pinKeep(id) {
            this.pinnedColor = !this.pinnedColor;
            keepService.setPin(id);
        },
        onEditKeep() {
            this.edit = true;
        },
        onAddUpdatedKeep(keepId) {
            let newContent = this.$refs.editInput.value
            keepService.saveUpdatedKeep(keepId, newContent)
            this.edit = false;
        },
    },
    computed: {
        todos() {
            return this.data.split(',')
        },
        changeBackgroundColor(color) {
            this.activeColor = color
        },
    },
    components: {
        colorPicker,
    }

}