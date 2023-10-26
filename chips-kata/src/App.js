import './App.css';
import ChipsList from './ChipsList';


function App() {

  const sampleChips = [
    { label: "123456" },
    { label: "1234567" },
    { label: "12345678" },
    { label: "12345678" },
    { label: "12345" },
    { label: "123456789" }
  ];


  return (
    <div className="App">
      <ChipsList chips={sampleChips} maxChips={4} maxTextLength={6}/>
    </div>
  );
}

export default App;
