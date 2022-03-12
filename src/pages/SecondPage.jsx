import React from "react";
import ReactDOM from "react-dom";
import Papiros from './Papiros.png';
import ScrollToTop from "react-scroll-to-top";

class SecondPage extends React.Component {

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
    if (this.state.value === "ROME1CENTURY")
      this.props.history.push('/eoieaskf584ymlsd02kjdhfyu65alnvao01');
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
     
        <ScrollToTop smooth  color="#b61e1e"/>

        <div className="title">The Cold Path</div>  

        <div className="Data2">
          <p>Υou wake up and find the following objects next to you.</p>
          <p>Decrypt the message looking "back".</p>
          <img src={Papiros} className="Papiros" alt="" />
        </div>

        <div className="Form">
          <br></br><br></br>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className="input" type="text" placeholder="e.x. ASIA3CENTURY" value={this.state.value} onChange={this.handleChange} />
            </label>
            <button className="take-me-there" type="submit" value="Submit" >Take me there</button>
          </form>
        </div>

        <div className="Hints">
          <button className="hintbut" onClick={this.onButtonClickHandler1}>HINT 1</button>
          <button className="hintbut" onClick={this.onButtonClickHandler2}>HINT 2</button>
          <button className="hintbut" onClick={this.onButtonClickHandler3}>ANSWER</button>
          <br></br>
          <br></br>
          <div className="showMessage">
            {this.state.showMessage1 && <p1 className="text">Look for patterns in the coins. </p1>}
            <br></br><br></br>
            {this.state.showMessage2 && <p1 className="text">Change each letter by shifting 3 letters to the left in the alphabet.</p1>}
            <br></br><br></br>
            {this.state.showMessage3 && <p1 className="text">The answer is ROME1CENTURY. </p1>}
          </div>
        </div>

        <footer className="footer"> The Cold Path - Thesis 2020-2022</footer>

      </div>

    );
  }
}

ReactDOM.render(
  < SecondPage />,
  document.getElementById('root')
);

export default SecondPage;