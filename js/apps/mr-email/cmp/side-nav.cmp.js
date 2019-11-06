'use strict';

// import emailList from './cmp/email-list.cmp.js';
// import emailHeader from './cmp/email-header.cmp.js';

export default {
    template: `
        <nav class="side-nav">
            <div> 
                <ul>    
                    <li class="send-mail" >Send Mail</li>
                    <li><i class="fas fa-inbox"></i>Mails</li>
                    <li><i class="fas fa-share"></i>Sent</li>
                    <li><i class="fas fa-trash"></i>Deleted</li>
                </ul>
            </div>
        </nav>
    `,
    // components:{
    //     emailList,
    //     emailHeader
    // }

}
