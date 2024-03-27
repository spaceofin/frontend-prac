import styled from '@emotion/styled';
import { Item } from 'components/Item';

const Container = styled.div`
	display: flex;
    flex-direction: column;
    margin: 10px;
`;

interface Props {
    readonly items: ReadonlyArray<string>;
    readonly onDelete?: (item: string) => void;
}

export const ItemList = ({ items, onDelete }: Props) => {
    return (
        <Container>
            {items.map((item, index) => (
                < Item
                    key={index}
                    text={item}
                    onDelete={onDelete ? (() => onDelete(item)) : undefined}
                />
            ))}
        </Container>

    );
};