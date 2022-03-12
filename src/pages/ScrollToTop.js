import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

//Sunartish pou odhgei ton paikth sto simeio (0,0), dhladh thn arxh ths selidas.
function ScrollToTop({ history }) {
  useEffect(() => {
    //Odhgei sthn arxh ths selidas.
    const unlisten = history.listen(() => {
      window.scrollTo(0,0);
    });
    //Stamataei ton listener otan to component ginei unmount.
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default ScrollToTop;