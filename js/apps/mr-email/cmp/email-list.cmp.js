'use strict';
import mailService from '../services/mail-service.js'
export default {
    template: `
        <section class="email-app-container">
            <ul>
                <li class="email-organize clean-list">
                    <span>From</span>
                    <span>Subject</span>
                    <span>Recived At</span>
                </li>
                <!-- <email-preview></email-preview> -->
            </ul>
        </section>
    `,
    data(){
        return{
            emails:null,

        }
    },
    created(){
        console.log('Loading eMails');
        this.emails=mailService.query();
        console.log(this.emails);
        
    },
    components:{
    }

}