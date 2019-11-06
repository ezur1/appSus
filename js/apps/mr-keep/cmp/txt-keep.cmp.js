export default {
    template: `
        <section class="keep-preview-container flex">
        <h1>{{data}}</h1>
        </section>
    `,
    props: ['data'],
    created() {
        console.log('content', this.data);
    }

}