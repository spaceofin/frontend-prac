import styled from '@emotion/styled';

import { Header } from 'components/organisms/Header';
import { BlogItem } from 'components/organisms/BlogItem';

import { Button } from 'components/atoms/Button';
import { RegisterBlogDialog } from 'components/organisms/RegisterBlogDialog';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

export const BlogList = () => {
  const posts = [
    { id: 1, title: 'blog title 1', body: 'blog body 1' },
    { id: 2, title: 'blog title 2', body: 'blog body 2' },
    { id: 3, title: 'blog title 3', body: 'blog body 3' },
  ];

  return (
    <Container>
      <Header />
      {posts.map((blog) => (
        <BlogItem key={blog.id} title={blog.title} body={blog.body} />
      ))}
      <ButtonContainer>
        <Button label="등록" />
      </ButtonContainer>
      {false && <RegisterBlogDialog onClose={() => console.log('onClose')} />}
    </Container>
  );
};
