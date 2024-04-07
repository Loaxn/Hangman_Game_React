const Popup = ({ status, word, reset, locale, setLocale }) => {
    if (!status)
        return null;

    const buttonStyle = {
        padding: '10px',
        marginTop: '20px',
        fontSize: '1.2rem',
        borderRadius: '5px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const handleButtonClick = () => {
        reset();
        setLocale(locale === 'fr-FR' ? 'en-GB' : 'fr-FR');
    };

    const buttonText = locale === 'fr-FR' ? 'Jouer à nouveau' : 'Play again';
    const wordText = locale === 'fr-FR' ? 'le mot était : ' : 'The word was: ';

    return (
        <div className="popup">
            <p> {status}!</p>
            <p>{wordText} {word}</p>
            <button style={buttonStyle} onClick={handleButtonClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default Popup;
