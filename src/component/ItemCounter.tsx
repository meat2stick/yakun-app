import React from "react";
import {Button, Input} from "antd";

interface ItemCounterProps {
    value: number;
    onChange: (value: number) => void;
}

export const ItemCounter:React.FC<ItemCounterProps> = ({value, onChange}) => {

    const onClickMinus = () => {
        if (value > 0) {
            onChange(value - 1);
        }
    }

    const onClickPlus = () => {
        if (value < 9) {
            onChange(value + 1);
        }
    }

    return (
        <div className='flex flex-row w-30 bg-white '>
            <Button onClick={onClickMinus}>-</Button>
            <div className='w-8'>
                <Input value={value}/>
            </div>
            <Button onClick={onClickPlus}>+</Button>
        </div>
    )
}

export default ItemCounter;