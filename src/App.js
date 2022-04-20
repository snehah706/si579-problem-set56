import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import SavedWords from './components/SavedWords';
import Input from './components/Input';
import Output from './components/Output';

function App() {

  const [inputWord, setInputWord] = useState('');
  const [wordOutput, setWordOutput] = useState([]);
  const [savedWordArray, setSavedWordArray] = useState([]); 
  const [isRhyme, setIsRhyme] = useState(true);

  return (
    <main className="container">
        <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
        {/* TODO: update github link after adding on github */}
        <h2><a href = "www.google.com">Link to Github repo</a> </h2>
        <SavedWords savedWordArray={savedWordArray}/>
        <Input setWordOutput={setWordOutput} setInputWord={setInputWord} setIsRhyme={setIsRhyme}/>
        <Output wordOutput={wordOutput} setSavedWordArray={setSavedWordArray} inputWord={inputWord} isRhyme={isRhyme}/>
    </main>
  );
}

export default App;
