import React from "react";
import ReactDOM from "react-dom";

class FourthPage extends React.Component {

  state = {
    showMessage1: false
  }
  
  onButtonClickHandler1 = () => {
    this.setState({ showMessage1: true });
  };

  render() {
    return (
    
      <div className="Answer">
      
        <div className="title">The Cold Path</div>

        <article className="Data1">
          <p>In order to carry on with the cipher, you need to find the key from the page with the paintings.</p>
          <p>Somewhere in this page is a hidden puzzle. Solve it to get the required message.</p>
          <p>Take the first letter of the message and the first letter of the key and subtrack their values. The numeric value of each letter depends on their rank in the alphabet, starting with zero (A=0, B=1, C=2 etc). The result is sum modulo 26. </p>
          <p>Τhe color of the letters indicates the order in which they should be entered (from the lightest to the darkest).</p>
          <p>Use the key repeatedly.</p>
          <a href="https://puzzel.org/en/jigsaw/play?p=-Mt8_vgaToBPC3hW-1qJ"  target="_blank"  rel="noopener noreferrer" > &nbsp;</a> 
        </article>

        <div className="Hints">
            <button className="hintbut" onClick={this.onButtonClickHandler1}>HINT 1</button>
            <div className="showMessage">
            <br></br>
              {this.state.showMessage1 && <p1 className="text">Τhe letters in orange refer to the name of the encryption. </p1>}
            </div>
        </div>

        <footer className="footer"> The Cold Path - Thesis 2020-2022</footer>

      </div>

    );
  }
}

ReactDOM.render(
  < FourthPage />,
  document.getElementById('root')
);


export default FourthPage;