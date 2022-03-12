import { React } from "react";
import { Link } from "react-router-dom";
import Front from './Front.png';

const MainPage = (props) => {

  return (

    <div className="App">

      <header className="App-header">
        <p className="name">The Cold Path</p>
        <a href="rules" className="href1" target="blank1" rel="noopener noreferrer"> Rules &nbsp;</a><a className="href2"target="blank" href="TerminalTimer" rel="noopener noreferrer"> Timer &nbsp;</a>
        <img src={Front}  className="Front" alt="Front" />
        <div><p className="line1">Find the path, <br></br>before they erupt.</p></div>
      </header>

      <article className="App-article" >
        <p>We are in the Cold War era in West Berlin, where everything is done secretly and everything is monitored. </p>
        <p>You and your friend are amateur cryptographers. But unfortunately you received an encrypted message via radio frequency from which you get informed that West Berlin will be blown up within an hour. </p>
        <p>However, before you can convey the message to those in charge, a friend of yours, in order to save you, puts you in a time capsule. After a few seconds, you get transported to another space time to hide.</p>
        <p>Υou have to find the passwords of the time capsule, using the cryptographic tools and methods of each time period and travel to the space time of each event, when it unfolds.</p>
        <p>Can you make it in time?</p>
        <div className="gobutton">   
          <Link to="/amocfjnel89sadcvdfhaldfjeoias7836mcndsifu=naldnif99LsufhlzcndjfoAFNDlkfw">
            <button className="gobutton" target="_self">Let's go!</button>
          </Link>     
        </div>
      </article>

      <footer className="footer"> The Cold Path - Thesis 2020-2022</footer>

    </div>
  )
};

export default MainPage;