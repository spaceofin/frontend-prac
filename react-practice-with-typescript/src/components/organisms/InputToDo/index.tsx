import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const InputToDo = () => {
    const [toDo, setToDo] = useState('');
    const navigate = useNavigate();

    const onAdd = () => {
        setToDo('');
        navigate('/');
    };

    return (
        <Container>
            {/* <Input value="" onChange={(text) => console.log(text)} /> */}
            <Input value={toDo} onChange={setToDo} />
            <Button label="Add" color="#f72b2b" onClick={onAdd} />
        </Container>
    );
};
