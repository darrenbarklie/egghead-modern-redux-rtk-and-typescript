# Modern Redux with Redux Toolkit (RTK) and TypeScript

https://egghead.io/courses/modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8

- Started: **25 January 2022**
- Completed:

&nbsp;

[Redux Toolkit](https://redux-toolkit.js.org/) provides really nice guardrails and simplifies connection of components to a Redux store. It also includes utilities that improve TypeScript's ability to understand Redux.

This project demonstrates splitting a store into slices, creating reducers and selectors and managing async actions with thunks, by mimicing a shopping cart workflow.

## Installation

This app leverages [X](https://www.npmjs.com/) ...

```bash

# Install project files
npm install

```

&nbsp;

## Run

```bash

# Run project
npm run dev

```

Project will run on http://localhost:3000/

## Concepts

The Redux `<Provider />` wraps around the `<App />` and is passed a global `store` configured with a root reducer function. The store calls the root reducer onces and saves the return value as its initial `state`.

When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates to monitor state changes.

When an event occurs in the app, like a user clicking a button, the app dispatches an action to the Redux store, like `dispatch({type: 'counter/incremented'})`.

The store runs the reducer function again with the previous `state` and the current `action` and saves the return value as the new `state` object. The store notifies all subscribed UI components.

These elements check to see if the parts of state they bind to are changed. Each component that sees its data source has changed will re-render to reflect the new data.

A TypeScript `interface` is used to define the shape of an object, such as `CartState{}`.

We can split up our Redux store into multiple slices, a way of keeping data organised. A single slice file will usually export a reducer and any actions or selectors associated with that data.

We can create a Redux slice for each concern of our app (i.e. a cart and a product). The function `createSlice` accepts a `name`, `initialState`, `reducers` and `extraReducers`.

We can import these to our global `store`, to allow us to interact with and reason about a single global store.

A selector is simply a function that takes the Redux `state` and returns any value that it wants. `useAppSelector()` function allows us to pass in a selector, grab values from the Redux state, and rerender any components associated with that state.

## References

- https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-application-data-flow
