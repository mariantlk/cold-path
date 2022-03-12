import React from "react";
import ReactDOM from "react-dom";
import Diskoi from './Diskoi.png';
import ScrollToTop from "react-scroll-to-top";

class FirstPage extends React.Component {

  constructor(props) {
    super(props);
    //Ginetai arxikopoihsh tou "value" kai twn handleChange kai handleSubmit.
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //An to h timh tou "value" einai ish me "MESOPOTAMIA", phgainei sthn selida me to path pou dinetai sthn seira 23. Alliws emfanizei mhnuma lathous.
  handleSubmit(event) {
    if (this.state.value === "MESOPOTAMIA")
      this.props.history.push('/lsadkmxdjklfna564cdscnls78sacnsdlclrome1centuryscvifesalsp1km4bcn');
    else
      alert('WRONG ANSWER. TRY AGAIN.');
    event.preventDefault();
  }

  //Arxika h katastash twn showMessage1, showMessage2, showMessage3 einai false.
  state = {
    showMessage1: false
  }

  state = {
    showMessage2: false
  }

  state = {
    showMessage3: false
  }

  //Me to pathma tou koumpiou oi times ginontai true.
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

        {/* To koumpi pou odigei sthn arxh ths selidas. */}
        <ScrollToTop smooth  color="#b61e1e"  />

        <div className="title">The Cold Path</div>

        <div className="Data1">  
          <p>You wake up and your friend informs you about what happened.</p>
          <p>He explained that he brought you there, because he was sure that minute by minute they would have come to kill you. It was the only way to save you.</p>
          <p>There are 5 "keys" that the time capsule requires to bring you back in the present. You will have to travel in space time and type each timeframe and/or place you currently are, in order to get closer and closer to the exit.</p>
          <p>He also informs you that you are in fourth century BC and suggests you to visit Noesis' archive and start looking for clues.</p>       
          <img src={Diskoi} className="Diskoi" alt="" />
        </div>

        {/* Edw ginetai upovolh ths telikhs apanthshs. To programma pairnei thn apanthsh pou dothhke sto input kai kanei elegxo orthothtas(seira 21-27).*/}
        <div className="Form">
          <br></br><br></br><br></br><br></br>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className="input" type="text" placeholder="Translate password in English" value={this.state.value} onChange={this.handleChange} />
            </label>
            <button className="take-me-there" type="submit" value="Submit" >Take me there</button>
          </form>
        </div>

        {/* Me to pathma twn koumpiwn, kaleitai to antistoixo onButtonClickHndler kai emfanizetai to antistoixo hint. */}
        <div className="Hints">
          <button className="hintbut" onClick={this.onButtonClickHandler1}>HINT 1</button>
          <button className="hintbut" onClick={this.onButtonClickHandler2}>HINT 2</button>
          <button className="hintbut" onClick={this.onButtonClickHandler3}>THE ANSWER</button>
          <br></br><br></br>
          <div className="showMessage">
            {this.state.showMessage1 && <p1 className="text">http://archive.noesis.edu.gr/repository/handle/11609/001-03181.html .</p1>}
            <br></br><br></br>
            {this.state.showMessage2 && <p1 className="text">The cryptographic method is Aineias' disk.</p1>}
            <br></br> <br></br>
            {this.state.showMessage3 && <p1 className="text">The answer is MESOPOTAMIA. </p1>}
          </div>
        </div>

        <footer className="footer"> The Cold Path - Thesis 2020-2022 </footer>

      </div >

    );
  }
}

ReactDOM.render(
  < FirstPage />,
  document.getElementById('root')
);


export default FirstPage;