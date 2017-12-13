# MobX Transactions and @action
> MobX gives you amazing `PureComponent` performance nearly for free. In this lesson we take a deeper look at `@actions` how they allow you to perform mutation in a controlled manner.

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
***Demo react click the button a few times***
* As we click the button, the click count is incremented and the ui updates accordingly.

Mobx provides excellent dev-tools that allow you to observe changes that happen in actions. We can install them simply with npm install.
```
npm install mobx-react-devtools
```

We simply import the component and render it along with the `app`. 

```js
import MobxReactDevtools from 'mobx-react-devtools'; // Top of file 

// Bottom of file 
ReactDOM.render(
  <>
  <Hello />
  <MobxReactDevtools />
  </>,
  document.getElementById('root')
);
```

One of the cool features in the dev tools is the ability to log out all the state changes and their impact. 

***Check the last box in the mobx dev tools and open chrome dev tools and clear it***
* Now if we click the button you can see the action called along with the reaction that causes the hello component to re-render. 
***Highlight the console to use action and reaction*** 

***Close the dev tools and select the action***
* A fundamental rule of good maintainable mobx is to always carry out mutations in action. 

* By default, you can in carry out mutations from non `action` methods e.g. 

```js
<button onClick={() => this.data.clickedCount++}>
```
***Run the code***
You can see that it still works as expected, 

***Select the data class*** 
but this makes the flow of changes in the state hard to follow as its spread across the data class and components that use it. 

***Find references to clickedCount in the class***
* This capability is nothing to be scared of for a TypeScript developer as if you notice a property changing, you can simply *find its references* 

* And reliably refactor to action methods on the data class. 
```js
<button onClick={() => this.data.increment()}>
```
