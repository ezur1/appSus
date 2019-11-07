'use strict';

import utilService from '../../main-service/util-service.js';
import storageService from '../../main-service/storage.js'
const KEEPS_KEY = 'keepsKey';

export default {
    query,
    createKeep,
    deleteKeep,
    saveUpdatedKeep
}


function createKeep(type, data) {
    let newKeep = {
        id: utilService.makeId(),
        isPinned: false,
        type,
        data
    };
    gKeeps.unshift(newKeep);
}

function deleteKeep(keepId) {
    console.log('keepId', keepId);
    let idx = gKeeps.findIndex(keep => keep.id === keepId);
    debugger;
    gKeeps.splice(idx, 1);
    storageService.store(KEEPS_KEY, gKeeps);
}

function saveUpdatedKeep(keepId, content) {

    console.log('keepId', keepId, 'content', content)
    let keep = gKeeps.find(keep => keep.id === keepId);
    keep.data = content;
    storageService.store(KEEPS_KEY, gKeeps);
}



function query() {
    var keep = storageService.load(KEEPS_KEY);
    if (!keep) {
        keep = gKeeps;
        storageService.store(KEEPS_KEY, keep);
    }
    gKeeps = keep;
    return gKeeps;
}




let gKeeps = [{
        id: 'aaa',
        isPinned: false,
        type: 'keepTxt',
        data: 'note no_1'

    },
    {
        id: 'bbb',
        isPinned: false,
        type: 'keepImg',
        data: 'https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/short-inspirational-quotes-take-the-risk-or-lose-the-chance-unknown-wisdom-quotes.jpg'
    },
    {
        id: 'ddd',
        isPinned: false,
        type: 'keepTxt',
        data: 'note no_2'
    },
    {
        id: 'ggg',
        isPinned: false,
        type: 'keepImg',
        data: 'https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/short-inspirational-quotes-impossible-is-for-the-unwilling-john-keats-wisdom-quotes.jpg'
    },
    {
        id: 'sss',
        isPinned: false,
        type: 'keepTxt',
        data: 'note no_3'
    },
    {
        id: 'www',
        isPinned: false,
        type: 'keepImg',
        data: 'https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/short-inspirational-quotes-stay-foolish-to-stay-sane-maxime-lagace-wisdom-quotes.jpg'
    },
    {
        id: 'ttt',
        isPinned: false,
        type: 'keepTxt',
        data: 'note no_4'
    },
    {
        id: 'nnn',
        isPinned: false,
        type: 'keepVideo',
        data: 'cG8PXdTlDag'
    },
]