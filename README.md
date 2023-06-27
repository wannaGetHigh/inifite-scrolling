## React-Query to handle API
This project is using React-Query to handle RESTFul API and caching response in top app context.

You can learn more in the [React-Query](https://tanstack.com/query/v3/).

## Overview
In this project, we have flowing approach:
1. Render first 20 products using useInfiniteQuery.
2. Using IntersectionObserver to define whether user has scroll down to last product then fetch the next 20 products.
I made `useIntersectionObserver()` hook for convenient
3. Show `<footer />` when user reach the last product in total products available to let user know that they have reach the limit products

Here's an example of how you'd test a custom hook with `useIntersectionObserver()`:
```javascript
    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {
        threshold: 0,
        root: null,
        rootMargin: '50%',
        freezeOnceVisible: false,
    });
    const isVisible = !!entry?.isIntersecting;
```

For the search product, I use `useDebounce()` to limit the request send to server when user is typing continuously and call the one API with the last input

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
