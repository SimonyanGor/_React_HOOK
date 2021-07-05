import React from "react";
import './App.css';
import ComponentC from "./components/ComponentC";
// import DataFetching from "./components/DataFetching";
// import IntervalClassCounter from "./components/IntervalClassCounter";
// import IntervalHookCounter from "./components/IntervalHookCounter";

// import HookCounterOne from "./components/HookCounterOne";
// import ClassMouse from "./components/ClassMouse";
// import HookMouse from "./components/HookMouse";
// import MouseContainer from "./components/MouseContainer";
// import ClassCounterOne from "./components/ClassCounterOne";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
    return (
        <div className="App">
            <UserContext.Provider value={"Anahit"}>
                <ChannelContext.Provider value={'Gor'}>
                    <ComponentC/>
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default App;
