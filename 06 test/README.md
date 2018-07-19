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


***show package.json***
> We already have jest setup using the standard TypeScript jest process that is covered in a seperate TypeScript React lesson.
* It simply involves the installation of type types for `jest`, `jest` itself and `ts-jest`. 
* And a script target to run jest.
***show jest.config.js***
* We configure jest with a simple copy paste of the `jest.config.js` from the TypeScript React course.


***appState.ts select the features***
* We will go ahead and write test for all the features provided by this class. 

***create `appState.test.ts`***
```ts
import { appState } from './appState';

beforeEach(() => {
  appState.reset();
});

test('Store a list of items', () => {
  expect(appState.items).toEqual([]);
});

test('Allow maintaining a *current* string as it gets typed', () => {
  expect(appState.currentItem).toEqual('');

  appState.changeCurrentItem('a');
  expect(appState.currentItem).toEqual('a');

  appState.changeCurrentItem('ab');
  expect(appState.currentItem).toEqual('ab');
});

test('Ability to add this *current* string to the list of items', () => {
  appState.changeCurrentItem('ab');
  appState.addCurrentItem();

  expect(appState.items).toEqual(['ab']);
});

test('Option to reset the items and the current string', () => {
  appState.changeCurrentItem('a');
  appState.addCurrentItem();
  appState.reset();

  expect(appState.currentItem).toEqual('');
  expect(appState.items).toEqual([]);
});

```
* We start off with a test file 
* Before each test we reset the appstate to its initial state. 
* Next we add a test for each of the features.
* A test to 
  * Read each test name while it gets typed.

***terminal***
```
npm t
```
* We simply run the tests using `npm t`. 
***Select the tests in the terminal***
* And you can see that the test pass with flying colors.

***Select the whole test file***
You can see that the fact that mobx is transparent reactive you get to write simple JavaScript tests for your state behaviour without having to go through complex apis and patterns.
