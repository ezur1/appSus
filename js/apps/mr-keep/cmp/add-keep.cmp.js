'use strict';

import keepService from '../../mr-keep/keep-services.js';

export default {
    template: `
        <section class="input-container flex flex-center ">
            <div class="keep-input-box flex flex-center align-c space-between">
                <input  v-model="data.txt" v-if="keepTxt" type="text" placeholder="Please enter a text"/>
                <input  v-model="data.imgUrl" v-if="keepImg" type="text" placeholder="Enter Image URL"/>
                <input  v-model="data.videoUrl" v-if="keepVideo" type="text" placeholder="Enter Video URL"/>
                <div class="input-icons ">
                    <i @click="changeInputState('keepTxt')" class="fas fa-font"></i>
                    <i @click="changeInputState('keepImg')" class="fas fa-image"></i>
                    <i @click="changeInputState('keepVideo')" class="fas fa-video"></i>
                </div>
                <button @click="onAddKeep()">ADD ME</button>
            </div>
        </section>
    `,
    data() {
        return {
            keepTxt: true,
            keepImg: false,
            keepVideo: false,
            keepAudio: false,
            keepTodo: false,
            type: 'keepTxt',
            data: {
                txt: '',
                imgUrl: '',
                videoUrl: '',
                todos: []
            },
        };
    },
    methods: {
        changeInputState(state) {
            this.type = state;
            console.log(state);
            this.keepTxt = false;
            this.keepImg = false;
            this.keepVideo = false;
            this.keepTodos = false;
            if (state === 'keepTxt') this.keepTxt = true;

            if (state === 'keepImg') this.keepImg = true;

            if (state === 'keepVideo') this.keepVideo = true;

            if (state === 'keepTodo') this.keepTodo = true;

        },
        onAddKeep() {

            let state = this.type;
            let data;
            if (state === 'keepTxt') data = this.data.txt;
            else if (state === 'keepImg') data = this.data.imgUrl;
            else if (state === 'keepVideo') data = this.data.videoUrl;
            else if (state === 'keepTodo') data = this.data.todos;

            console.log('state', state);
            console.log('data', data);
            keepService.createKeep(state, data);
        }
    }
}