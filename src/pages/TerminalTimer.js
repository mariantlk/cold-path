import React from "react";

const Timer = () => {
  // Ginontai arxikopoihseis ths metavliths "time" ish me 0 kai ths "timeron" ish me false.
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    // An h timh ths "timeron" ginei true, ksekinaei h metrish tou xronou.
    // An h timh ginei false, stamataei h metrish tou xronou.
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    
    <div className="Timers">
            <p className="name">The Cold Path</p>
            <br></br><br></br><br></br><br></br><br></br>

      {/* Emfanish ths oras me thn morfh xx:xx:xx. */}
      <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="gobutton">
        <p>Click the "start" button when you are ready!</p>
        {!timerOn && time === 0 && (
          <button className="timerbutton" onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button className="timerbutton"  onClick={() => setTimerOn(false)}>Pause</button>}
        {!timerOn && time > 0 && (
          <button className="timerbutton"  onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button  className="timerbutton" onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>

    </div>
 
 );
};

export default Timer;