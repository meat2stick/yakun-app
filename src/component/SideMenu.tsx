import React from "react";
import {Menu} from 'antd';
import {useMenuContext} from "../context/MenuContext.tsx";
import {SectionType} from "../types/GetMenuTypes.tsx";

const SideMenu: React.FC = () => {
    const menuContext = useMenuContext();

    const generateSections = (sections: SectionType[]) => {
        return sections.map(section => ({
            key: section.identifier,
            label: <a key={section.identifier} href={'#'+section.identifier}>{section.label}</a>,
            children: null
        }));
    }

    return (
        menuContext?.menuContextData?.data.menus &&
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="light"
            items={generateSections(menuContext.menuContextData?.data.menus[0]?.sections)}
            style={{ width: 256 }}
        />
    )
}

export default SideMenu
