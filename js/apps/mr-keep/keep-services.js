'use strict';

const KEEPS_KEY = 'keepsKey';

export default {
    getKeeps
}

function getKeeps() {
    return gKeeps;
}

let gKeeps = [{
        _id: 'aaa',
        picture: '',
        content: 'hi im ex txt keep',
        type: 'noteImg',
        video: '',
        audio: '',
        isDone: true,
        isPin: false,
        todos: {
            todo1: '',
            todo2: '',
            todo3: ''
        }
    },

    {
        _id: 'bbb',
        picture: '',
        color: '',
        content: 'hi im ex txt keep',
        type: 'noteTxt',
        video: '',
        audio: '',
        isDone: true,
        isPin: false,
        todos: {
            todo1: '',
            todo2: '',
            todo3: ''
        }
    },
    {
        _id: 'ccc',
        picture: '',
        color: '',
        content: 'hi im ex txt keep',
        type: 'noteTodo',
        video: '',
        audio: '',
        isDone: false,
        isPin: false,
        todos: {
            todo1: 'Finish Sprint',
            todo2: 'drink beer',
            todo3: 'start next project'
        }
    },
    {
        _id: 'ddd',
        picture: '',
        color: '',
        content: 'hi im ex txt keep',
        type: 'noteImg',
        video: '',
        audio: '',
        isDone: false,
        isPin: false,
        todos: {
            todo1: '',
            todo2: '',
            todo3: ''
        }
    },
    {
        _id: 'eee',
        picture: '',
        color: '',
        content: 'hi im ex txt keep',
        type: 'noteImg',
        video: '',
        audio: '',
        isDone: false,
        isPin: false,
        todos: {
            todo1: '',
            todo2: '',
            todo3: ''
        }
    },
    {
        _id: 'fff',
        picture: '',
        color: '',
        content: 'hi im ex txt keep',
        type: 'noteTxt',
        video: '',
        audio: '',
        isDone: false,
        isPin: false,
        todos: {
            todo1: '',
            todo2: '',
            todo3: ''
        }
    },
    {
        _id: 'ggg',
        picture: '',
        color: '',
        content: 'hi im ex txt keep',
        type: 'noteVideo',
        video: '',
        audio: '',
        isDone: false,
        isPin: false,
        todos: {
            todo1: '',
            todo2: '',
            todo3: ''
        }
    }
]