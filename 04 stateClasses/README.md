# Maintainable application state pattern using MobX
> In this lesson we look at a maintainable `state classes` pattern for MobX-React applications. Modelling the real world is the core reason of existance for Classes and Mobx makes using these classes / their properties and their methods really easy for reactive (UI is just a representation of the state) React applications.

Lets kickoff with a simple mobx-react-typescript application.
* Make an input component 
* You can see that the input component is completely unaware of mobx and a thing / styled abstraction over the standard html input.
* Now lets use it in an application that allows you to maintain a list of items
* We can easily model the state as a class that has a current value the user is trying to add along with a list of thems and an action that adds an item. 
* It is also a good idea to have a `reset` action available that resets the application to a known initial state.

***Select the appliation state class***
You can make your applicaiton complex with ideas like `Provider` / `Connect` and even third party libraries that add more concepts and boiler plate, but this application class state pattern is simple to understand, which I would argue makes it fundamentally easier to maintain and describe to new developers in the long run. 
