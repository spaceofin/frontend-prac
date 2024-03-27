import styled from '@emotion/styled';

const Container = styled.button`
	border: 0;
	color: #ffffff;
	background-color: #F75472;
	cursor: pointer;
	padding: 8px 16px;
	border-radius: 4px;

	&:hover {
		background-color: #F75472;
		opacity: 0.85;
	}

	&:active {
		box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.1),
                    inset -5px -5px 15px rgba(0, 0, 0, 0.1);
	}
`;

interface Props {
	readonly text: string;
	readonly onClick?: () => void;
}

export const Button = ({ text, onClick }: Props) => {
	return <Container onClick={onClick}>{text}</Container>
};