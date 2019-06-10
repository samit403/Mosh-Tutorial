import React, { Component } from "react";

class Like extends Component {
  getLikeClass = () => {
    return this.props.liked ? "fa fa-heart" : "fa fa-heart-o";
  };

  render() {
    return (
      <i
        onClick={this.props.onClick}
        className={this.getLikeClass()}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
