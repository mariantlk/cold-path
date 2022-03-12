import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import MainPage from './pages/MainPage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
import SixthPage from './pages/SixthPage';
import Congratulations from './pages/Congratulations';
import Rules from './pages/Rules';
import TerminalTimer from './pages/TerminalTimer';
import NotFoundPage from './pages/NotFoundPage';



class App1 extends Component{

  render(){

    return(
       
      <Router>
      <Switch>
        
      {/*To path kathe selidas pou emfanizetai sto URL */}
      <Route exact path = "/" component={MainPage} />
      <Route exact path = "/amocfjnel89sadcvdfhaldfjeoias7836mcndsifu=naldnif99LsufhlzcndjfoAFNDlkfw" component={FirstPage} />
      <Route exact path = "/lsadkmxdjklfna564cdscnls78sacnsdlclrome1centuryscvifesalsp1km4bcn" component={SecondPage} />
      <Route exact path = "/eoieaskf584ymlsd02kjdhfyu65alnvao01" component={ThirdPage} />
      <Route exact path = "/wmaoedjpaeijrmnapworjfjawiol12kjn3kljnkhvkuvj"component={FourthPage}/>
      <Route exact path = "/emibfalaofneiwury56nx3m8n4rnweoqauh35hub7cmnue73"component={FifthPage}/>
      <Route exact path = "/amfiymednrxwi34756ncxi456mcxwie9molafo8csducb64"component={SixthPage}/>
      <Route exact path = "/alfjwaozmlfhyoewqr47wfhw2ekhrf8" component={Congratulations} />
      <Route exact path = "/notfoundpage" component={NotFoundPage} />
      <Route exact path = "/rules" component={Rules} />
      <Route exact path = "/filereader" component={FileReader} />
      <Route exact path = "/terminaltimer" component={TerminalTimer} />

      {/*Se periptosi pou den odigite se kanena apo ta parapano, tha pigainei sti selida NotFoundPage  */}
      <Redirect to = "/NotFoundPage"/>
      </Switch>
      </Router>

    )
  }
}
export default App1;