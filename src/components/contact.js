import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import img from "../images/img.jpeg";
class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6} className="contact-left">
            <h2>Sumit Saha</h2>
            <img
              //className="img"
              src={img}
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Efficient recent college graduate with 1+ years of work
              experience, aiming to leverage academic experience and a proven
              knowledge of e-learning, troubleshooting, and web platform
              development to successfully fill the desired role at your company.
              Frequently praised as quality-oriented by my peers, I can be
              relied upon to help your company achieve its goals.
            </p>
          </Cell>
          <Cell col={6} className="contact-right">
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i
                      className="fa fa-phone-square fa-fw"
                      aria-hidden="true"
                    />
                    892 045 0279
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    sumeetsaha014@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
