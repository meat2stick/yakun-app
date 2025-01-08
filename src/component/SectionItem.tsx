import Item, {ItemProps} from "./Item.tsx";
import React from "react";
import {useMenuContext} from "../context/MenuContext.tsx";
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

const SectionItem = () => {
    const sections = cloneDeep(useMenuContext().menu?.sections)

    const isSectionDisabled = (section: SectionType) => {
        return section.displayOrder < 0;
    }

    const renderSectionsAndItems = (sections: SectionType[] | undefined) => {
        if (!sections || sections.length === 0) {
            return [];
        }

        const sectionsToRender: React.ReactNode[] = [];

        sortObjectsBasedOnDisplayOrder(sections);

        sections.forEach(section => {
            sectionsToRender.push(
                <div className={isSectionDisabled(section) ? "opacity-70" : "opacity-100"} key={section.identifier}>
                    <Title id={section.identifier} level={2} className="font-black justify-center pt-2">{section.label}</Title>
                    <Title level={5}>{section.description}</Title>
                    {renderItems(section.items, isSectionDisabled(section))}
                </div>
            )
        })

        return sectionsToRender;
    }

    const renderItems = (items: ItemType[], isSectionDisabled: boolean) => {
        const cards: React.ReactNode[] = [];

        sortObjectsBasedOnDisplayOrder(items);

        items.forEach(item => {
            // TODO: Image url shouldn't be hard coded. Fix this after backend implementations.
            const itemProps: ItemProps = {
                label: item.label,
                description: item.description,
                imageUrl: "https://yakun.jp/wp-content/uploads/2020/05/menu_2_1_pc.jpg",
                price: item.price,
                displayOrder: item.displayOrder,
                isSectionDisabled: isSectionDisabled
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
        <div className="flex flex-col gap-y-3">
            {renderSectionsAndItems(sections)}
        </div>
    )
}
export default SectionItem
