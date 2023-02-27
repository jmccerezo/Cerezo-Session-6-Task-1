import React, { Component } from "react";
import { connect } from "react-redux";
import { updateClassBased } from "../redux/action";

class ClassBased extends Component {
  handleUpdate = () => {
    let empData = [
      {
        id: 1,
        name: "Jeremy Davis",
        designation: "Junior Developer",
      },
      {
        id: 2,
        name: "Isabella Garcia",
        designation: "Software Architect",
      },
      {
        id: 3,
        name: "Anthony Miller",
        designation: "CTO",
      },
    ];
    this.props.onUpdate(empData);
  };

  render() {
    console.log("EMPDATA:", this.props.empData);
    return (
      <div style={{ padding: "20px" }}>
        <h5>Class Based</h5>
        <p>Update all data</p>
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (val) => dispatch(updateClassBased(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassBased);
