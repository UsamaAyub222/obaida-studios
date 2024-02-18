// import {useState, useEffect, useRef} from 'react'

// export const usePosition = () => {
//     const ref = useRef(null)
//     let [position, setPosition] = useState(0)
//     let [elWidth, setElWidth] = useState(0)
//     let styles2 = position > 300 ? {opacity: "0", transform: "translateY(-5rem)", transition: "all .9s"} : {opacity: "1", transform: "translateY(0)", transition: "all .9s"}



//     useEffect(()=> {
//         function handlePosition(){setPosition(ref.current.getBoundingClientRect().top)}
//         window.addEventListener("scroll", handlePosition)
//         return () => {window.removeEventListener("scroll", handlePosition)}
//     }, [position])
    
//     return [position, ref, styles2]
// }
