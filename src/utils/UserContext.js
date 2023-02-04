// It is a shared place(central store) where you can write a piece of code which you want to be accessable all across your app in different places.
// createContext is basically a JS function at the end of day. It takes in some data that you need all across your application.
// This React context is not tied to a component. useState, props is tied to components.
// Context is like useState for your whole big application, the amazing part is you can use context wherever you wish to.
import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "dummy@gmail.com",
  },
});

// Display name for debugging in react dev tools in components section.
UserContext.displayName = "UserContext";

export default UserContext;
