import styled from '@emotion/styled';
import { Button } from 'components/Button';

const Container = styled.div`
	position: absolute;
    bottom: 100px;
	right: max(18vw, 200px);
	z-index: 1;
`;

interface Props {
    readonly on: boolean;
    readonly onClick: () => void;
}

export const ToggleButton = ({ on, onClick }: Props) => {
    return (
        <Container>
            <Button
                text={on ? 'Close' : 'Add To Do'}
                color={on ? '#9660CB' : '#7EBA00'}
                onClick={onClick}
            />
        </Container>
    );
};