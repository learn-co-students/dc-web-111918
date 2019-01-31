# React Component Lifecycle

## Available Methods
- For class components that extend React.Component
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- https://reactjs.org/docs/react-component.html

## Task Lister
- Walk through

## Lifecycle Methods only for class components

### Creation
- `componentDidMount()`
 - fetch
 - add extra event listeners
 - set up timers
 - things that require the DOM/window

#### Setting Initial State using Props

### Update
- `render()`
 - has a return value
 - don't update state here
- `componentDidUpdate()`

### Deletion
 - `componentWillUnmount()`
  - called right before element is removed from DOM
  - clean up things from componentDidMount

#### Where to put fetch?
- ComponentDidMount
- Event handlers

### Less used methods we won't cover in lecture
- `shouldComponentUpdate()`
- `getDerivedStateFromProps()`
- `getSnapshotBeforeUpdate()`

### Deprecated Methods, don't use these ever
- `componentWillMount()`
- `componentWillReceiveProps()`
- `componentWillUpdate()`
