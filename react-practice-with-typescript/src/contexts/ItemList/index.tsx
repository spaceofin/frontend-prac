import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Item {
    id: string;
    text: string;
}

interface Context {
    readonly itemList: Item[];
    readonly onAdd: (item: string) => void;
    readonly onDelete: (targetId: string) => void;
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

const ItemListContext = createContext<Context>({
    itemList: [],
    onAdd: (): void => { /* empty */ },
    onDelete: (): void => {/* empty */ },
});


const ItemListContextProvider = ({ children }: Props) => {
    const [itemList, setItemList] = useState([
        { id: uuidv4(), text: "Study" },
        { id: uuidv4(), text: "Laundry" },
        { id: uuidv4(), text: "Exercise" }
    ]);

    const onDelete = (targetId: string) => {
        setItemList(itemList.filter((item) => item.id !== targetId))
    };

    const onAdd = (item: string) => {
        const newItem = { id: uuidv4(), text: item };
        setItemList([...itemList, newItem]);
    };

    return (
        <ItemListContext.Provider
            value={{
                itemList,
                onAdd,
                onDelete,
            }}>
            {children}
        </ItemListContext.Provider>
    );
};

export { ItemListContext, ItemListContextProvider };
