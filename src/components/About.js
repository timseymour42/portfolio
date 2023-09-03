import React, { Component } from "react";
import { Icon } from "@iconify/react";
import pythonIcon from "@iconify/icons-logos/python";
import reactIcon from "@iconify/icons-logos/react";
import javaIcon from "@iconify/icons-logos/java";
import mysqlIcon from "@iconify/icons-logos/mysql";
import javascriptIcon from "@iconify/icons-logos/javascript";
// import typescriptIcon from "@iconify/icons-logos/skill-icons:typescript";


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black", fontSize: "300%" }}>
            <span>{sectionName}</span> About Me
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Skills"
                  />
                  <div className="icon-grid">
                  <Icon
                    icon={pythonIcon}
                    style={{ fontSize: "600%", margin: "4% 2% 0 2%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "600%", margin: "4% 2% 0 2%" }}
                  />
                  <Icon
                    icon={javaIcon}
                    style={{ fontSize: "600%", margin: "4% 2% 0 2%" }}
                  />
                  <Icon
                    icon={mysqlIcon}
                    style={{ fontSize: "600%", margin: "4% 2% 0 2%" }}
                  />
                  <Icon
                    icon={javascriptIcon}
                    style={{ fontSize: "600%", margin: "4% 2% 0 2%" }}
                  />
                   {/* <Icon
                    icon={typescriptIcon}
                    style={{ fontSize: "600%", margin: "4% 2% 0 2%" }}
                  /> */}
                  </div>
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "180%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} Hey there </span>
                    <br />
                    <br />
                    {about} 👋 I'm Tim. I am a data scienstist and a sports analytics nerd. The Yankees <img src={`${process.env.PUBLIC_URL}/images/team-logos/yankees.png`} 
                                                                                                            alt="Yankees logo" 
                                                                                                            style={{ width: '20px', height: '20px' }} />
                                                                                                            , Patriots <img src={`${process.env.PUBLIC_URL}/images/team-logos/patriots.png`} 
                                                                                                            alt="Patriots logo" 
                                                                                                            style={{ width: '30px', height: '30px' }} />, 
                                                                                                            and UConn basketball <img src={`${process.env.PUBLIC_URL}/images/team-logos/uconn.png`} 
                                                                                                            alt="UConn logo" 
                                                                                                            style={{ width: '21px', height: '25px' }} /> are my favorite teams. 
                                                                                                            I got my start in data science because I love doing sports analytics projects to investigate trends in sports and uncover strategic advantages for coaching or the front office.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
