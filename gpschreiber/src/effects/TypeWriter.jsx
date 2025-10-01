import React, { useState, useEffect, use } from 'react';

const TypeWriter = ({ text = '', delay = 50, resetKey }) => {
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);

    // Reset when the incoming text changes
    useEffect(() => {
        setCurrentText('');
        setIndex(0);
    }, [text]);

    useEffect(() => {
        setCurrentText('');
        setIndex(0);
    }, [resetKey]);

    useEffect(() => {
        if (!text) return undefined;
        if (index >= text.length) return undefined;

        const t = setTimeout(() => {
            setCurrentText(prev => prev + text[index]);
            setIndex(i => i + 1);
        }, delay);

        return () => clearTimeout(t);
    }, [index, text, delay]);

    return <span className='typewriter' aria-live="polite">{currentText}</span>;
};

export default TypeWriter;