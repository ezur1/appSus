'use strict';

import emailCompose from './email-compose.cmp.js';
import {eventBus} from '../../../main-service/bus-service.js';
{/* <i class="far fa-edit"></i> */}
export default {
    template: `
        <nav class="side-nav">
            <div> 
                <ul class="side-nav-items flex col both-align-c clean-list">    
                    <li class="compose-btn flex space-around" @click="showComposeModal">
                        <span>Compose </span>
                        <img src="img/compose.png" class=" envelope" >

                    </li>
                    <div class="nav-selection end flex col ">
                        <div :class="{'picked-section':state.mails}" class="side-nav-item flex" @click="emitPickedEmails(1)">
                            <!-- <i class="fas fa-inbox nav"></i> -->
                            <img src="img/mail.png" class="icon nav-icon" >

                            <span>Mails</span>
                        </div>
                        <li :class="{'picked-section':state.sent}" class="side-nav-item flex" @click="emitPickedEmails(2)">
                            <!-- <i class="fas fa-share nav"></i> -->
                            <img src="img/sent.png" class="icon nav-icon" >

                            <span>Sent</span>
                        </li>
                        <li :class="{'picked-section':state.favorite}" class="side-nav-item flex" @click="emitPickedEmails(3)">
                            <!-- <i class="fas fa-trash nav"></i> -->
                            <img src="img/favorite.png" class="icon nav-icon" >

                            <span>Favorite</span>
                        </li>
                        <li :class="{'picked-section':state.deleted}" class="side-nav-item flex" @click="emitPickedEmails(4)">
                            <!-- <i class="fas fa-trash nav"></i> -->
                            <img src="img/deleted.png" class="icon nav-icon" >

                            <span>Deleted</span>
                        </li>
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
            state:{mails: true, sent: false, deleted: false,favorite:false}
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
            if (emailsType === 3) this.state.favorite = true;
            if (emailsType === 4) this.state.deleted = true;
            console.log('this.changeState',this.sowenEmails);
            this.$router.push('/email');
          }
    },
    components:{
        emailCompose
    }
}
