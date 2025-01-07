import Item, {ItemProps} from "./Item.tsx";
import React from "react";
import {MenuContext, useMenuContext} from "../context/MenuContext.tsx";
import {SectionType} from "../types/GetMenuTypes.tsx";
import {Typography} from "antd";

const {Title} = Typography;

const Section = () => {
    const menuContext = useMenuContext();

    const renderSection = (menuContext: MenuContext) => {
        const sections: React.ReactNode[] = [];
        menuContext?.menuContextData?.data.menus.forEach(menu => {

            // Sections should be displayed in order
            menu.sections.sort((a, b) => {
                // Default to the largest int if missing
                const orderA = a.displayOrder ?? Number.MAX_SAFE_INTEGER;
                const orderB = b.displayOrder ?? Number.MAX_SAFE_INTEGER;
                return orderA - orderB;
            });

            menu.sections.forEach(section => {
                sections.push(
                    <div key={section.identifier}>
                        <Title id={section.identifier} level={2} className="font-black justify-center pt-2">{section.label}</Title>
                        <Title level={5}>{section.description}</Title>
                        {renderItems(section)}
                    </div>
                )
            })
        })
        return sections;
    }

    const renderItems = (section: SectionType) => {
        const cards: React.ReactNode[] = [];

        // Items should be displayed in order
        section.items.sort((a, b) => {
            // Default to the largest int if missing
            const orderA = a.displayOrder ?? Number.MAX_SAFE_INTEGER;
            const orderB = b.displayOrder ?? Number.MAX_SAFE_INTEGER;
            return orderA - orderB;
        });

        section.items.forEach(item => {
            const itemProps: ItemProps = {
                label: item.label,
                description: item.description,
                imageUrl: "https://mrskueh.com/assets/images/atlas-core-active-storage/62map8rbqu6mjf1y6c1kav8d5ndh",
                price: item.price
            }
            cards.push(
                <div key={item.identifier}>
                    <Item {...itemProps}/>
                </div>
            )
        })

        return (
            <div className="flex flew-row flex-wrap gap-6">
                {cards}
            </div>
        );
    };

    return (
        <>
            {renderSection(menuContext)}
        </>
    )
}
export default Section
