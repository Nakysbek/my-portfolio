import React, {useState} from 'react';

export const useLocalStorage = (key: any, defaultValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(key)

            if (value) {
                return JSON.parse(value)
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue))
            }
        } catch (e) {
            return defaultValue
        }
    })

    const setValue = (newValue: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue))
        } catch (e) {
            console.log(e)
        }
        setStoredValue(newValue)
    }

    return [storedValue, setValue]
};

