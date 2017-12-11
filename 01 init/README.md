# Using mobx in a React project

> React is great for diffing between Virtual-DOM and rendering it to the dom. It also offers a naieve solution for diffing state in terms of `setState`. However it is slightly verbose and not easy to scale. MobX offers a very simple and effective solution to manage state in React applications.

Lets kickoff with a simple react-typescript application. 
* We have a `Hello` component that maintains a local `clickedCount` state. 

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
* As we click the button the click count is incremented and the ui updates accordingly. 

***Open up shell***
Using mobx in a typescript react application is super easy. All we need to do is install `mobx` along with `mobx-react`.

```sh
npm install mobx mobx-react
```
Since mobx is written in TypeScript there is no additional setup or type definitions required.

***Jump back to code***
* `mobx` provides decorators `observable` to mark a property as observable and `action` to carry out mutations in a transactional manner. 
* `mobx-react` provides a decorater `observer` that can warp a react component to make it reactive to observable changes.

```js
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
```
These three simple decorators are pretty much all you need to build highly scalable and easy to understand applications.

* We can isolate the state managment into a simple `HelloData` class. 
* It contains a simple `clickedCount` observable property.
* And an `increment` action that increments this clicked count property.

```js
class HelloData {
  @observable clickedCount = 0;

  @action
  increment() {
    this.clickedCount++;
  }
}
```

To use this data class in react we simply make the component `@observer`
* We no longer need to use generics for state. 
* We simply initialize the data whenever the component is initiated. 
* And then use this data to increment the count, as well as show the current count. 

```js
@observer
class Hello extends React.Component<{}> {
  data = new HelloData();
  render() {
    return (
      <button onClick={() => this.data.increment()}>
        Click count = {this.data.clickedCount}
      </button>
    );
  }
}
```

***Select the data class***
* Moving this data managment out of the React component means is completely independent of react and it can even be used in a server enviroment without any changes.

***Select the component***
* Using `mobx` effectively turns react into a simple and effective `data -to-> dom` transform. And all data management becomes simple JavaScript that can be tested and reasoned about in isolation.