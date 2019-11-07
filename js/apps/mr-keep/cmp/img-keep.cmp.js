export default {
    template: `
        <section class="card-container flex col">
        <img class="grow " :src="data" alt="">
        <div class="align-end">
            <i class="far fa-edit"></i>
            <i class="fas fa-trash-alt "></i>
        </div>
        </section>
    `,
    props: ['data'],
    created() {
        // console.log('this.data', this.data);
    },
    computed: {
        imgUrl() {
            return this.data;
        }
    }

}