import {useState, useEffect} from "react"


function useParallax(rateProp) {
    const [offset, setOffset] = useState(0);

    useEffect(()=> {
        window.addEventListener("scroll", function(e){
            setOffset(window.pageYOffset)
        })
    }, [])
    
    
    
    return [offset]
    
}

export default useParallax