import groupBy from '../utils';
import WordComponent from './Word';

const Output = (props) => {
    const {wordOutput, inputWord, isRhyme, setSavedWordArray} = props;

    function getDescription(word_input, isRhyme){
        if (isRhyme) {
            return `Words that rhyme with ${word_input}:`;
        }
        else {
            return `Words with a similar meaning to ${inputWord}`;
        }
    }

    // Get list of word elements
    function getWordsArray(list){
        const words = [];
        for (let elem in list){
            words.push(<WordComponent word={list[elem].word + " "} setSavedWordArray={setSavedWordArray}/>)
        }
        return words;
    }

    function showRhymingWords(wordOutput) {
        if (wordOutput.length === 0){   
            return '(no results)';
        }
        else{
            const toDisplay = [];
            const data = groupBy(wordOutput, 'numSyllables');
            for (let syllable in data){
                toDisplay.push(<h3>Syllables: {syllable}</h3>);
                toDisplay.push(<ul>{getWordsArray(data[syllable])}</ul>);
            }
            return toDisplay;
        }
    }
    
    function showSynonyms(wordOutput) {
        if (wordOutput.length === 0){   
            return '(no results)';
        }
        else{
            const toDisplay = [];
            toDisplay.push(<ul>{getWordsArray(wordOutput)}</ul>)
            return toDisplay;
    
        }
    }

    return (
    <>
        <div className="row">
            <h2 className="col" id="output_description">{getDescription(inputWord, isRhyme)}</h2>
        </div>
        <div className="output row">
            <output id = "word_output" className="col">{isRhyme ? showRhymingWords(wordOutput) : showSynonyms(wordOutput)}</output>
        </div>
    </>
    );
}

export default Output;