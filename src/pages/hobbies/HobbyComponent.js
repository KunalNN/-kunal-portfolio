import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./HobbyComponent.css";
import { hobbiesPage } from "../../portfolio";

class HobbyComponent extends Component {
  render() {
    const theme = this.props.theme;
    const { title, subtitle, hobbies } = hobbiesPage;

    return (
      <div className="hobby-main" style={{ backgroundColor: theme.body }}>
        <Header theme={theme} />
        <div className="hobby-content">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="hobby-page-title" style={{ color: theme.text }}>
              {title}
            </h1>
          </Fade>
          {subtitle && (
            <Fade bottom duration={2000} distance="20px">
              <p
                className="hobby-page-subtitle subTitle"
                style={{ color: theme.secondaryText }}
              >
                {subtitle}
              </p>
            </Fade>
          )}

          {(hobbies || []).map((hobby) => {
            const illustration = require(`../../assets/images/${hobby.image_path}`);
            return (
              <div key={hobby.title} className="hobby-section">
                <Fade left duration={2000}>
                  <div className="hobby-image-div">
                    <img
                      src={illustration}
                      alt={hobby.image_alt || hobby.title}
                    />
                  </div>
                </Fade>
                <Fade right duration={2000}>
                  <div className="hobby-text-div">
                    <h2 className="hobby-heading" style={{ color: theme.text }}>
                      {hobby.title}
                    </h2>
                    {hobby.descriptions.map((line, descriptionIndex) => (
                      <p
                        key={`${hobby.title}-${descriptionIndex}`}
                        className="hobby-subtitle subTitle"
                        style={{ color: theme.secondaryText }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default HobbyComponent;
