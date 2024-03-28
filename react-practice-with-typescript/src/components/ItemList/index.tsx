import styled from '@emotion/styled';
import { Item } from 'components/Item';

const Container = styled.div`
	display: flex;
    flex-direction: column;
    margin: 10px;
    height: 150px;
    overflow: auto;
`;

interface Item {
    id: string;
    text: string;
}

interface Props {
    readonly itemList: ReadonlyArray<Item>;
    readonly onDelete?: (id: string) => void;
}

export const ItemList = ({ itemList, onDelete }: Props) => {
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