import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const H1 = styled.h1`
	margin-top: 0;
`;

interface Props {
    readonly title: string;
}

export const Title = ({ title }: Props) => {
    return (
        <Container>
            <H1>{title}</H1>
        </Container>
    );
};
