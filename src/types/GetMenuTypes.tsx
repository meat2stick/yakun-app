export interface GetMenuByIdResponse {
    menu: MenuType;
}

export interface MenuType {
    identifier: string;
    label: string;
    sections: SectionType[];
}

export interface SectionType {
    identifier: string;
    label: string;
    description: string;
    items: ItemType[];
    displayOrder: number;
}

export interface ItemType {
    identifier: string;
    label: string;
    description: string;
    price: number;
    // imageUrl: string; TODO: To enable this field after adding imageUrl in the backend.
    displayOrder: number;
}
