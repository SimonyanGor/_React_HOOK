import React, {useEffect, useState} from "react";

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const someProp = "";
    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const doSomeThing = () => {
            console.log(someProp);
        }
        doSomeThing()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [someProp])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter;