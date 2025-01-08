import './App.css'
import React from "react";
import {useMenuContext} from "./context/MenuContext.tsx";
import {useQuery} from "@apollo/client";
import {GetMenuByIdResponse} from "./types/GetMenuTypes.tsx";
import {GET_MENU_BY_ID} from "./graphql/queries.ts";
import SideMenu from "./component/SideMenu.tsx";
import ItemModal from "./component/ItemModal.tsx";
import SectionItem from "./component/SectionItem.tsx";

const App: React.FC = () => {
    const menuContext = useMenuContext();

    // Do a graphQL query to get the menu data
    useQuery<GetMenuByIdResponse>(GET_MENU_BY_ID, {
        variables: {id: 1}, // Assuming we only will only render one menu based on the requirement.
        onCompleted: (fetchedData) => {
            if (fetchedData?.menu) {
                menuContext.setMenu(fetchedData.menu);
            }
        },
        onError: (error) => {
            alert(`Error: ${error.message}`);
        }
    });

    const renderMenu = () => {
        return (
            <>
                <div className="grid max-w-screen-xl grid-cols-1 px-3 mx-auto mb-12 lg:grid-cols-4 ">
                    {/* Side Menu */}
                    <div className="lg:col-start-1 lg:col-span-1 fixed pt-6">
                        <SideMenu/>
                    </div>

                    {/* Section and Items */}
                    <div className="lg:col-start-2 lg:col-span-3 pt-6">
                        <SectionItem/>
                    </div>
                </div>
                <ItemModal/>
            </>
        );
    }

    return (
        menuContext && renderMenu()
    )
}

export default App
