import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="loader-logo" style={{ color: theme.body }}>
        <span className="loader-logo__initials">Kunal</span>
        <span className="loader-logo__accent">Narwani</span>
      </div>
    );
  }
}

export default LogoLoader;
