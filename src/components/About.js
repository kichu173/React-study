import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor()");
  }

  componentDidMount() {
    console.log("Parent componentDidMount()");
  }

  render() {
    console.log("Parent render()");
    return (
      <div>
        <h1>About Us page</h1>
        <p> This is the New Learning of React Router🚀</p>
        <Outlet />
        <ProfileFunctional name={"Kichu"} />
        <ProfileClass name={" First Child"} />
        {/* <ProfileClass name={" Second Child"} /> */}
      </div>
    );
  }
}

export default About;

/**
 *
 *
 * Parent constructor()
 * Parent render()
 * constructor()
 * render()
 * componentDidMount()
 * Parent componentDidMount()
 *
 *
 */

/**
 *
 * if there are two child components
 *
 * Parent constructor()
 * Parent render()
 * constructor() First child
 * render() First child
 * constructor() second child
 * render() second child
 *  - updates DOM(commit phase)
 * componentDidMount() First child
 * componentDidMount() second child
 * parent componentDidMount()
 *
 */

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ -> React lifecycle diagram(render phase and commit phase).
