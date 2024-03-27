import styled from '@emotion/styled';
import { Title } from 'components/Title';
import { ItemList } from 'components/ItemList';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    width: 50vh;
	background-color: #ffffff;
	padding: 30px;
	border-radius: 8px;
`;

interface Item {
    id: string;
    text: string;
}

interface Props {
    readonly itemList: ReadonlyArray<Item>;
    readonly onDelete?: (id: string) => void;
}

export const DataPanel = ({ itemList, onDelete }: Props) => {
    return (
        <Container>
            <Title title="To Do List" />
            <ItemList itemList={itemList} onDelete={onDelete} />
        </Container>
    );
};
