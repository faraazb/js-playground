import { generateUniqueId, formatTime } from "../utils.js";


class Timer {
    #id;
    #milliseconds = 0;
    #tickInterval;
    #isTicking = false;
    #isMounted = false;

    constructor() {
        this.#id = generateUniqueId({ prefix: "timer" });
    }

    get isTicking() {
        return this.#isTicking;
    }

    get milliseconds() {
        return this.#milliseconds;
    }

    #tick() {
        this.#milliseconds += 10;
        this.#updateTime();
    }

    start() {
        this.#isTicking = true;
        if (this.#tickInterval) {
            clearInterval(this.#tickInterval);
        }
        this.#tickInterval = setInterval(this.#tick.bind(this), 10);
        // this.#tickInterval = setInterval(this.#tick, 10)
    }

    pause() {
        this.#isTicking = false;
        if (this.#tickInterval) {
            clearInterval(this.#tickInterval);
        }
    }

    reset() {
        this.#isTicking = false;
        if (this.#tickInterval) {
            clearInterval(this.#tickInterval);
        }
        this.#milliseconds = 0;
        this.#updateTime();
    }

    #updateTime() {
        const time = document.querySelector(`#${this.#id} > .timer__time`);
        time.innerText = formatTime(this.#milliseconds);
    }

    render() {
        const timerEl = document.createElement("div");
        timerEl.className = "timer";
        timerEl.id = this.#id;

        const timerValue = document.createElement("div");
        timerValue.innerText = "00:00:00"
        timerValue.className = "timer__time";

        const startIcon = document.createElement("span");
        startIcon.className = "material-symbols-outlined";
        startIcon.innerText = "play_arrow"

        const pauseIcon = document.createElement("span");
        pauseIcon.className = "material-symbols-outlined";
        pauseIcon.innerText = "pause"

        const replayIcon = document.createElement("span");
        replayIcon.className = "material-symbols-outlined";
        replayIcon.innerText = "replay"

        const startPauseButton = document.createElement("button")
        startPauseButton.className = "timer__toggle-button";
        startPauseButton.appendChild(startIcon);
        startPauseButton.onclick = () => {
            if (!this.#isTicking) {
                this.start();
                startPauseButton.replaceChildren(pauseIcon);
                startPauseButton.className = "timer__toggle-button pause";
            }
            else {
                this.pause();
                startPauseButton.replaceChildren(startIcon);
                startPauseButton.className = "timer__toggle-button";
            }
        };

        const resetButton = document.createElement("button")
        resetButton.className = "timer__reset-button";
        resetButton.appendChild(replayIcon);
        resetButton.onclick = () => {
            this.reset()
            startPauseButton.replaceChildren(startIcon);
            startPauseButton.className = "timer__toggle-button";
        };

        const timerActions = document.createElement("div");
        timerActions.className = "timer__actions";
        timerActions.appendChild(resetButton);
        timerActions.appendChild(startPauseButton);

        timerEl.appendChild(timerValue);
        timerActions.appendChild(resetButton);
        timerActions.appendChild(startPauseButton);
        timerEl.appendChild(timerActions);

        return timerEl;
    }

    mount(el = document.body) {
        if (this.#isMounted) {
            console.warn(document.getElementById(this.#id), "is already mounted!")
            return;
        }
        this.#isMounted = true;
        el.appendChild(this.render());
    }
}

export { Timer };
