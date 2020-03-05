import App from "./App";

App.start().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
