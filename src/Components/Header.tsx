import React from 'react';
import styled from 'styled-components';
import { TiThMenu } from 'react-icons/ti';

interface Props {
	handleMenu: () => void;
}

function Header({ handleMenu }: Props) {
	return (
		<HeaderContainer>
			<TiThMenu className='menuIcon' onClick={handleMenu} />
			<a href='/'>
				<h1>codeAmeba's Portfolio</h1>
			</a>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	width: 100%;
	height: 50px;
	position: fixed;
	top: 0;
	background-color: #d72729;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 3vw;
	border: 5px solid #313034;
	z-index: 10;

	.menuIcon {
		font-size: 25px;
		cursor: pointer;
		color: #313034;
	}

	a {
		color: rgba(0, 0, 0, 1);
		text-decoration: none;

		h1 {
			font-size: 20px;
			font-weight: 600;
			letter-spacing: 1px;
			color: #313034;
		}
	}
`;

export default Header;
