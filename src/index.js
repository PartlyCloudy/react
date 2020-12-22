import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: "", weather: [] };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplay latitude={this.state.lat} longitude={this.state.long} />
      );
    }
    return <Loader message="Please accept location request" />;
  }

  render() {
    return <SeasonDisplay />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
