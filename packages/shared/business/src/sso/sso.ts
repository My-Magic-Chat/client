import { FirebaseApp } from 'firebase/app';
import * as firebase from 'firebase/auth';

import { Firebase } from './firebase';

export class SSO {
    protected firebase: Firebase;

    constructor(app: FirebaseApp) {
        this.firebase = new Firebase(app);
    }

    public async signOut(): Promise<void> {
        return this.firebase.signOut()
            .then(() => { console.log('LOGOUT'); });
    }

    public async signIn(email: string, password: string): Promise<firebase.UserCredential> {
        return this.firebase.signIn(email, password)
            .then(r => r);
    }

    public async signInWithGoogle(): Promise<void> {
        this.firebase.googleSignIn();
    }

    public async signUp(email: string, password: string): Promise<firebase.UserCredential> {
        return this.firebase.signUp(email, password);
    }

    public async forgot(email: string): Promise<void> {
        return this.firebase.resetPass(email);
    }
}