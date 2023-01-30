const generateUniqueId = (config) => {
    const { prefix } = config;
    if (prefix) {
        return prefix + "-" + Math.random().toString(36).substring(2);
    }
    return Math.random().toString(36).substring(2);
};

const formatTime = (milliseconds) => {
    if (typeof milliseconds === "number") {
        const ms = milliseconds > 1000 ? milliseconds % 1000 : milliseconds;
        const sec = Math.floor(milliseconds / 1000) % 60;
        const min = Math.floor(milliseconds / 60000);

        const msec = ms < 10 ? `00${ms}` : ms < 100 ? `0${ms}` : ms.toString();
        const seconds = sec < 10 ? `0${sec}` : sec.toString();
        const minutes = min < 10 ? `0${min}` : min.toString();
        return `${minutes}:${seconds}:${msec.slice(0, 2)}`;
    }
}

export { generateUniqueId, formatTime };
