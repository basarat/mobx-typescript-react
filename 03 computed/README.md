# MobX @computed properties
> MobX provides a neat little `@computed` decorator to exploit the *I know when you change* nature of observables for performance, fun and profit. 

> In this lesson we look at an example use case for `@computed` properties.


```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

class HelloData {
  @observable 
  clickedCount = 0;

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
      <>
      <button onClick={() => this.data.increment()}>
        Click count = {this.data.clickedCount}
      </button>
      </>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

```
We kickoff with a simple mobx-react-typescript application.
***Select HelloData***
* We have `HelloData` that contains a simple observable and an action.
***Select Hello***
* We have a simple `Hello` observer component that uses this data in the render method.
***Select `reactDom.render`***
* We render this component to the application root.

***click the button***
* When we click the button, an increment of the mobx observable causes the Hello component to re-render with the new count.

* Lets say we want to show additional UI based on whether the button has been clicked at least once or not. 
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
***click the button in the demo***
* Now when we click the button we get this new div showing up.

***Select the `this.data.clickedCount > 0`***

```js
  get hasBeenClicked() {
    return this.clickedCount > 0;
  }  
```
* Since this condition can be derived from the `clickedCount` and is worthy of a semantic name, we can move it into a nice getter in the data class.


```js
        this.data.hasBeenClicked
        && <div>You have clicked the button!</div>
```
* And now we get to use it in our render function

***Select the getter***
* For these simple getters that can be derived from observables, 

```js
import { observable, action, computed } from 'mobx';
```
* `mobx` provides the `computed` decortor which does additional optimizations like, not running the getter if the observed properties haven't changed.

```js
  @computed
  get hasBeenClicked() {
    return this.clickedCount > 0;
  }
```
* We mark the property as computed 

***Select the getter***
And now mobx will only re-run this getter if the value for the clickedCount changes. Just another neat optimization you get for free by using mobx obserables.
