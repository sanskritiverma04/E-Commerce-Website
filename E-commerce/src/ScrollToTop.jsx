import React from "react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [toTop, setToTop] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setToTop(true)
            } else {
                setToTop(false)
            }
        })
    }, []);
    const scrollUp= () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return ( 
        <div className="scroll">
             {toTop && ( <button onClick={scrollUp}> ^ </button>)}
        </div>
     );
}
 
export default ScrollToTop;