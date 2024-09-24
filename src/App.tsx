import { useState } from 'react';
import './App.css'
import Html5QrcodePlugin from './Html5QrcodePlugin'

function App() {
  const [result, setResult] = useState();

  const onNewScanResult = (decodedText: any, decodedResult: any) => {
    // handle decoded results here
    console.log(decodedText, decodedResult);
    setResult(decodedText);
  };

  return (
    <div className="App">
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <p>
        {result}
      </p>
    </div>
  )
}

export default App;
