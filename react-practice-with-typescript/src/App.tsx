import styled from "@emotion/styled";
import { Post } from "components/Post";
import { Header } from "components/Header";
import mockPosts from "data/posts.json";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b89ba;
  overflow: scroll;
`;

interface Post {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}

function App() {
  const posts: ReadonlyArray<Post> = mockPosts;

  return (
    <Container>
      <Header />
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </Container>
  );
}

export default App;
