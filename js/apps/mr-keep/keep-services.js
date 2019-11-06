'use strict';

import utilService from '../../main-service/util-service.js';

const KEEPS_KEY = 'keepsKey';

export default {
    createKeep,
    getKeeps
}

function createKeep(type, data) {
    console.log('data', data);
    let newKeep = {
        id: utilService.makeId(),
        isPinned: false,
        type,
        data
    };
    console.log('newKeep', newKeep);
    gKeeps.unshift(newKeep);
}


function getKeeps() {
    return gKeeps;
}

function findKeepById() {

}

let gKeeps = [{
        id: 'aaa',
        isPinned: false,
        type: '',
        data: {

        }
    },
    {
        id: 'bbb',
        isPinned: false,
        type: '',
        data: {

        }
    },
    {
        id: 'ccc',
        isPinned: false,
        type: '',
        data: {

        }
    },
    {
        id: 'ddd',
        isPinned: false,
        type: '',
        data: {

        }
    },
    {
        id: 'fff',
        isPinned: false,
        type: '',
        data: {

        }
    },
    {
        id: 'eee',
        isPinned: false,
        type: '',
        data: {

        }
    }
]