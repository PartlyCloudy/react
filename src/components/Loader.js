import React from "react";
import "../SeasonDisplay.css";
export default function Loader(props) {
  return (
    <div className="season-display ui segment">
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
}

Loader.defaultProps = {
  message: "Loading...",
};
