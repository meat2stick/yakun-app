import Item, {ItemProps} from "./Item.tsx";
import React from "react";
import {MenuContext, useMenuContext} from "../context/MenuContext.tsx";
import {ItemType, SectionType} from "../types/GetMenuTypes.tsx";
import {Typography} from "antd";
import {cloneDeep} from "@apollo/client/utilities";

const {Title} = Typography;

const sortObjectsBasedOnDisplayOrder = (obj: ItemType[] | SectionType []) => {
    // displayOrder is converted to positive as negative number represents disabled sections
    obj.sort((a, b) => {
        // Default to the largest int if missing
        const orderA = Math.abs(a.displayOrder) ?? Number.MAX_SAFE_INTEGER;
        const orderB = Math.abs(b.displayOrder) ?? Number.MAX_SAFE_INTEGER;
        return orderA - orderB;
    });
}

const Section = () => {
    const menuContext = useMenuContext();

    const renderSection = (menuContext: MenuContext) => {
        const sections = cloneDeep(menuContext.menu?.sections);
        const sectionsToRender: React.ReactNode[] = [];

        if (!sections || sections.length === 0) {
            return sectionsToRender;
        }

        sortObjectsBasedOnDisplayOrder(sections);

        sections.forEach(section => {
            sectionsToRender.push(
                <div key={section.identifier}>
                    <Title id={section.identifier} level={2}
                           className="font-black justify-center pt-2">{section.label}</Title>
                    <Title level={5}>{section.description}</Title>
                    {renderItems(section.items)}
                </div>
            )
        })

        return sectionsToRender;
    }

    const renderItems = (items: ItemType[]) => {
        const cards: React.ReactNode[] = [];

        sortObjectsBasedOnDisplayOrder(items);

        items.forEach(item => {
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
