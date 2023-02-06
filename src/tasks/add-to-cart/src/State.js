export default class State {
    #value;
    #subscribers;

    constructor(value, subscribers = []) {
        this.#value = value;
        this.#subscribers = subscribers;
    }

    get value() {
        return this.#value;
    }

    setValue = (cb) => {
        // this.#value = val;
        this.#value = cb(this.#value);
        this.#subscribers.forEach(subscriber => {
            subscriber(this.#value);
        });
    }

    addSubscriber = (subscriber) => {
        this.#subscribers.push(subscriber);
    }

    setSubscribers = (subscribers) => {
        this.#subscribers = subscribers;
    }
}