# Counter
A simple counter example which uses DOM manipulation to add its sub-components to an HTML document.
It exports a `render(container)` function which takes an HTML node as an argument and replaces the container's children with the counter.

## Usage
```js
import { render as renderCounter } from "counter.js";

const container = document.createElement("div");
renderCounter(container);
```

The counter uses a state object to track the count and a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to track count changes and make appropriate UI changes. 