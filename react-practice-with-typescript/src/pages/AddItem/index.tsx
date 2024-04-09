import styled from '@emotion/styled';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput } from 'components/TextInput';
import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { ItemListContext } from 'contexts/ItemList';
import { ToggleButton } from 'components/ToggleButton';

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

export const AddItem = () => {
	const { onAdd } = useContext(ItemListContext);
	const [item, setItem] = useState('');
	const navigate = useNavigate();

	const onAddItem = () => {
		if (item === '') return;
		onAdd(item);
		setItem('');
		navigate('/');
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
			<ToggleButton on={true} onClick={() => navigate('/')} />
		</Container>
	);
};
