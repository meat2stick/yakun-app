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
        menuContext?.menu &&
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="light"
            items={generateSections(menuContext.menu?.sections)}
            style={{ width: 256 }}
        />
    )
}

export default SideMenu
