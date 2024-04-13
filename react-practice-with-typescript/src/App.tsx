import styled from "@emotion/styled";
import { Post } from "components/Post";
import { Header } from "components/Header";

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
  const posts: ReadonlyArray<Post> = [
    {
      id: 1,
      userId: 1,
      title: "Title1",
      body: "Body1",
    },
    {
      id: 2,
      userId: 1,
      title: "Title2",
      body: "Body2",
    },
    {
      id: 3,
      userId: 2,
      title: "Title3",
      body: "Body3",
    },
  ];

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
