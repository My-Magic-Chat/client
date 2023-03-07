import * as firebase from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';

import { Handler } from '@client/services';

import { IError } from './interface';

export class Firebase {
    private auth: firebase.Auth;

    constructor(app: FirebaseApp) { this.auth = firebase.getAuth(app); }

    public async signIn(email: string, password: string): Promise<firebase.UserCredential> {
        return firebase.signInWithEmailAndPassword(this.auth, email, password)
            .then(res => res)
            .catch(e => { throw new Handler({ path: 'SSO', id: e.code }, 'api'); });
    }

    public async signUp(email: string, password: string): Promise<firebase.UserCredential> {
        return firebase.createUserWithEmailAndPassword(this.auth, email, password)
            .then(res => res)
            .catch(e => { throw new Handler({ path: 'SSO', id: e.code }, 'api'); });
    }

    public async resetPass(email: string) {
        firebase.sendPasswordResetEmail(this.auth, email)
            .then(res => res)
            .catch((e: IError) => {
                console.log('deu erro - resetPass');
            }) as any;
    }

    public async signOut(): Promise<void> {
        firebase.signOut(this.auth);
    }

    public async googleSignIn() {
        const provider = new firebase.GoogleAuthProvider();
        firebase.signInWithPopup(this.auth, provider)
            .then((res) => {
                const credential = firebase.GoogleAuthProvider.credentialFromResult(res);
                const token = credential.accessToken;
                const user = res.user;
            }).catch((e) => {
                const credential = firebase.GoogleAuthProvider.credentialFromError(e);
                console.log('credential', credential);
                throw new Handler({ path: 'SSO', id: e.code }, 'api');
            });
    }
}