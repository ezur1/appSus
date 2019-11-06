'use strict';

// import utilService from '../../../main-service/util-service.js';
import storageService from '../../../main-service/storage.js';

export default {
  query,
  getMailById
}


const MAIL_KEY = 'gEmails';
var gEmails = [{
    id: 'AAA',
    body: 'Ipsum enim velit sint magna. Esse voluptate elit cillum occaecat in voluptate voluptate nulla exercitation amet. Aliqua deserunt nisi incididunt cillum Lorem deserunt consequat sunt reprehenderit elit pariatur.\r\n',
    subject: 'Welcome to Vue.js',
    sender: 'David Zur',
    isRead: false,
    recivedAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isFavorite: false
  },
  {
    id: 'BBB',
    body: 'Ipsum enim velit sint magna. Esse voluptate elit cillum occaecat in voluptate voluptate nulla exercitation amet. Aliqua deserunt nisi incididunt cillum Lorem deserunt consequat sunt reprehenderit elit pariatur.\r\n',
    subject: 'Are you Ready?',
    sender: 'Dumble Door',
    isRead: true,
    recivedAt: '09:45',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isFavorite: false
  },
  {
    id: 'CCC',
    body: 'Ipsum enim velit sint magna. Esse voluptate elit cillum occaecat in voluptate voluptate nulla exercitation amet. Aliqua deserunt nisi incididunt cillum Lorem deserunt consequat sunt reprehenderit elit pariatur.\r\n',
    subject: 'Welcome to Vue.js',
    sender: 'Natan Zur',
    isRead: true,
    recivedAt: '08:50',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isFavorite: false
  },
  {
    id: 'DDD',
    body: 'Ipsum enim velit sint magna. Esse voluptate elit cillum occaecat in voluptate voluptate nulla exercitation amet. Aliqua deserunt nisi incididunt cillum Lorem deserunt consequat sunt reprehenderit elit pariatur.\r\n',
    subject: 'Welcome to Vue.js',
    sender: 'David Zur',
    isRead: false,
    recivedAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isFavorite: true
  }
]




function query() {
  var emails = storageService.load(MAIL_KEY);
  if (!emails) {
    emails = gEmails;
    storageService.store(MAIL_KEY, emails);
  }
  gEmails = emails;
  return gEmails;
}

function getMailById(emailId) {
  const email = gEmails.find(email => email.id === emailId);
  return email;
}