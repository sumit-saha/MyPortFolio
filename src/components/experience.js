import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.jobName}</h4>
          {/* <p>{this.props.jobDescription}</p> */}
          <ul>
            <li>
              Developed custom web application using
              Reactjs,HTML,Javascript,CSS,Rest Api.{" "}
            </li>
            <li>Used nodejs to build RESTful APIs.</li>
            <li>
              Learned Ansible , Powershell , Shell scripting for orchestration.{" "}
            </li>
            <li>Basic of Vm provisiong using Ansible</li>
            <li>Worked in Robotic Automation using Selenium in python</li>
            <li>
              Utilized Python to handle debugging and Automation scripting tasks
            </li>
            <li>
              Developed Automation for self-healing of SNOW and JIRA incidents.
            </li>
          </ul>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
