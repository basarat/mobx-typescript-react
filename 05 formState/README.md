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
***Select the currentItem and onChange in appState.tsx***
* Looking at the app it would be great if we could create a reusable `input` field component. 
* Similarly looking at the `appState` it would be great if we could create a reusable field state. 

***Create `field.tsx`***
* You can even refactor this to consolidate it into a class of its own e.g. lets create a `FieldState` class. 
* And we can refactor the rendering of this component into a reuseable piece as well e.g. lets create a `FieldInput` class. 


> Next steps can include adding validation and error maintainance along with the ability to compose field states into a nice cohesive form state. This is exactly what a library `FormState` does. 

```
npm install formstate
```
* We bring it in from `npm`

```
```
***field.tsx***
* And then use it instead of creating our own `FieldState` class. 
* We just refactor the input to use this `FieldState`. 


***Select the `FieldInput`***
* Note that having the ability to author our own `FieldInput` allows us to design an input that matches our design requirements without having to worry about the core logic of field state management and validation.
