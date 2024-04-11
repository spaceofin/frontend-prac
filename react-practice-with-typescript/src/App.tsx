import styled from '@emotion/styled';
import { Post } from 'components/Post';
import { Header } from 'components/Header';

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #1b89ba;
	overflow: scroll;
`;


function App() {
  return (
    <Container>
      <Header />
      <Post />
    </Container>
  );
}

export default App;