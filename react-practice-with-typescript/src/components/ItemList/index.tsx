import styled from '@emotion/styled';
import { Item } from 'components/Item';

const Container = styled.div`
	display: flex;
    flex-direction: column;
    margin: 10px;
`;

interface Item {
    id: string;
    text: string;
}

interface Props {
    readonly items: ReadonlyArray<Item>;
    readonly onDelete?: (id: string) => void;
}

export const ItemList = ({ items, onDelete }: Props) => {
    return (
        <Container>
            {items.map((item) => (
                < Item
                    key={item.id}
                    text={item.text}
                    onDelete={onDelete ? (() => onDelete(item.id)) : undefined}
                />
            ))}
        </Container>

    );
};