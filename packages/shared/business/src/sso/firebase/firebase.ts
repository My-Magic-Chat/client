import * as firebase from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';

import { IError } from './interface';

export class Firebase {
    private auth: firebase.Auth;

    constructor(app: FirebaseApp) { this.auth = firebase.getAuth(app); }

    public async signIn(email: string, password: string): Promise<firebase.UserCredential> {
        return firebase.signInWithEmailAndPassword(this.auth, email, password)
            .then(res => res)
            .catch((e: IError) => {
                console.log('deu erro - signIn');
            }) as any;
    }

    public async signUp(email: string, password: string): Promise<firebase.UserCredential> {
        return firebase.createUserWithEmailAndPassword(this.auth, email, password)
            .then(res => res)
            .catch((e: IError) => {
                console.log('deu erro - signUp');
            }) as any;
    }

    public async resetPass(email: string) {
        await firebase.sendPasswordResetEmail(this.auth, email)
            .then(res => res)
            .catch((e: IError) => {
                console.log('deu erro - resetPass');
            }) as any;
    }

    public async signOut(): Promise<void> {
        firebase.signOut(this.auth);
    }
}