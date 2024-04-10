import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
	text-align: center;
	background-color: #AE69FF;
	padding: 7px;
	margin: 5px 0px;
    //border: solid 4px #834FBF;
    box-shadow: inset 0 0 0 4px #834FBF; 
`;

const StyledLink = styled(Link)`
	color: #ffffff;
	font-size: 20px;
	text-decoration: none;
`;

export const Header = () => {
    return (
        <Container>
            <StyledLink to="/">CHEER UP!</StyledLink>
        </Container>
    );
};