import { FirebaseApp } from 'firebase/app';

import {Firebase} from './firebase';

class SSO {
    protected firebase: Firebase;
    protected authApp: FirebaseApp;
    
    constructor() {
        this.initialize();
        this.firebase = new Firebase(this.authApp);
    }

    protected initialize() {
        // const credentials = new Credentials().firebase;
        // this.authApp = initializeApp(credentials);
    }
}