# Timer
A simple timer example which uses DOM manipulation to add its sub-components to an HTML document.
It exports a `render(container)` function which takes an HTML node as an argument and replaces the provided container's children with the timer. It also exports a Timer constructor which can be used to instantiate multiple timers.

## Timer with UI
```js
import { render as renderCounter } from "timer.js";

const container = document.createElement("div");
renderCounter(container);
```
## Timer API
### Usage
```js
const timer = new Timer(onTick, onRecord)
```
Both the below callbacks are called with an object of the structure: `{ms: number, sec: number, min: number}`
- `onTick` - a callback function called every 10ms.
- `onRecord` - a callback function called after recording the time.

### Properties
- `isTicking` - a boolean indicating if timer is running.
- `ms` - a number denoting current milliseconds.
- `sec` -  a number denoting current seconds.
- `min` - a number denoting current minutes.

### Methods
- `start()` - start/continue the timer
- `pause()` - pause the timer
- `reset()` - reset the timer
- `record()` - record the time (timer will call the specified `onRecord` method and pass an object denoting time)