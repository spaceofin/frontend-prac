import styled from '@emotion/styled';
import { Button } from 'components/Button';

const Container = styled.div`
	display: flex;
    width: 50vh;
    height: 30px;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
`;

const ToDo = styled.div`
	font-size: 1.2rem;
	margin-right: 10px;
`;

interface Props {
    readonly text: string;
    readonly onDelete?: () => void;
}

export const Item = ({ text, onDelete }: Props) => {
    return (
        <Container>
            <ToDo>{text}</ToDo>
            <Button text="Del" onClick={onDelete} />
        </Container>
    );
};