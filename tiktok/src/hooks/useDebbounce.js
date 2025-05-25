import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue());
        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
