import React from "react";
import ReactDOM from "react-dom";

class SixthPage extends React.Component {

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
    if (this.state.value === "0011010000110000")
      this.props.history.push('/alfjwaozmlfhyoewqr47wfhw2ekhrf8');
    else
      alert('WRONG ANSWER.TRY AGAIN');
    event.preventDefault();
  }

  state = {
    showMessage1: false
  }

  state = {
    showMessage2: false
  }

  state = {
    showMessage3: false
  }
  
  onButtonClickHandler1 = () => {
    this.setState({ showMessage1: true });
  };

  onButtonClickHandler2 = () => {
    this.setState({ showMessage2: true });
  };

  onButtonClickHandler3 = () => {
    this.setState({ showMessage3: true });
  };

  render() {
    
    return (
     
    <div className="Answer">

      <div className="title">The Cold Path</div>
      
      <div className="Data2">
        <p>Last but not least.</p>
        <p>Add all the digits of the previous passwords and translate them into computer language, in order to finally escape.</p>
      </div>

      <div className="Form">
        <br></br>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input className="input" type="text" placeholder="" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button className="take-me-there" type="submit" value="Submit" >Take me there</button>
        </form>
      </div>

      <div className="Hints">
        <button className="hintbut" onClick={this.onButtonClickHandler1}>HINT 1</button>
        <button className="hintbut" onClick={this.onButtonClickHandler2}>ANSWER</button>
        <br></br><br></br>
        <div className="showMessage">
          {this.state.showMessage1 && <p1 className="text">The language of computers is binary code  and the cipher text is ASCII code. </p1>}
          <br></br><br></br>
          {this.state.showMessage2 && <p1 className="text">The answer is 0011010000110000.</p1>}
          <br></br>
        </div>
      </div>

      <footer className="footer"> The Cold Path - Thesis 2020-2022</footer>

    </div>

    );
  }
}

ReactDOM.render(
  < SixthPage />,
  document.getElementById('root')
);


export default SixthPage;