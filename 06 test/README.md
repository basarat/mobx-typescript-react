# Testing MobX Applications

> MobX is independent of React and really you can use whatever testing framework you want with it. Testing MobX is essentially as easy as testing simple JavaScript. 

> This lesson demonstrates an example of testing mobx application state with Jest.

***npm start***
***app.tsx***
***Add a foo and a bar and reset***
Here we have a simple list application from a previous lesson. It allows us to add items and reset the items if required.

***appState.ts***
The behaviour of this application is described by the application state class. 

***Select the appState singleton***
So in order to test the application behaviour we can go a long way by simply testing that the `appState` behaves as expected. 
> Since all we need to do is test simple JavaScript we can use any testing framework like mocha, jasmine or jest with mobx. Lets go with `jest` is that is the most common one used by React developers.

***show package.json***
> We already have jest setup using the standard TypeScript jest process.
* We have script target to run jest.
* Installation was a simple npm install of `@types/jest`, `jest` itself and `ts-jest`. 
***show jest.config.js***
* We've configured jest with a simple copy paste of the `jest.config.js` from my TypeScript React course.


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

```
npm t -- --coverage 
```
* A neat feature of jest is built in coverage support. 
* You can see that our tests cover 100% of the application state behaviour.

