import { useState } from 'react';

const Input = (props) =>{
    const {setWordOutput, setInputWord, setIsRhyme} = props;
    const [word, setWord] = useState('');
    
    function datamuseRequest(url) {
            fetch(url)
              .then((response) => response.json())
                .then((json) => {
                    setWordOutput(Object.values(json)); 
                    setInputWord(word);
                    console.log(word);
                });
    }

    function getDatamuseRhymeUrl() {
        return `https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': word})).toString()}`;  
    }

    function getDatamuseSimilarToUrl() {
        return `https://api.datamuse.com/words?${(new URLSearchParams({'ml': word})).toString()}`;
    }

    return (
        <div className="row">
            <div className="input-group col">
                <input className="form-control" type="text" placeholder="Enter a word" id="word_input" onChange={(event) => setWord(event.target.value) } 
                onKeyPress={(event) => {
                    if (event.key === 'Enter'){
                        datamuseRequest(getDatamuseRhymeUrl());
                        setIsRhyme(true);
                    }
                }}/>
                <button id="show_rhymes" type="button" className="btn btn-primary" onClick={(e)=>{
                    datamuseRequest(getDatamuseRhymeUrl());
                    setIsRhyme(true);
                }}>Show rhyming words</button>
                <button id="show_synonyms" type="button" className="btn btn-secondary" onClick={(e) => {
                    datamuseRequest(getDatamuseSimilarToUrl());
                    setIsRhyme(false);
                }
                }>Show synonyms</button>
            </div>
        </div>
    );
}

export default Input;