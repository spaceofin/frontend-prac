import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const H1 = styled.h1`
	margin: 0px 0px;
    margin-bottom: 15px;
`;

interface Props {
    readonly text: string;
}

export const Title = ({ text }: Props) => {
    return (
        <Container>
            <H1>{text}</H1>
        </Container>
    );
};
