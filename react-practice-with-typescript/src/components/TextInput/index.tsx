import styled from '@emotion/styled';

const Input = styled.input`
    margin: 15px;
	font-size: 1.0rem;
	padding: 5px;
`;

interface Props {
    readonly value: string;
    readonly onChange: (text: string) => void;
}

export const TextInput = ({ value, onChange }: Props) => {
    return (
        <Input value={value} onChange={(event) => onChange(event.target.value)} />
    );
};