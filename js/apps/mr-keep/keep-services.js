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
        data: 'note no_1'

    },
    {
        id: 'bbb',
        isPinned: false,
        type: 'keepImg',
        data: 'https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/short-inspirational-quotes-take-the-risk-or-lose-the-chance-unknown-wisdom-quotes.jpg'
    },
    {
        id: 'ccc',
        isPinned: false,
        type: 'keepTxt',
        data: 'note no_2'
    },
    {
        id: 'ccc',
        isPinned: false,
        type: 'keepImg',
        data: 'https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/short-inspirational-quotes-impossible-is-for-the-unwilling-john-keats-wisdom-quotes.jpg'
    },
    {
        id: 'ccc',
        isPinned: false,
        type: 'keepTxt',
        data: 'note no_3'
    },
    {
        id: 'ccc',
        isPinned: false,
        type: 'keepImg',
        data: 'https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/short-inspirational-quotes-stay-foolish-to-stay-sane-maxime-lagace-wisdom-quotes.jpg'
    },
    {
        id: 'ccc',
        isPinned: false,
        type: 'keepTxt',
        data: 'note no_4'
    },
]