import React from "react";

class SimpleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      // remember to explore the contents of this array as it gets logged to console
      eObjArray: [],
      currentTarget: "a"
    };
  }

  handleClick = e => {
    // run the app with and without e.persist() to see the difference in the console!
    e.persist()

    if (this.state.eObjArray.includes(e)){
      // eObj already in array, do not add to eObjArray
      console.warn("eObj not added to arr")

      // what is below will equate to true because:
      // even though we are comparing two variables, they both point to the same object in memory


      // =======

      // what is below will equate to true because:
      // since it is same object in memory, the keys of object in the array have been updated with the new values, in order to be passed into this callback this.handleClick!
      //
      // console.log("in state:", this.state.eObjArray[0].dispatchConfig)
      // console.log("arg to handleClick:", e.dispatchConfig)
    } else {
      // console.log("comparison result (is obj in Arr same as current eObj?):", this.state.eObjArray[0] === e)
      console.warn("eObj yes added to arr")
      console.log("eObj before setState():", e)
      this.setState({
        eObjArray: [...this.state.eObjArray, e]
      }, () => console.log("eObj after setState(): ",e))

      //
      // console.log("state array : ", this.state.eObjArray)
      // console.log(" eObj : ", e)
    }


  };

  render() {
    // debugger
    return (
      <div>
        <p>Open the console to see the app at work!</p>
        <button onClick={this.handleClick}>
          Trigger onClick Event
        </button>
      </div>
    )
  }
}

export default SimpleComponent;
