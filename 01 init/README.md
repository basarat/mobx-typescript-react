# Using mobx in a React project

> React is great for diffing between Virtual-DOM and rendering it to the dom. It also offers a naieve solution for diffing state in terms of `setState`. However it is slightly verbose and not easy to scale. MobX offers a very simple and effective solution to manage state in React applications.

Lets kickoff with a simple react-typescript application. 
* We have a `Hello` component that maintains a local `clickedCount` state. 
* As we click the button the click count is incremented and the ui updates accordingly. 

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Hello extends React.Component<{}, { clickedCount: number }> {
  constructor(props) {
    super(props);
    this.state = {
      clickedCount: 0
    };
  }
  increment = () => {
    this.setState({
      clickedCount: this.state.clickedCount + 1
    });
  }
  render() {
    return (
      <button onClick={this.increment}>
        Click count = {this.state.clickedCount}
      </button>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

```
***Demo react click the button a few times***

