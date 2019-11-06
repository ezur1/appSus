
export default {
    props:["email"],
    template: `
        <li  >
            <div>
                <h1>{{email.subject}}</h1>
                <button>delete</button>
                <router-link @click="linkClicked" :to="emailUrl">full-size</router-link>
            </div>
            <p>{{email.sender}}</p>
            <p>{{email.body}}</p>
        </li>
    `,
    methods:{
        linkClicked(){
            this.email.isPreview = false;
        }
    },
    computed:{
        emailUrl(){
            return `/email/${this.email.id}`;
        }
    }
}