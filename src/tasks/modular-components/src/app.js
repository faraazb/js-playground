import { Counter } from "./components/Counter.js";
import { Timer } from "./components/Timer.js";


const root = document.getElementById("root");

const counter = new Counter();
counter.mount(root)
counter.mount();

const counter2 = new Counter();
counter2.mount();

const timer = new Timer();
timer.mount(root);
timer.mount();

const timer2 = new Timer();
timer2.mount();