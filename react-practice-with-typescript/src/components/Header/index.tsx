import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
	background-color: #ffffff;
	padding: 25px;
	width: calc(100% - 40px);
	margin-bottom: 20px;
    margin-top: 20px;
`;

const Title = styled.div`
	font-size: 1.5rem;
	font-weight: normal;
`;

export const Header = () => {
    return (
        <Container>
            <Title>Word Canvas</Title>
        </Container>
    );
};
