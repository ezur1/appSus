import keepService from '../../mr-keep/keep-services.js';


export default {
    template: `
        <section class="card-container flex col">
        <iframe class="grow" :src="imgUrl"></iframe>
        <div class="align-end">
            <i class="far fa-edit"></i>
            <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
        </div>
        </section>
    `,
    props: ['data', 'id'],
    data() {
        return {
            embed: 'http://www.youtube.com/embed/'
        }
    },
    created() {
        // console.log('this.data', this.data);
    },
    computed: {
        imgUrl() {
            return this.embed + this.data
        }
    },
    methods: {
        deleteKeep() {
            keepService.deleteKeep();
        }

    }

}