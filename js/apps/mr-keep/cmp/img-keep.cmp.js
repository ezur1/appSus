import keepService from '../../mr-keep/keep-services.js';


export default {
    template: `
        <section class="card-container flex col">
        <img class="grow " :src="data" alt="">
        <div class="align-end">
            <i class="far fa-edit"></i>
            <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
        </div>
        </section>
    `,
    props: ['data', 'id'],
    created() {
        // console.log('this.data', this.data);
    },
    computed: {
        imgUrl() {
            return this.data;
        }
    },
    methods: {
        deleteKeep() {
            keepService.deleteKeep();
        }

    }

}