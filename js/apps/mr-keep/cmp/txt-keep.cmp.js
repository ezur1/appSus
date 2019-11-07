import keepService from '../../mr-keep/keep-services.js';


export default {
    template: `
        <section class="card-container flex col">
        <h1 class="grow">{{data}}</h1>
        <div class="align-end">
            <i class="far fa-edit"></i>
            <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
        </div>
        </section>
    `,
    props: ['data', "id"],
    created() {
        console.log('keep id in txt cmp', this.id);
    },
    methods: {
        deleteKeep() {
            keepService.deleteKeep();
        }

    }
}