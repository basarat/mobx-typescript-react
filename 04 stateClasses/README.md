# Maintainable application state pattern using MobX
> In this lesson we look at a maintainable `state classes` pattern for MobX-React applications. Modelling the real world is the core reason of existance for Classes and Mobx makes using these classes / their properties and their methods really easy for reactive (UI is just a representation of the state) React applications.

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


```ts
import { observer } from 'mobx-react';

@observer
```
***Select the app.tsx file***
* You can make your application complex with ideas like `Provider` / `Connect` and even third party libraries that add more concepts and even more boiler plate but you really don't need to. All you need is the `observer` annotation. 

* To use the state class, you simply bring in the singleton and use it.


***`appState.ts` Select the appliation state class***
* This simple application class state pattern is simple to understand and is fundamentally easier to maintain and describe to new developers and maintain for experienced developers in the long run.
* If you have complex business logic you can test it without wiring it up to react.

