import React, { Component } from "react";

class Like extends Component {
  getLikeClass = () => {
    return this.props.liked ? "fa fa-heart" : "fa fa-heart-o";
  };

  render() {
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onLikeClick}
        className={this.getLikeClass()}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
