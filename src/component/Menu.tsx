import React, {useEffect} from "react";
import {useMenuContext} from "../context/MenuContext.tsx";
import SideMenu from "./SideMenu.tsx";
import Section from "./Section.tsx";
import ItemModal from "./ItemModal.tsx";
import {useQuery} from "@apollo/client";
import {GET_MENU_BY_ID} from '../graphql/queries.ts';
import {GetMenuByIdResponse} from "../types/GetMenuTypes.tsx";

const Menu: React.FC = () => {
    const menuContext = useMenuContext();
    const {data, loading, error} = useQuery<GetMenuByIdResponse>(GET_MENU_BY_ID, {
        variables: {id: 1} // Assuming we only will only render one menu based on the requirements.
    });

    useEffect(() => {
        if (data) {
            menuContext.setMenu(data.menu);
        }
    }, [data])

    // Handle loading state
    if (loading) {
        return <p>Loading...</p>;
    }

    // Handle error state
    if (error) {
        console.error(error);
        return <p>Error: {error.message}</p>;
    }

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
                menuContext.menu ? renderMenu() : 'Loading'
            }
            <ItemModal/>
        </>
    );
}

export default Menu
