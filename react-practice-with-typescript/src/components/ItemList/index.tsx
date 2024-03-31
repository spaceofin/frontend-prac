import styled from '@emotion/styled';
import { Item } from 'components/Item';
import { useContext } from 'react';
import { ItemListContext } from 'contexts/ItemList';

const Container = styled.div`
	display: flex;
    flex-direction: column;
    margin: 10px;
    height: 150px;
    overflow: auto;
`;

export const ItemList = () => {
    const { itemList, onDelete } = useContext(ItemListContext);

    return (
        <Container>
            {itemList.map((item) => (
                < Item
                    key={item.id}
                    text={item.text}
                    onDelete={onDelete ? (() => onDelete(item.id)) : undefined}
                />
            ))}
        </Container>

    );
};