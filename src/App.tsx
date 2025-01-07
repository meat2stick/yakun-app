import './App.css'
import React from "react";
import {MenuContextProvider} from "./context/MenuContext.tsx";
import {ItemModalContextProvider} from "./context/ItemModalContext.tsx";
import Menu from "./component/Menu.tsx";


const App: React.FC = () => {

    return (
        <MenuContextProvider>
            <ItemModalContextProvider>
                <Menu/>
            </ItemModalContextProvider>
        </MenuContextProvider>
    )
}

export default App
