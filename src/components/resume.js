import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import { Link } from "react-router-dom";
import ResumeCopy from "../images/ResumeCopy.pdf";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/data/256x256/2016/05/24/770137_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}> Sumit Saha</h2>
            <h4 style={{ color: "grey" }}> Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Efficient recent college graduate with 1+ years of work
              experience, aiming to leverage academic experience and a proven
              knowledge of e-learning, troubleshooting, and web platform
              development to successfully fill the desired role at your company.
              Frequently praised as quality-oriented by my peers, I can be
              relied upon to help your company achieve its goals.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Electronic city , bangalore ,560100</p>
            <h5>Phone</h5>
            <p> 892 045 0279 </p>
            <h5>Email</h5>
            <p>Sumeetsaha014@gmail.com</p>
            <h5>Web</h5>
            <p>MyWebsite.com</p>
            <Link to={ResumeCopy} target="_blank" download>
              Download Resume
            </Link>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2014}
              schoolName="DAV Public School"
              // schoolDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />

            <Education
              startYear={2014}
              endYear={2018}
              schoolName="National Institute of Science and Technology"
              // schoolDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Infosys"
              // jobDescription="Developed custom web application using Reactjs , HTML
              // , Javascript , CSS , Rest Api . Used nodejs to build RESTful APIs. Learned Ansible , Powershell , Shell scripting for
              // orchestration. Basic of Vm provisiong using Ansible. Worked in Robotic Automation using Selenium in python
              // Utilized Python to handle debugging and Automation
              // scripting tasks. Developed Automation for self-healing of SNOW and
              // JIRA incidents"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="React" progress={70} />
            <Skills skill="javascript" progress={80} />
            <Skills skill="Python" progress={90} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
