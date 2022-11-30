import { useState } from 'react'

function ChanBtn() {
    const [state, setState] = useState(false);

    function ChanBtn(){
      setState(state => !state);
    }
  
    let toggleClass = state ? '-success': '-danger';
  
    return( <button 
    id="ChanBtn" 
    onClick={ChanBtn} 
    className={`btn btn-lg btn${toggleClass}`} 
    ></button>
    )
}

export default ChanBtn;