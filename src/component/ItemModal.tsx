import {Modal, Typography, Button} from "antd";
import React, {useEffect, useState} from "react";
import {useItemModalContext} from "../context/ItemModalContext.tsx";
import ItemCounter from "./ItemCounter.tsx";
import {ItemProps} from "./Item.tsx";

const {Title} = Typography;

const ItemModal: React.FC = () => {
    const itemModalContext = useItemModalContext();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [item, setItem] = useState<ItemProps | null>(null);
    const [itemCount, setItemCount] = useState(0);

    const handleCancel = () => {
        itemModalContext.closeModal();
        setItemCount(0);
    }

    useEffect(() => {
        setIsModalVisible(itemModalContext.isVisible);
        setItem(itemModalContext.item);
    }, [itemModalContext.isVisible, itemModalContext.item]);

    const renderItemDetails = () => {
        return (
            <>
                <div className='flex flex-col sm:flex-row sm:h-auto h-screen'>
                    <img
                        alt="example"
                        src={
                            item?.imageUrl
                        }
                        className="w-96 h-96"

                    />
                    {/*Details*/}
                    <div className='flex flex-col justify-between w-full p-5'>
                        <div>
                            {/*Title*/}
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
                            <div className='flex flex-row justify-between w-full'>
                                {/*Price*/}
                                <div className='text-base'>
                                    {'$ ' + (item?.price)?.toFixed(2)}
                                </div>
                                <ItemCounter value={itemCount} onChange={setItemCount}/>
                            </div>
                            {/*Add*/}
                            <div className='flex flex-row pt-2 gap-x-2 '>
                                {
                                    <Button block type="primary" danger>Add</Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Modal
                onCancel={handleCancel}
                footer={null}
                width={768}
                open={isModalVisible}
                style={{padding: 20}}>
                {item && renderItemDetails()}
            </Modal>
        </>
    )
}

export default ItemModal;