import { useState } from 'react';

export const useInput = (defaultValue) => {
    
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        setValue(e.target.value)
    }

    return (value, setValue, onChange);
}

export const useDebounce = (text, delay) => {
    const [value, setValue] = useState(text)

    useEffect( () => {
        const timer = setTimeout(() => {
            setValue(text)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [text])

    return value;
}