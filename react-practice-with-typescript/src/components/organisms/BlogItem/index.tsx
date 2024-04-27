import styled from '@emotion/styled';
import { BlogTitle } from 'components/atoms/BlogTitle';
import { BlogBody } from 'components/atoms/BlogBody';

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  width: 800px;
  box-shadow:
    5px 5px 0px #ff5722,
    -3px -3px 0px #ffb49e;
`;

interface Props {
  readonly title: string;
  readonly body: string;
}

export const BlogItem = ({ title, body }: Props) => {
  return (
    <Container>
      <BlogTitle title={title} />
      <BlogBody body={body} />
    </Container>
  );
};
