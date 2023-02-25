import { Environment } from '@client/setup';

class Core {
    public environment = Environment;

    constructor() {
        this.setEnv();
    }

    private setEnv() {
        new Environment({
            env: process.env.REACT_APP_ENV
        });
    }
}

export default new Core();