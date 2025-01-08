import {Modal, Typography, Button} from "antd";
import React, {useState} from "react";
import {useItemModalContext} from "../context/ItemModalContext.tsx";
import ItemCounter from "./ItemCounter.tsx";

const {Title} = Typography;

const ItemModal: React.FC = () => {
    const itemModalContext = useItemModalContext();
    const item = itemModalContext.item;
    const isVisible = itemModalContext.isVisible;
    const isDisabled = item?.isDisabled
    const [itemCount, setItemCount] = useState(0);

    const handleCancel = () => {
        itemModalContext.closeModal();
        setItemCount(0);
    }

    const opacitySetting = (): string => {
        if (isDisabled) {
            return "opacity-50";
        }
        return "opacity-100"
    }

    const renderItemDetails = () => {
        return (
            <div className={`flex flex-col sm:flex-row sm:h-auto h-screen ${opacitySetting()}`}>
                {/*Item Image*/}
                <img
                    alt="example"
                    src={
                        item?.imageUrl
                    }
                    className="w-96 h-96"

                />
                {/*Item Details*/}
                <div className='flex flex-col justify-between w-full p-5'>
                    <div>
                        {/*Item Title*/}
                        <Title level={2}>
                            <div className=''>
                                {item?.label}
                            </div>
                        </Title>
                        {/*Description*/}
                        <Title level={5}>
                            <div
                                className=''>
                                {item?.description}
                            </div>
                        </Title>
                    </div>
                    <div className='flex flex-col'>
                        {/*Price and Item Counter*/}
                        <div className='flex flex-row justify-between w-full'>
                            <div className='text-base'>
                                {'$ ' + (item?.price)?.toFixed(2)}
                            </div>
                            <ItemCounter value={itemCount} onChange={setItemCount} disabled={item?.isDisabled}/>
                        </div>
                        {/*Add Item*/}
                        <div className='flex flex-row pt-2 gap-x-2 '>
                            {
                                <Button block type="primary" disabled={item?.isDisabled} danger>Add</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Modal
            onCancel={handleCancel}
            footer={null}
            width={768}
            open={isVisible}
            style={{padding: 20}}>
            {item && renderItemDetails()}
        </Modal>
    )
}

export default ItemModal;