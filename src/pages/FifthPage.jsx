import React from "react";
import ReactDOM from "react-dom";
import Efimerida from './Efimerida.png';
import ScrollToTop from "react-scroll-to-top";

class FifthPage extends React.Component {

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
    if (this.state.value === "ENGLAND1854")
      this.props.history.push('/amfiymednrxwi34756ncxi456mcxwie9molafo8csducb64');
    else
      alert('WRONG ANSWER.TRY AGAIN');
    event.preventDefault();
  }

  state = {
    showMessage1: false
  }

  state = {
    showMessage: false
  }

  state = {
    showTimer: false
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

  onButtonClickHandlerTimer = () => {
    this.setState({ showTimer: true });
  };

  render() {
    return (

      <div className="Answer">

        <ScrollToTop smooth  color="#b61e1e"  />

        <div className="title">The Cold Path</div>

        <div className="Data1">
          <p>You wake up and realize that you are in the middle of the World War II. You buy a newspaper and start searching for clues.</p>
          <p >The answer is where and when exactly the cipher invented.</p>
        </div>

        <div className="Form">
        <img src={Efimerida} className="Efimerida" alt="" />
          <br></br><br></br><br></br>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className="input" type="text" placeholder="e.x. ASIA1999" value={this.state.value} onChange={this.handleChange} />
            </label>
            <button className="take-me-there" type="submit" value="Submit" >Take me there</button>
          </form>
        </div>

        <div className="Hints">
          <button className="hintbut" onClick={this.onButtonClickHandler1}>HINT 1</button>
          <button className="hintbut" onClick={this.onButtonClickHandler2}>HINT 2</button>
          <button className="hintbut" onClick={this.onButtonClickHandler3}>ANSWER</button>
          <br></br><br></br>  
          <div className="showMessage">
            {this.state.showMessage1 && <p1 className="text">Look for a QR code and rules.</p1>}
            <br></br><br></br>
            {this.state.showMessage2 && <p1 className="text">The rules are under "HOT WEATHER" and "FARMER CHARLES PLOWS" frame.</p1>}
            <br></br><br></br>
            {this.state.showMessage3 && <p1 className="text">The answer is ENGLAND1854. </p1>}
          </div>
        </div>

        <footer className="footer"> The Cold Path - Thesis 2020-2022</footer>

      </div>

    );
  }
}

ReactDOM.render(
  < FifthPage />,
  document.getElementById('root')
);

export default FifthPage;