import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import projectVideo from "../../assets/videos/3D-box-software-en.mp4";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.setVideoPlaybackRate = this.setVideoPlaybackRate.bind(this);
  }

  componentDidMount() {
    this.setVideoPlaybackRate();
  }

  componentDidUpdate() {
    this.setVideoPlaybackRate();
  }

  setVideoPlaybackRate() {
    if (this.videoRef && this.videoRef.current) {
      this.videoRef.current.playbackRate = 2;
    }
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom duration={2000} distance="40px">
          <div className="featured-project-container">
            <div className="project-video-wrapper">
              <video
                className="project-video"
                controls
                muted
                defaultPlaybackRate={2}
                ref={this.videoRef}
                onLoadedMetadata={this.setVideoPlaybackRate}
              >
                <source src={projectVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="project-info">
              <h2 className="project-title" style={{ color: theme.text }}>
                XLRIT Optimization Platform
              </h2>
              <p
                className="project-description subTitle"
                style={{ color: theme.secondaryText }}
              >
                Logistics-focused web application that optimizes packing layouts
                by combining heuristic approaches with solver-based strategies.
                The interface supports rich configuration, simulation playback,
                and 3D visualization so operations teams can evaluate the best
                way to utilize every container.
              </p>
              <div className="project-purpose">
                <h3
                  className="project-purpose-heading"
                  style={{ color: theme.text }}
                >
                  Project Purpose
                </h3>
                <p
                  className="project-purpose-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Reduce wasted space and planning time by letting users explore
                  multiple packing strategies, compare solver outcomes, and
                  export efficient loading plans that translate directly to
                  warehouse floors.
                </p>
                <ul
                  className="project-highlights"
                  style={{ color: theme.secondaryText }}
                >
                  <li>
                    Interactive scenario builder for dimensional inputs and
                    constraints
                  </li>
                  <li>
                    Real-time solver feedback with clear capacity utilization
                    metrics
                  </li>
                  <li>
                    3D visualizations and animations that communicate packing
                    sequences
                  </li>
                </ul>
              </div>
              <div className="project-cta">
                <Button
                  text={"View on GitHub"}
                  className="project-button"
                  href="https://github.com/GiPHouse/XLRIT-optimization-2025"
                  newTab={true}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
