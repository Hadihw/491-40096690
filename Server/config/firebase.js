const admin = require('firebase-admin');
const firestore = admin.firestore();

const usersCollection = firestore.collection('users');


module.exports = { firestore, usersCollection};