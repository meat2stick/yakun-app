// MenuContext.tsx
import React, {createContext, useContext, useState} from "react";
import {MenuType} from "../types/GetMenuTypes.tsx";

export interface MenuContext {
    menu: MenuType | null;
    setMenu(menu: MenuType | null): void;
}

const MenuContext = createContext<MenuContext | undefined>({
    menu: null,
    setMenu: () => {
    }
});


export interface MenuContextProviderProps {
    children: React.ReactNode;
}

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({children}) => {
    const [menu, setMenu] = useState<MenuType | null>(null);

    return (
        <MenuContext.Provider value={{menu, setMenu}}>
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