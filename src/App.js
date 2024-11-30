import Cookies from 'js-cookie';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const frame = useRef()
  
  useEffect(() => { 
    if(frame.current){
      Cookies.set('_ym_uid', '1732871902277884330', { expires: 7 });
      Cookies.set('_ym_d', '1732871902', { expires: 7 });
      Cookies.set('uid', 'am0bH1wdJ*JsQjhzIKw*LqZaefpffmCf', { expires: 7 });
      Cookies.set('_ym_isad', '1', { expires: 7 });

      frame.current.contentWindow.location.href = 'https://hqq.tv/player/embed_player.php?vid=oCKZSB24mqzk&autoplay=none'
      console.log('kek')
    }
  },[])

  return (
    <div className="App">
      <iframe 
            ref={frame}
        src="about:blank" 
           
>
    </iframe>
    </div>
  );
}

export default App;
