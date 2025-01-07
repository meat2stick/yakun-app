import React, {useEffect} from "react";
import {useMenuContext} from "../context/MenuContext.tsx";
import SideMenu from "./SideMenu.tsx";
import Section from "./Section.tsx";
import dataJson from "../assets/menuResponse.json";
import ItemModal from "./ItemModal.tsx";

const Menu: React.FC = () => {
    const menuContext = useMenuContext();

    useEffect(() => {
        // TODO: Resolve the type after adding GraphQL call
        // @ts-ignore
        menuContext.setMenuContextData(dataJson);
    }, [])

    const renderMenu = () => {
        return (

            <div className="grid max-w-screen-xl grid-cols-1 px-3 mx-auto mb-12 lg:grid-cols-4 ">
                {/* Side Menu */}
                <div className="lg:col-start-1 lg:col-span-1 fixed pt-6">
                    <SideMenu/>
                </div>

                {/* Section and Items */}
                <div className="lg:col-start-2 lg:col-span-3">
                    <Section/>
                </div>
            </div>
        )
    }

    return (
        <>
            {
                menuContext?.menuContextData ? renderMenu() : 'Loading'
            }
            <ItemModal/>
        </>
    );
}

export default Menu
