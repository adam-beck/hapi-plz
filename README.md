# Getting Started

To get started with this very simple React development environment just run `npm install` and then you should be able to 
run `node dev-server.js` to get the server up and running. This environment is using Hapi with Webpack in order
to bring you HMR goodiness. 

Unfortunately, it isn't working 100% yet. You may need to insert the following code into `src/index.js`:

```js
if (module.hot) {
  module.hot.accept();
}
```


