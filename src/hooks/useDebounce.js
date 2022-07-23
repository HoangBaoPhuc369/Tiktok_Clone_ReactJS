import { useState, useEffect} from 'react'

function useDebounce(value, delay) {
    const [deBounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handle = setTimeout(() => setDebounceValue(value), delay)

        return () => clearTimeout(handle)
        // eslint-disable-next-line
    }, [value])

    return deBounceValue;
}

export default useDebounce;