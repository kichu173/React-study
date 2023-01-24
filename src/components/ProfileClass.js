// Class based components are normal JS class at the end of the day.
// Now you have to tell React that this is a class based component and not a normal JS class -> "extends React.Component"
// React.Component comes from react library. import React from "react". You can also do import Component from "React" and class XYZ extends Component.
// !Most important in class based component is render() method. This render() returns some JSX(will be injected in dom).
// we use extends because our class to inherit some properties to get super powers of React. React tracks our class compoenent and re-renders class based component whenever there is state/props change.
// we recieve props here with this keyword as ex: this.props.name
// ? HW -> in constructor of class takes props as parameters and you will do super(props). Why do we do super(props)? Without that React will throw an error.
// Constructor is a place that is used for initialization, whenever new instance of class is created/invoked/component is rendered constructor is called first, this is a best place to create state.
// Reconcialition process is same for both coponents(functional/class)
// React class has a lifecycle method - constructor() and then render() is called.

import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // create state variables. React uses one big object to maintain state variables in class based components and functional component as well(behind the scenes).
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
    console.log("constructor()" + this.props.name);
  }

  // lifecycle method -> this will be called after render()
  // best place to make an api call. After first render, componentDidMount will be called.
  // ? Here we can mak componentDidMount async, but you cannot make useEffect's first argument callback fn as async in fucntional components. Why?
  async componentDidMount() {
    console.log(`componentDidMount()` + this.props.name);
    const data = await fetch("https://api.github.com/users/kichu173");
    const res = await data.json();
    console.log(res);
    this.setState({
      userInfo: res,
    });
  }

  // This lifecyle method will be called after every next render. If there is no state or props changes, your component does not have updating(Lifecycle diagram) phase.
  componentDidUpdate(prevProps, prevState) {
    // This is similar to useEffect hook depenedency array having a state variable and to execute callback fn in useEffect hook to trigger whenver the dependency state changes.
    if (this.state.count !== prevState.count) {
      // Do Something...
    }
    // one more if/else logic to track another state variable changes.
    if (this.state.count2 !== prevState.count2) {
      // Do Something...(100+ lines of code goes here.)
    }
    console.log("Component Did Update");
  }

  // This lifecycle method will be called when component is about to destroy/unmount(Destroy happens when we leave this component and visit some other component/page).
  // Used for cleanup.
  componentWillUnmount() {
    // example: setIntreval(use it in componenntDidMount) and clearIntreval. (assigning `this` variable to setIntreval(ex: this.timer = setIntreval(...)), because `this` is associated to all functions/methods of this class.)
    // clearIntreval(this.timer);
    console.log("Component Will Unmount");
  }

  render() {
    // const {count} = this.state; // you can destructure like this, if needed.
    console.log("render()" + this.props.name);
    return (
      <div>
        <h1>Profile Class based Component</h1>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Loc: {this.state.userInfo.location}</h2>
        <img src={this.state.userInfo.avatar_url} alt="profile_pic" />
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              // WE DO NOT MUTATE STATE DIRECTLY
              // NEVER do as -> this.state.count = 1
              count: 1,
              count2: 2,
            });
          }}
        >
          setCount
        </button>
      </div>
    );
  }
}

export default Profile;

/**
 *
 * Parent - About.js | child(one) - ProfileCLass.js
 *
 * Parent constructor()
 * parent render()
 * constructor() First child
 * render() First child
 *
 * (DOM is updated) - commit phase
 * componentDidMount() First child(console.log)
 * Parent ComponentDidMount() - this is called here because we used async(to fetch data *delays*(async process), so in mean time it moves to parent componentDidMount) for componentDidMount in child componentDidMount(ProfileClass).
 *  - json is logged in console(from componentDidMount() First child)
 * render() First child(setState rerenders - updating phase in lifecycle diagram)
 * Component Did Update
 *
 *
 */
