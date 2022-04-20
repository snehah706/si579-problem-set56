const SavedWords = (props) =>{
    const {savedWordArray} = props;

    const showSavedWords = ()=>{
        return savedWordArray.join(', ');
    }

    return (
        <div className="row">
            <div className="col">Saved words: <span id="saved_words">{showSavedWords()}</span></div>
        </div>
    );
}

export default SavedWords;