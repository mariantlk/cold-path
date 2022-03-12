import React from "react";
import ReactDOM from "react-dom";
import photo1 from './Pinakas 1.png';
import photo2 from './Pinakas 2.png';
import photo3 from './Pinakas 3.png';
import photo4 from './Pinakas 4.png';
import photo5 from './Pinakas 5.png';
import photo6 from './Pinakas 6.png';
import photo7 from './Pinakas 7.png';
import photo9 from './Pinakas 9.png';
import photo8 from './Pinakas 8.png';
import photo11 from './Pinakas 11.png';
import photo12 from './Pinakas 12.png';
import photo10 from './Pinakas 10.png';
import ScrollToTop from "react-scroll-to-top";
import HiddenPic from './HiddenPic.png'

class ThirdPage extends React.Component {

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
    if (this.state.value === "FRANCE1596")
      this.props.history.push('/emibfalaofneiwury56nx3m8n4rnweoqauh35hub7cmnue73');
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

        <br></br><br></br>

        {/* O titlos se auth thn pista einai mia peristrefomeni eikona, opou sto mprosta kai to pisw meros ths brisketai mia eikona. */}
        <div class="c0">
          <div class="card0">      
            <div class="front0"><img src={HiddenPic} alt = "" className="HiddenPic"/></div>
          <div class="back0">The key is the country in which the first encryption was made.</div>
          </div>
        </div>

        <div className="Data3">
          <p>You wake up in the United States of America in the middle of the American Civil War. You find yourself in a room full of paintings, so you start looking for clues.</p>
          <p>Find where and when the cipher was invented.</p>

          <br></br><br></br>

          <div class="container"> 
           {/* Omada klassewn pou anaparista mia eikona pou peristrefetai gurw apo ton eauto ths. */}
            <div class="c1">
              <div class="card1">      
              <div class="front1"><img src={photo1} className="photo1" alt=""/></div> 
              <div class="back1"> </div>
              </div>
              <br></br><br></br> 
            </div>

            <br></br>

            <div class="c2">
              <div class="card2">      
              <div class="front2"><img src={photo2} className="photo2" alt=""/></div> 
              <div class="back2"> </div>
              </div>
            </div>

            <br></br><br></br><br></br>

            <div class="c3">
              <div class="card3">      
              <div class="front3"><img src={photo3} className="photo3" alt=""/></div> 
              <div class="back3"> </div>
              </div>
            </div>

            <br></br>
      
            <div class="c4">
              <div class="card4">      
                <div class="front4"><img src={photo4} className="photo4" alt=""/></div> 
                <div class="back4"> </div>
              </div>
            </div>
      
            <div class="c5">
              <div className="Hidden">
                <button className="hiddenbutton"><a href="/notfoundpage">l</a> </button>
              </div>
              <div class="card5">      
                <div class="front5"><img src={photo5} className="photo5" alt=""/></div> 
                <div class="back5"> </div>
              </div>
            </div>

            <div class="c6">
              <div class="card6">      
                <div class="front6"><img src={photo6} className="photo6" alt=""/></div> 
                <div class="back6"> </div>
              </div>   
            </div>
        
            <div class="c7">
              <br></br><br></br>
              <div className="Hidden">
                <button className="hiddenbutton"><a class="h" href="/notfoundpage">l </a> </button>
              </div>
              <div class="card7">      
                <div class="front7"><img src={photo7} className="photo7" alt=""/></div> 
                <div class="back7"> </div>
              </div>
              <br></br>
            </div>

            <div class="c8">
              <br></br> <br></br> <br></br>
              <div class="card8">      
                <div class="front8"><img src={photo8} className="photo8" alt=""/></div> 
                <div class="back8"> </div>
              </div>
            </div>

            <div class="c9">
            <br></br> <br></br> 
              <div class="card9">      
                <div class="front9"><img src={photo9} className="photo9" alt=""/></div> 
                <div class="back9"> </div>
              </div>
            </div>
          
            <div class="c10">
              <br></br><br></br><br></br><br></br><br></br><br></br>
              <div class="card10">      
              <div class="front10"><img src={photo10} className="photo10" alt=""/></div> 
              <div class="back10"> </div>
              </div>
            </div> 

            <div class="c11">
              <br></br><br></br><br></br><br></br>  
              <div class="card11">      
              <div class="front11"><img src={photo11} className="photo11" alt=""/></div> 
              <div class="back11"> </div>
              </div>
            </div>
            
            <div class="c12">
              <div className="Hidden">
                <button className="hiddenbutton"><a class="h" href="/wmaoedjpaeijrmnapworjfjawiol12kjn3kljnkhvkuvj">hidden</a></button>
              </div>
              <div class="card12">      
              <div class="front12"><img src={photo12} className="photo12" alt=""/></div> 
              <div class="back12"> </div>
              </div>
            </div>
            
            <br></br><br></br><br></br><br></br><br></br>
      
          </div>  

          <br></br>
    
        </div>

        <div className="Form">
          <br></br>
          <br></br>
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
            {this.state.showMessage1 && <p1 className="text">Search for hidden buttons and messages. </p1>}
            <br></br><br></br>
            {this.state.showMessage2 && <p1 className="text">Search behind the title "cold path", above the 7th image counting from upper left.</p1>}
            <br></br><br></br>
            {this.state.showMessage3 && <p1 className="text">The answer is FRANCE1596. </p1>}
          </div>
        </div>

        <footer className="footer"> The Cold Path - Thesis 2020-2022</footer>

      </div>

    );
  }
}

ReactDOM.render(
  < ThirdPage />,
  document.getElementById('root')
);


export default ThirdPage;