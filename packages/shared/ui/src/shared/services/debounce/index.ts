class Debounce {
    private timeout: NodeJS.Timeout | undefined;
    public delay(func: () => void, milliseconds = 500) {
        if (!milliseconds) {
            func();
            return;
        }

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => { func(); }, milliseconds);
    }
}

export default new Debounce;
