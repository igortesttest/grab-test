import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const frame = useRef()
  
  useEffect(() => { 
    if(frame.current){
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
