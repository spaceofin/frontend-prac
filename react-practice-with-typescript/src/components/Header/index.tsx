import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-image: linear-gradient(to bottom, #11DEBD, #1b89ba);
	padding: 50px;
	width: calc(100% - 40px);
	margin-bottom: 20px;
`;

const Title = styled.div`
	font-size: 1.7rem;
	font-weight: normal;
    font-family: cursive;
    color: #ffffff;
`;

export const Header = () => {
    return (
        <Container>
            <Title>Word Canvas</Title>
        </Container>
    );
};
