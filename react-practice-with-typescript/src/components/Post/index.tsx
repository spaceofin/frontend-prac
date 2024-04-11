import styled from '@emotion/styled';

const Container = styled.div`
width: 80vw;
	background-color: #ffffff;
	padding: 20px;
	margin: 20px;
	border-radius: 10px;
	box-shadow: 7px 7px 2px #14678C;
`;

const Title = styled.div`
	font-weight: bold;
	margin-bottom: 10px;
`;

const Body = styled.div`
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const Post = () => {
    return (
        <Container>
            <Title>Title 1</Title>
            <Body>Body 1</Body>
        </Container>
    );
};