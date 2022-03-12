import React from "react";

class Rules extends React.Component {

    render() {
        return (
            <div className="general">
                <div className="title">The Cold Path</div>  
                <article className="Rules">Rules</article>
                <div className="RulesList">
                    <ol><li>Game time is 1 hour and 30 minutes.</li>
                        <br></br>
                        <li>Write down the answers (cipher's name, place and time) you find. It might be useful to you...</li>
                        <br></br>
                        <li>Τhe game can also be played by 2 players. If so, both of you have to fill the questionnaire.</li>
                        <br></br>
                        <li>You can use the timer of the game (You can find it on the home page). </li>
                        <br></br>
                        <li>You will need to consult the internet to solve the puzzles.</li>
                        <br></br>
                        <li>You have to submit all your asnwers in capital letters without spaces.</li>
                        <br></br>
                        <li>Before starting the game, please complete the "PreTest" form. 
                        <br></br>
                        <br></br>
                        </li>    
                    </ol>
                </div>
                <div className="Formlinks">
                        <a href="http://form-timer.com/start/d4d1b61b "  target="_blank"  rel="noopener noreferrer" >Pre Test  &nbsp;</a> 
                </div>

               
            </div>
        )
    }

}

export default Rules;