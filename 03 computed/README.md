# Computed properties
> MobX provides a neat little `@computed` decorator to exploit the *I know when you change* nature of observables for performance, fun and profit. 

> In this lesson we look at an example use case for `@computed` properties.

Lets kickoff with a simple mobx-react-typescript application.
* We have a simple `Hello` component that maintains a local `clickedCount` state

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

class HelloData {
  @observable clickedCount = 0;

  @action
  increment() {
    this.clickedCount++;
  }
}

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

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

```

* Lets say we want to show additional UI based on wheather the button has been clicked or not. 
* We can do it easily with a simple condition check and showing a div if the condition is met

```js
  return (
      <>
      <button onClick={() => this.data.increment()}>
        Click count = {this.data.clickedCount}
      </button>
      {
        this.data.clickedCount > 0
        && <div>You have clicked the button!</div>
      }
      </>
    );
```
***run the demo***
* Now when we click the button we get this new div showing up.

***Select the `this.data.clickedCount > 0`***
* Since this condition can be derived from the `clickedCount` and worth understanding in isolation, we can move it into a nice getter in the data class.

```js
  get hasBeenClicked() {
    return this.clickedCount > 0;
  }
  
```
* And now we get to use it in our render function
```js
        this.data.hasBeenClicked
        && <div>You have clicked the button!</div>
```


* For these simple getters that can be derived from observables, `mobx` provides the `computed` decortor which does additional optimizations like, not running the getter if the observed properties haven't changed.

```js
import { observable, action, computed } from 'mobx';
```
* We mark the property as computed 
```js
  @computed
  get hasBeenClicked() {
    return this.clickedCount > 0;
  }
```
And now mobx will only re-run this getter if the value for the clickedCount changes. Just another neat optimization you get by using mobx obserables.