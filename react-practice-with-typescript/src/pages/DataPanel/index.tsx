import styled from '@emotion/styled';
import { ToggleButton } from 'components/ToggleButton';
import { useNavigate } from 'react-router-dom';
import { Title } from 'components/Title';
import { ItemList } from 'components/ItemList';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
    width: max(45vw, 500px);
    height: 300px;
	background-color: #ffffff;
	padding: 30px;
	border-radius: 8px;
`;

export const DataPanel = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Title text="To Do List" />
            <ItemList />
            <ToggleButton on={false} onClick={() => navigate('/add')} />
        </Container>
    );
};
