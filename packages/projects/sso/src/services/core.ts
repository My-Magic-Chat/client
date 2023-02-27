import { Base, Cookies, Handler, Local, Session, Http } from '@client/services';
import { Environment } from '@client/setup';
import { SSO } from '@client/business';

class Core {
    public http = Http;
    public local = Local;
    public cookies = Cookies;
    public session = Session;
    public environment = Environment;

    public sso!: SSO;

    public Handler = Handler;

    constructor() {
        this.setEnv();
        Base.data = { domain: Environment.domain };

        SSO.setCredentials({
            appId: process.env.REACT_APP_ID,
            apiKey: process.env.REACT_APP_API_KEY,
            projectId: process.env.REACT_APP_AUTH_DOMAIN,
            authDomain: process.env.REACT_APP_PROJECT_ID,
            storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
            measurementId: process.env.REACT_APP_MEASUREMENT_ID,
            messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        });

        this.sso = new SSO();
    }

    private setEnv() {
        new Environment({
            env: process.env.REACT_APP_ENV,
            domain: process.env.REACT_APP_DOMAIN,
            baseUrl: process.env.REACT_APP_BASE_URL,
        });
    }
}

export default new Core();