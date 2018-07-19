# Testing Mobx Applications

>  MobX is independent of React and really you can use whatever testing framework you want with it. Testing MobX is essentially as easy as testing simple JavaScript functions. This lesson demonstrates an example with Jest.

***npm start***
***app.tsx***
***Add a foo and a bar and reset***
Here we have a simple application state class from a previous lesson. 

***appState.ts***
The behaviour of this application is described by the application state class. 

***Select the appState singleton***
So in order to test the application behaviour we can go a long way by simply testing that the `appState` behaves as expected. 


***show jest.config.js***
We already have jest setup using the standard TypeScript jest process that is covered in a seperate TypeScript React lesson. 

***create `appState.test.ts`***
Lets add a test for this `appState`

***Select the whole test file***
You can see that the fact that mobx is transparent reactive you get to write simple JavaScript classes for your state and test it without having to go through complex apis and patterns.