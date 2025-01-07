import React, {createContext, useContext, useState} from "react";
import {ItemType} from '../types/GetMenuTypes.tsx'
import {ItemProps} from "../component/Item.tsx";

export interface ItemModalContext {
    isVisible: boolean;
    item: ItemProps | null;

    openModal(item: ItemProps | null): void;

    closeModal(): void;
}

const ItemModalContext = createContext<ItemModalContext>({
    isVisible: false,
    item: null,
    openModal: () => {
    },
    closeModal: () => {
    }
});

export interface ItemModalContextProviderProps {
    children: React.ReactNode;
}

export const ItemModalContextProvider : React.FC<ItemModalContextProviderProps> = ({children}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [item, setItem] = useState<ItemType | null>(null);

    const openModal = (item: ItemType) => {
        setItem(item);
        setIsVisible(true);
    };

    const closeModal = () => {
        setIsVisible(false);
        setItem(null);
    };

    return (
        <ItemModalContext.Provider value={{isVisible, item, openModal, closeModal}}>
            {children}
        </ItemModalContext.Provider>
    );

};

export const useItemModalContext = () => {
    const context = useContext(ItemModalContext)
    if (!context) {
        throw new Error("useItemModalContext must be used within a ItemModalContextProvider");
    }
    return context;
};