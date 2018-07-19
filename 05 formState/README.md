# Creating reusable state class driven components 

> The state class pattern can easily be expanded to allow you to create component-ui / component-state pairs that provide reuseable functionality for your applications. 

> In this lesson we look at an example of creating a reuseable input component. 

> We also mention a reuseable form state management library that uses the state class pattern. 

```bash
npm start 
# have `app.tsx` open
# add an item 
# press reset 
```
* We start off with the base list application from the previous lesson. You can add items to a list and reset it if you want. 


***Select the `input` in app.tsx***
* Looking at the app it would be great if we could create a reusable `input` field component. 
***Select the currentItem and onChange in appState.tsx***
* Similarly looking at the `appState` it would be great if we could create a reusable field state. 

***Create `field.tsx`***
* Let's refactor the application to create these reusable pieces of logic.

```ts
import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

export class FieldState {
  @observable
  value = '';

  @action
  onChange(newValue: string) {
    this.value = newValue;
  }
}

@observer
export class FieldInput extends React.Component<{ fieldState: FieldState }>{
  render() {
    return (
      <input
        value={this.props.fieldState.value}
        onChange={
          (e) => this.props.fieldState.onChange(e.target.value)
        }
      />
    );
  }
}

```
* We bring in the usual suspects `react`, mobx and mobx-react
* We can refactor the reuseable portion of the state in a nice class called FieldState that has a `value` property and an `onChange` action. 
* Similarly we can refactor the rendering of such a fieldState to a reuseable `FieldInput` component, that takes a fieldState as prop and wires it up to an input in the render method.

***appState.ts***
```ts
  @observable
  currentItem = new FieldState();

  @action
  addCurrentItem() {
    this.items.push(this.currentItem.value);
    this.currentItem.onChange('');
  }

  @action
  reset() {
    this.items = [];
    this.currentItem.onChange('');
  }
```
* Now in our appState we get to use this `FieldState` to consolidate the reuseable input state for the current item. Simply wrap up the refactoring courteously pointed out by TypeScript. 

***app.tsx***
```ts
<FieldInput fieldState={appState.currentItem} />
```
* Similarly in app.tsx we get to use our `FieldInput` and simply wire it up to the current item fieldState.

***npm start, add an item, clear item***
* As you can see the application still works as expected.

> Next steps can include adding validation and error maintainance along with the ability to compose field states into a nice cohesive form state. This is exactly what a library `FormState` does. 

```
npm install formstate
```
* We bring it in from `npm`

***field.tsx***
```ts
import { FieldState } from 'formstate';

@observer
export class FieldInput extends React.Component<{ fieldState: FieldState<string> }>{
  render() {
    return (
      <input
        value={this.props.fieldState.value}
        onChange={
          (e) => this.props.fieldState.onChange(e.target.value)
        }
      />
    );
  }
}

```
* And then use it instead of creating our own `FieldState` class. 
* We just refactor the input to use this `FieldState` of `string`.
***appState.ts***
```ts
import { FieldState } from 'formstate';

  @observable
  currentItem = new FieldState('');
```
And initialize it in appState.


```ts
style={{ border: '1px solid skyblue' }}
```
***Select the `field.tsx` FieldInput`***
* Note that having the ability to author our own `FieldInput` allows us to design an input that matches our design requirements 
***Select the `value` and `onChange`***
* without having to worry about the core logic of field state management and validation.

***open the formstate docs***
There is ofcourse much more to the formstate library. However the focus here was simply to demonstrate the reuseability of state classes with state class prop components.
