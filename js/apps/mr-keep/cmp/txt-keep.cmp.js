import keepService from '../../mr-keep/keep-services.js';


export default {
    template: `
        <section class="card-container flex col">
        <h1 v-if="!edit" class="grow">{{data}}</h1>
        <input class="grow" ref="editInput" v-if="edit" type="text" :placeholder="placeholder"/>
        <i @click="onAddUpdatedKeep(id)" v-if="edit" class="fas fa-plus"></i>
        <div class="align-end">
            <i @click="onEditKeep(id)"  class="far fa-edit"></i>
            <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
        </div>
        
        </section>
    `,
    props: ['data', "id"],
    data() {
        return {
            content: this.data,
            edit: false,
            elInput: null,
            placeholder: ''
        }
    },
    created() {

    },
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
        }

    },
    mounted() {
        this.elInput = this.$refs;
    }
}