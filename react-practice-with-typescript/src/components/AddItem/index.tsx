import { useState } from 'react';
import styled from '@emotion/styled';
import { TextInput } from 'components/TextInput';
import { Button } from 'components/Button';
import { Title } from 'components/Title';

const Container = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
    position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgb(137 163 163 / 85%);
`;

const Contents = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #ffffff;
	padding: 30px 50px;
	border-radius: 10px;
	z-index: 1;
`;

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

interface Props {
	readonly onAdd: (item: string) => void;
}

export const AddItem = ({ onAdd }: Props) => {
	const [item, setItem] = useState('');

	const onAddItem = () => {
		if (item === '') return;
		onAdd(item);
		setItem('');
	};

	return (
		<Container>
			<Background />
			<Contents>
				<Title text="Add To Do" />
				<InputContainer>
					<TextInput value={item} onChange={setItem} />
					<Button text="Add" color="#304FFE" onClick={onAddItem} />
				</InputContainer>
			</Contents>
		</Container>
	);
};
