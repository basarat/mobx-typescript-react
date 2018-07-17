# Maintainable application state class pattern using MobX
> In this lesson we look at a maintainable `state classes` pattern for MobX-React applications. Modelling the real world is the core reason of existance for Classes and Mobx makes using these classes / their properties and their methods really easy for reactive (UI is just a reaction of the state) React applications.

We start off with a bare bones mobx-react-typescript application.

```ts
import { observable, action } from 'mobx';

/** 
 * Features
 * - Store a list of items (strings) 
 * - Allow maintaining a *current* string as it gets typed
 * - Add new new string to this list 
 * - Add an option to reset the list
 */
class ApplicationState {
  @observable
  items: string[] = [];

  @observable
  currentItem = '';

  @action
  changeCurrentItem(newValue: string) {
    this.currentItem = newValue;
  }

  @action
  addCurrentItem() {
    this.items.push(this.currentItem);
    this.currentItem = '';
  }

  @action
  reset() {
    this.items = [];
    this.currentItem = '';
  }
}

export const appState = new ApplicationState();

```

***Create a file appState.ts***
* To maintain the state logic of our UI application we create an `appState.ts` file
* Our application requirement are to 
    - READ OUT THE ONES MENTIONED
* We can easily model these data and method requirements as a class that 
    * stores the list of items
    * keeps track of the current item 
    * a method to allow you to add this current item to the list
    * a method to reset the application to the initial state

* To ensure that our application always has a nice consistent single state we create a single instance of the application state class and export that.

***Select the class***
* Notice that beyond the non-obtrusive `observable` and `action` annotations, this class is pretty much what anyone with a basic knowledge of JavaScript would have written straight out of school.


***Select the app.tsx file***
* Now lets create the UI for our application that allows use to add items to the list and reset the list.

```ts
import { observer } from 'mobx-react';

@observer
```
* You can make your application complex with ideas like `Provider` / `Connect` and even third party libraries that add more concepts and even more boiler plate but you really don't need to. All you need is the `observer` annotation. 

```ts
import { appState } from './appState';
```
* To use the state class, you simply bring in the singleton and use it.

```ts
<form onSubmit={e => {
  e.preventDefault();
  appState.addCurrentItem();
}}>
  <input
    value={appState.currentItem}
    onChange={e => appState.changeCurrentItem(e.target.value)} />
  <button type="submit">
    Add
  </button>
  <button type="button" onClick={() => appState.reset()}>
    Reset
  </button>
  <ul>
    {appState.items.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      );
    })}
  </ul>
</form>
```
* Within the render we create a new form
  * on form submission we prevent the browser default of a page post and simply call our state.addCurrentItem
* Next we have an input whose value and onChange are wired to the appState current item 
* Then a button to allow the user to click and submit the form 
* A button to reset the appState 
* Finally we render the items from the appState in to an unordered list.

***Select the `app.tsx` App class***
* Notice that to use the application state class pattern, we really didn't have to do anything special in order to create a UI that wires to the application state to the dom beyond a simple `@observer` annotation.

***`appState.ts` Select the appliation state class***
* This simple application state class pattern is simple to understand and is fundamentally easier to maintain and describe to new developers and maintain for experienced developers in the long run.

> Also if you have complex business logic in this class you can test it without wiring it up to react.

