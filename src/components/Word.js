import "./Word.css";

const WordComponent = (props) =>{
    const {word, setSavedWordArray} = props;

    function saveButtonHandler(e){
        setSavedWordArray((currentWordArray) =>{
            return [...currentWordArray, word];
        })
    }
    
    return (
        <li>
            {word}
            <button onClick={saveButtonHandler} className={'green_button'}>
            Save
            </button>
        </li>
    )
}

export default WordComponent;