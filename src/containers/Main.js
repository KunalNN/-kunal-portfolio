import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import HobbyComponent from "../pages/hobbies/HobbyComponent";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    const publicUrl = process.env.PUBLIC_URL;
    let basename = "/";
    if (publicUrl && publicUrl !== ".") {
      try {
        basename = new URL(publicUrl, window.location.origin).pathname;
      } catch (error) {
        // Fallback: attempt to derive pathname manually if URL constructor fails
        const anchor = document.createElement("a");
        anchor.href = publicUrl;
        basename = anchor.pathname;
      }
      if (!basename) {
        basename = "/";
      }
    }

    return (
      <BrowserRouter basename={basename}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="/hobbies"
            render={(props) => (
              <HobbyComponent {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
