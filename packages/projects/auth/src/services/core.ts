import { Base, Cookies, Handler, Local, Session } from '@client/services';
import { Environment } from '@client/setup';

class Core {
    public local = Local;
    public cookies = Cookies;
    public session = Session;
    public environment = Environment;

    public Handler = Handler;

    constructor() {
        this.setEnv();
        Base.data = { domain: Environment.domain };
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