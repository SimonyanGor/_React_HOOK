import React, {useState, useEffect} from "react";

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log("Mouse event");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("Use Effect called");
        window.addEventListener("mousemove", logMousePosition)
        return ()=>{
            console.log("component unmount code");
            window.removeEventListener("mousemove",logMousePosition)
        }
    },[])

    return (
        <div>
            <div>Hooks X - {x} Y - {y}</div>
        </div>
    )
}

export default HookMouse;