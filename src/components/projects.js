import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* project 1 */}
          <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              PortFolio
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </CardText>
            <CardActions border>
              <form
                action="https://github.com/SumeetSaha/MyPortFolio"
                target="_blank"
              >
                <button type="submit">Github</button>
              </form>

              {/* <button colored="true" >Github</button> */}
              {/* <button colored="true">Github</button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2*/}

          <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
             ImageSearch
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </CardText>
            <CardActions border>
            <form
                action="https://github.com/SumeetSaha/ImageSearch"
                target="_blank"
              >
                <button type="submit">Github</button>
              </form>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* project 1 */}
          <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://wallpaperplay.com/walls/full/0/3/c/77641.jpg) center / cover"
              }}
            >
              Calculator
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </CardText>
            <CardActions border>
              <form
                action="https://github.com/SumeetSaha/"
                target="_blank"
              >
                <button type="submit">Github</button>
              </form>

              {/* <button colored="true" >Github</button> */}
              {/* <button colored="true">Github</button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2*/}

          <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://wallpaperplay.com/walls/full/0/3/c/77641.jpg) center / cover"
              }}
            >
             Turtle Game
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </CardText>
            <CardActions border>
            <form
                action="https://github.com/SumeetSaha/"
                target="_blank"
              >
                <button type="submit">Github</button>
              </form>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* project 1 */}
          <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQv-J-IHTk_wQXDLYKHQt25aWucMZ92r6UgjiT1KqoMt44Re6cS) center / cover"
              }}
            >
              MovieFight
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </CardText>
            <CardActions border>
              <form
                action="https://github.com/SumeetSaha/MovieFight"
                target="_blank"
              >
                <button type="submit">Github</button>
              </form>

              {/* <button colored="true" >Github</button> */}
              {/* <button colored="true">Github</button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2*/}

          <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQv-J-IHTk_wQXDLYKHQt25aWucMZ92r6UgjiT1KqoMt44Re6cS) center / cover"
              }}
            >
             YelpCamp
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </CardText>
            <CardActions border>
            <form
                action="https://github.com/SumeetSaha/YelpCamp"
                target="_blank"
              >
                <button type="submit">Github</button>
              </form>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
      // } else if (this.state.activeTab === 3) {
      //   return (
      //     <div>
      //       <h1>This is Javascript</h1>
      //     </div>
      //   );
      //
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Python</Tab>
          <Tab>Javascript</Tab>
          {/* <Tab>MongoDB</Tab> */}
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
