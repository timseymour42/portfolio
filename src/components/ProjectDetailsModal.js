import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class ProjectDetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleSlideChange = (event) => {
    // Update the activeIndex based on the slide event
    this.setState({ activeIndex: event.currentIndex });
  };

  resetActiveIndexAndClose = () => {
    // Reset activeIndex state to 0
    this.setState({ activeIndex: 0 });
    // Call the parent component's onHide function
    this.props.onHide();
  };

  render() {
    let activeDescription = null;
    if (this.props.data && this.props.data.descriptions) {
      activeDescription = this.props.data.descriptions[this.state.activeIndex];
    }
    let activeTitle = null;
    if (this.props.data && this.props.data.titles) {
      activeTitle = this.props.data.titles[this.state.activeIndex];
    }
    let activeUrl = null;
    if (this.props.data && this.props.data.titles) {
      activeUrl = this.props.data.urls[this.state.activeIndex];
    }
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
      // var titles = this.props.data.titles;
      // var descriptions = this.props.data.descriptions;
      // var url = this.props.data.url;
      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "100%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
        if (this.props.data.images) {
          var img = images.map((elem, i) => {
            return <div key={i} data-src={elem} />;
          });
        }
      }
    }
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        className="modal-inside"
        style={{ height: '100vh' }} 
      >
        <span onClick={this.resetActiveIndexAndClose} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
              onTransitionEnd={this.handleSlideChange}
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px", fontSize: '200%' }}>
              {activeTitle}
              {activeUrl ? (
                <a
                  href={activeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
              <span style={{ float: 'right' }}>
                {tech}
              </span>
            </h3>
            <p className="modal-description" style={{ height: 'auto' }} >{activeDescription}</p>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
