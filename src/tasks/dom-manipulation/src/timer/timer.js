// helper function to format ellapsed time
const formatTime = function (time) {
    const milliseconds = time.ms < 10 ? `00${time.ms}` : time.ms < 100 ? `0${time.ms}` : time.ms;
    const seconds = time.sec < 10 ? `0${time.sec}` : time.sec;
    const minutes = time.min < 10 ? `0${time.min}` : time.min;
    return `${minutes}:${seconds}:${milliseconds.toString().slice(0, 2)}`;
}


// Timer constructor
function Timer(onTick, onRecord) {
    this.tick = this.tick.bind(this);
    this.onTick = onTick;
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
    this.interval = null;
    this.isTicking = false;
    // this.records = [];
    this.onRecord = onRecord;
}

Timer.prototype.tick = function () {
    this.ms += 10;
    if (this.ms === 1000) {
        this.ms = 0;
        this.sec++;
        if (this.sec === 60) {
            this.sec = 0;
            this.min++;
        }
    }
    this.onTick({ ms: this.ms, sec: this.sec, min: this.min });
}

Timer.prototype.start = function () {
    this.isTicking = true;
    this.interval = setInterval(this.tick, 10);
}

Timer.prototype.pause = function () {
    this.isTicking = false;
    clearInterval(this.interval);
}

Timer.prototype.reset = function () {
    this.isTicking = false;
    if (this.interval) {
        clearInterval(this.interval);
    }
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
    this.onTick({ ms: this.ms, sec: this.sec, min: this.min });
}

Timer.prototype.record = function () {
    // this.records.push({ms: this.ms, sec: this.sec, min: this.min});
    if (this.onRecord) {
        this.onRecord({ ms: this.ms, sec: this.sec, min: this.min });
    }
}

// UI
const timerEl = document.createElement("div");
timerEl.className = "timer";

const timerValue = document.createElement("div");
timerValue.innerText = "00:00:00"
timerValue.className = "timer__time";

// const records = document.createElement("div");
// records.className = "timer__records"

const updateTime = function (time) {
    timerValue.innerText = formatTime(time);
}

const recordTime = function (time) {
    console.log(time);
    const record = document.createTextNode(formatTime(time))
    records.appendChild(record);
}

const timer = new Timer(updateTime, recordTime);


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
    if (!timer.isTicking) {
        timer.start();
        startPauseButton.replaceChildren(pauseIcon);
        startPauseButton.className = "timer__toggle-button pause";
    }
    else {
        timer.pause();
        startPauseButton.replaceChildren(startIcon);
        startPauseButton.className = "timer__toggle-button";
    }
};

const resetButton = document.createElement("button")
resetButton.className = "timer__reset-button";
resetButton.appendChild(replayIcon);
resetButton.onclick = () => {
    timer.reset()
    startPauseButton.replaceChildren(startIcon);
};

// const recordButton = document.createElement("button")
// recordButton.className = "timer__record-button";
// recordButton.innerText = "Record";
// recordButton.onclick = () => timer.record();

const timerActions = document.createElement("div");
timerActions.className = "timer__actions";
timerActions.appendChild(resetButton);
timerActions.appendChild(startPauseButton);

timerEl.appendChild(timerValue);
// timerEl.appendChild(records);
timerActions.appendChild(resetButton);
timerActions.appendChild(startPauseButton);
timerEl.appendChild(timerActions);

const render = function (container) {
    container.replaceChildren(timerEl);
}


export { render, Timer };