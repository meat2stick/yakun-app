import React from "react";
import {Button, Card} from "antd";
import Meta from "antd/es/card/Meta";
import {ItemModalProps, useItemModalContext} from "../context/ItemModalContext.tsx";

export interface ItemProps {
    label: string;
    description: string;
    imageUrl: string;
    price: number;
    displayOrder: number;
    isSectionDisabled: boolean
}

const Item: React.FC<ItemProps> = (props) => {
    const itemModalContext = useItemModalContext();

    const isItemDisabled = () => {
        return props.displayOrder < 0 || props.isSectionDisabled;
    }

    const itemIsDisabledButSectionIsNot = () => {
        return isItemDisabled() && !props.isSectionDisabled;
    }

    const handleItemClick = () => {
        const itemModalPrps: ItemModalProps = {
            label: props.label,
            description: props.description,
            price: props.price,
            imageUrl: props.imageUrl,
            isDisabled: isItemDisabled() || props.isSectionDisabled
        }
        itemModalContext.openModal(itemModalPrps);
    }

    const renderActions = () => {
        return (
            <div className="flex flex-row justify-between">
                <div className='pl-6 flex flex-col justify-center font-Urbanist font-regular text-gray-400'>
                    {'$ ' + props.price.toFixed(2)}
                </div>
                <div className='pr-2 font-Urbanist font-regular flex flex-row'>
                        <Button type="primary" disabled={isItemDisabled()} danger>Add</Button>
                </div>
            </div>
        )
    }

    const opacitySetting = (): number => {
        if (itemIsDisabledButSectionIsNot()) {
            return 0.5;
        }
        return 1
    }

    return (
        <>
            <Card
                hoverable
                style={{width: 280, height: "100%", opacity: opacitySetting()}}
                cover={<img alt="example" src={props.imageUrl}/>}
                onClick={handleItemClick}
                actions={[renderActions()]}
            >
                <Meta title={props.label} description={props.description}/>
            </Card>
        </>
    )
}

export default Item;