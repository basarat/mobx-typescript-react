# Using mobx in a React project

> React is great for diffing between Virtual-DOM and rendering it to the dom. It also offers a naieve solution for diffing state in terms of `setState`. However it is slightly verbose and not easy to scale. MobX offers a very simple and effective solution to manage state in React applications.

Here I have a simple TypeScript application that renders the component `Hello` to the dom using React and React Dom.
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello world.
      </div>
    );
  }
}

ReactDOM.render(
  <Hello/>,
  document.getElementById('root')
);
```
