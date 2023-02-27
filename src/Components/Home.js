import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>React Redux</h1>
        <h4>Employee data:</h4>
        <div>
          {this.props.empData.map((emp) => {
            console.log("EMP:", emp);
            return (
              <React.Fragment key={emp.id}>
                <p>
                  Name: {emp.name}
                  <br />
                  Designation: {emp.designation}
                </p>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(Home);
