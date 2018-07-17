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

> Lets say we want to show additional UI based on whether the button has been clicked at least once or not. 

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
* We can do it easily with a simple condition check and showing a div if the condition is met

***click the button in the demo***
* Now when we click the button we get this new div showing up.

***Select the `this.data.clickedCount > 0`***

```js
        this.data.hasBeenClicked
        && <div>You have clicked the button!</div>
```

```js
  get hasBeenClicked() {
    return this.clickedCount > 0;
  }  
```
* Since this condition is derived from the `clickedCount` member of the data class,we can move it into a nice getter with a semantic name in the data class that will help future maintainers of that class understand the data flow a bit better.

***Click the button***
You can see that the application still functions as expected.

***Select the getter***
* For these simple getters that can be derived from observables, 

```js
import { observable, action, computed } from 'mobx';
```

```js
  @computed
  get hasBeenClicked() {
    return this.clickedCount > 0;
  }
```
* `mobx` provides the `computed` decortor which does not change the observed behaviour of the application.

***Select the getter***
However we get a neat optimization for free here. Mobx will only re-run this getter if the value for the clickedCount changes. If none of the observables in a computed have changed, the getter simply returns the last value without running its body.

```ts
console.log('called');
```

```ts
        {
          this.data.hasBeenClicked
          && <div>You have clicked the button!</div>
        }
        {
          this.data.hasBeenClicked
          && <div>You have clicked the button!</div>
        }
```

* To demonstrate this, lets add a log to the getter
* And then access the getter twice from the render function 

***Have console open and click the button***
* Now when we run the application you can see that the body of the getter only executes once even though its value is requested twice. This is because mobx knows that the observable used by the getter hasn't changed and therefore doesn't need to re-run the body to get the new result. 

> This is just another example of mobx taking advantage of the observables to give you the best performing UI application with minimal effort.
