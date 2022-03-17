import React from "react";
import ReactDOM from "react-dom";

class Congratulations extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value === "444")
      this.props.history.push('/fifth');
    else
      alert('Error');
    event.preventDefault();
  }

  state = {
    showMessage1: false
  }

  state = {
    showMessage: false
  }

  onButtonClickHandler1 = () => {
    this.setState({ showMessage1: true });
  };

  onButtonClickHandler = () => {
    this.setState({ showMessage: true });
  };

  render() {
    return (
      <div className="Answer">

        <div className="Data5">
          <p>CONGRATULATIONS!!</p> 
          <p>You managed to come back and save Berlin! </p>
          <p>Please complete the forms below.</p>
          <div className="Formlinks">
            <a href="http://form-timer.com/start/a448376b" target="_blank" rel="noopener noreferrer">Post Test  &nbsp;</a>
            <a href="https://docs.google.com/forms/d/1HB83g84MuQ9iYFQHd091a8UCShFxoRGRI43enNx5I-s/edit" target="_blank" rel="noopener noreferrer"> Game-Analysis  &nbsp;</a>
            </div>
        </div> 
      </div>
      
    );
  }
}

ReactDOM.render(
  < Congratulations />,
  document.getElementById('root')
);

export default Congratulations;