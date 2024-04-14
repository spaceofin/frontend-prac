import styled from "@emotion/styled";
import { Post } from "components/Post";
import { Header } from "components/Header";
import { Button } from "components/Button";
import { Form } from "components/Form";
import { useState } from "react";
import mockPosts from "data/posts.json";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b89ba;
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80vw;
  margin-bottom: 20px;
`;

interface Post {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}

function App() {
  const posts: ReadonlyArray<Post> = mockPosts;
  const [showForm, setShowForm] = useState(false);

  return (
    <Container>
      <Header />
      <ButtonContainer>
        <Button
          text="CREATE"
          color="#08BDA0"
          onClick={() => setShowForm(true)}
        />
      </ButtonContainer>
      {showForm && <Form onClose={() => setShowForm(false)} />}
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </Container>
  );
}

export default App;
