export default {
    template: `
        <section class="keep-preview-container flex">
        <img :src="data" alt="">
        </section>
    `,
    props: ['data'],
    created() {
        console.log('this.data', this.data);
    },
    computed: {
        imgUrl() {
            return this.data;
        }
    }

}