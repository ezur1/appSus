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
        type: 'keepTxt',
        data: 'aaaaaaaaaaaaaa'

    },
    {
        id: 'bbb',
        isPinned: false,
        type: 'keepImg',
        data: 'https://files.cults3d.com/uploaders/13358296/illustration-file/a2773a25-9b1e-4772-8ba1-9e8ef4d3baab/bob%20esponja%20_large.jpg'
    },
    {
        id: 'ccc',
        isPinned: false,
        type: 'keepTxt',
        data: 'aaaaaaaaaaaaaa'
    }
]