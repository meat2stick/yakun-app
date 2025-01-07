// MenuContext.tsx
import React, {createContext, useContext, useState} from "react";
import {MenuRootData} from "../types/GetMenuTypes.tsx";

export interface MenuContext {
    menuContextData: MenuRootData | null;
    setMenuContextData(menuContetData:MenuRootData | null): void;
}

const MenuContext = createContext<MenuContext | undefined>({
    menuContextData: null,
    setMenuContextData: () => {}
});


export interface MenuContextProviderProps {
    children: React.ReactNode;
}

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({children}) => {
    const [menuContextData, setMenuContextData] = useState<MenuRootData | null>(null);

    return (
        <MenuContext.Provider value={{menuContextData, setMenuContextData}}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenuContext must be used within MenuContext");
    }
    return context;
}

export default MenuContext;