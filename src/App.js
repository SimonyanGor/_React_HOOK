import React from "react";
import './App.css';
import ComponentC from "./components/ComponentC";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import UserForms from "./components/UserForms";
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
            <UserForms/>
        </div>
    );
}

export default App;
