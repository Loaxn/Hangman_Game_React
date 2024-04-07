import React, { useEffect, useState } from 'react';
import { Hangman_man } from './Hangman_man';
import Header from './Header';
import Popup from './Popup';

export default function Main_game() {
    const API = "https://node-hangman-api-production.up.railway.app/";
    const [word, setWord] = useState("");
    const [locale, setLocale] = useState("fr-FR");

    useEffect(() => {
        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `locale=${locale}`,
        })
        .then((res) => res.json())
        .then((data) => {
            setWord(data.word.toUpperCase());
        });
    }, [locale]);

    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","-"];
    const [corrects, setCorrects] = useState([]);
    const [fails, setFails] = useState([]);
    const [status, setStatus] = useState('');

    const maskWord = word
        .split('')
        .map(letter => corrects.includes(letter) ? letter : "_")
        .join(" ");

    const onGuess = letter => {
        if (fails.length > 9 || status)
            return

        if (word.includes(letter)) {
            setCorrects([...corrects, letter])
        }
        else {
            setFails([...fails, letter])
        }
    }

    const reset = () => {
        window.location.reload();
    }

    useEffect(() => {
        if (corrects.length && word.split("").every(letter => corrects.includes(letter)))
        setStatus(locale === 'fr-FR' ? 'Tu as gagné' : 'You won');
    }, [corrects])

    useEffect(() => {
        if (fails.length === 10)
        setStatus(locale === 'fr-FR' ? 'Tu as perdu' : 'You lost');
    }, [fails])

    return (
        <div>
            <Header locale={locale} setLocale={setLocale} />
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <Hangman_man fails={fails.length} />
                    <Popup status={status} word={word} reset={reset} locale={locale} setLocale={setLocale} />
                </div>
                <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: '1.5rem', color: '#9e2a2b', fontFamily: 'Russo One', marginTop: '40px' }}>{locale === 'fr-FR' ? 'Devine le mot !' : 'Guess the word!'}</h1>
                    <p className='mask' style={{ fontSize: '3rem' }}>{maskWord}</p>
                    <div className='keyboard' style={{ display: 'flex', flexWrap: 'wrap', marginTop: '80px' }}>
                        {alphabets.map((letter, index) =>
                            <button
                                key={index}
                                className='keyboard-button'
                                disabled={corrects.includes(letter) || fails.includes(letter)}
                                onClick={() => onGuess(letter)}
                                style={{
                                    padding: "10px",
                                    margin: "5px",
                                    fontSize: "1.5rem",
                                    borderRadius: "10px",
                                    backgroundColor: "#f0f0f0",
                                    border: "1px solid #ccc",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s ease",
                                    outline: "none",
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = "#e0e0e0"}
                                onMouseLeave={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                            >
                                {letter}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
