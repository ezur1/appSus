'use strict';

import emailCompose from './email-compose.cmp.js';
import {eventBus} from '../../../main-service/bus-service.js';

export default {
    template: `
        <nav class="side-nav">
            <div> 
                <ul class="side-nav-items flex col both-align-c clean-list">    
                    <li class="compose-btn" @click="showComposeModal">Compose <i class="far fa-edit"></i></li>
                    <div class="end">
                    <li class="side-nav-item" @click="emitPickedEmails(1)"><i class="fas fa-inbox "></i>Mails</li>
                    <li class="side-nav-item" @click="emitPickedEmails(2)"><i class="fas fa-share"></i>Sent</li>
                    <li class="side-nav-item" @click="emitPickedEmails(3)"><i class="fas fa-trash"></i>Deleted</li>
                    </div>
                </ul>
            </div>
            <email-compose @closeModal="showComposeModal" v-if="showCompose"></email-compose>
          
        </nav>
    `,
    data(){
        return{
            showCompose:false,
            sowenEmails : 1,
            state:{mails: false, sent: false, deleted: false}
        }
    },
    methods:{
        showComposeModal(){
            this.showCompose = !this.showCompose;
        },
        emitPickedEmails(emailsType) {
            this.sowenEmails = emailsType;
            eventBus.$emit('changeState', this.sowenEmails);
            this.state = { mails: false, sent: false, deleted: false };
            if (emailsType === 1) this.state.mails = true;
            if (emailsType === 2) this.state.sent = true;
            if (emailsType === 3) this.state.deleted = true;
            console.log('this.changeState',this.sowenEmails);
            this.$router.push('/email');
          }
    },
    components:{
        emailCompose
    }
}
