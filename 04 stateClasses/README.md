# Maintainable application state pattern using MobX
> In this lesson we look at a maintainable `state classes` pattern for MobX-React applications. Modelling the real world is the core reason of existance for Classes and Mobx makes using these classes / their properties and their methods really easy for reactive (UI is just a representation of the state) React applications.

Lets kickoff with a simple mobx-react-typescript application.
* We will create an application that allows you to maintain a list of items

```ts
// appState.ts
```
* We can easily model the state as a class that has a current value the user is trying to add along with a list of thems and an action that adds an item. 
* It is also a good idea to have a `reset` action available that resets the application to a known initial state.
* To ensure that our application always has a nice consistent state we create a single instance of the application state class and export that.


```ts
// app.tsx
```
> You can make your application complex with ideas like `Provider` / `Connect` and even third party libraries that add more concepts and even more boiler plate but you really don't need to. All you need is the observer annotation. 


***`appState.ts` Select the appliation state class***
This simple application class state pattern is simple to understand and is fundamentally easier to maintain and describe to new developers in the long run.

***`app.ts` Select the app component***
It means our application state behaviour is isolated from our application HTML and rendering behaviour.
