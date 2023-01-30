# Modular JavaScript Components

This tree has two modular [components](src/components/) which can be mounted to a container element.

## Counter API
### Constructor
`Counter()`

Creates a new `Counter` object. Accepts an argument for the start count

### Properties
`count`

The current count. Can also be set to an arbitrary integer

### Instance methods
`increment()`

Increment the count by 1

`decrement()`

Decrement the count by 1

`reset()`

Reset the count to 0

`render()`

Render the HTML

`mount(el)`

Mount the component to an HTML node

## Timer API
`Timer()`

Creates a new `Timer` object

### Properties
`isTicking`

Boolean indicating if the timer is running

`milliseconds`

Ellapsed milliseconds

### Instance Methods
`start()`

Start the timer

`pause()`

Pause the timer

`reset()`

Reset the timer

`render()`

Render the HTML

`mount(el)`

Mount the component to an HTML node

