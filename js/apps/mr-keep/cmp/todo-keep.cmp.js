export default {
    template: `
        <section class="card-container flex col">
        <ul>
            <li>todo1</li>
            <li>todo2</li>
            <li>todo3</li>
        </ul>
        <i  class="far fa-edit align-end"></i>
        </section>
    `,
    props: ['data'],
    created() {
        console.log('content', this.data);
    }

}