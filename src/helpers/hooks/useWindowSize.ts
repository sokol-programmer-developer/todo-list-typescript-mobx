import { useState, useEffect } from "react"
import { getWindowSize } from "../getWindowSize"
import { ReturnType } from "../getWindowSize"

const useWindowSize = () => {
    const [windowWidth, setWindowWidth] = useState<ReturnType>({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
    })

    useEffect(() => {
        const handleWindowResize = () =>  {
            setWindowWidth(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, [])


    return windowWidth ? windowWidth : getWindowSize()
}

export default useWindowSize