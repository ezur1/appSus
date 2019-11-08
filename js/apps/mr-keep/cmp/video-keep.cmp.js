import keepService from '../../mr-keep/keep-services.js';


export default {
    template: `
        <section class="card-container flex col">
        <iframe class="grow" :src='imgUrl'></iframe>
        <div class="align-end">
            <i class="far fa-edit"></i>
            <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
        </div>
        </section>
    `,
    props: ['data', 'id'],
    data() {
        return {
            videoUrl: 'http://www.youtube.com/embed/'
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



    }

}