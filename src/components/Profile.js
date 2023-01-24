import { useEffect } from "react";

const Profile = (props) => {
  // Disclaimer: Never compare React life cycle methods to React hooks.

  // * you can use two useEffects for two different state variables changes.
  // useEffect(() => {}, [count1]);
  // useEffect(() => {}, [count2]);

  // unmounting in functional component
  useEffect(() => {
    // const timer = setInterval(...)
    console.log("useEffect");
    return () => {
      // unmounting phase in functional component(return in useEffect).
      // cleanup activities.
      // clearInterval(timer)
      console.log(`useEffect return`);
    };
  }, []);

  console.log("render");

  return (
    <div>
      <h2>Profile Functional Component</h2>
      <h3>Name: {props.name}</h3>
    </div>
  );
};

export default Profile;

/**
 *
 * render
 * useEffect
 * useEffect return(will be printed after you leave the page/component)
 *
 */
