import React from "react";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import {useItemModalContext} from "../context/ItemModalContext.tsx";

export interface ItemProps {
    label: string;
    description: string;
    imageUrl: string;
    price: number;
}

const Item: React.FC<ItemProps> = (props) => {
    const itemModalContext = useItemModalContext();

    const handleItemClick = () => {
        itemModalContext.openModal(props);
        console.log(itemModalContext);
    }

    return (
        <>
            <Card
                hoverable
                style={{width: 240, height: "100%"}}
                cover={<img alt="example" src={props.imageUrl}/>}
                onClick={handleItemClick}
            >
                <Meta title={props.label} description={props.description}/>
            </Card>
        </>
    )
}

export default Item;