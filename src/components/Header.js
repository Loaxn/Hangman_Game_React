export const Header = ({ locale, setLocale }) => {
    
    const toggleLanguage = () => {
        setLocale(locale === 'fr-FR' ? 'en-GB' : 'fr-FR');
    };

    const buttonText = locale === 'fr-FR' ? 'Fr' : 'Eng';
    
    const buttonStyle = {
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        cursor: 'pointer',
        backgroundColor: '#f0f0f0',
        transition: 'background-color 0.3s ease',
    };

    return (
        <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'50px',  }}>
            <h1 style={{ fontFamily:'Russo One', fontSize: '2rem', color:'brown' }}>
                {locale === 'fr-FR' ? 'Jeu du Pendu' : 'Hangman Game'}
            </h1>
            <button
                onClick={toggleLanguage}
                style={buttonStyle}
            >
                {buttonText}
            </button>
        </header>
    );
};

export default Header;
