import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
	handleMenu: () => void;
}

function Header({ handleMenu }: Props) {
	return (
		<HeaderContainer>
			<AiOutlineMenu className='menuIcon' onClick={handleMenu} />
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
	background-color: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 3vw;

	.menuIcon {
		font-size: 25px;
		cursor: pointer;
	}

	a {
		color: rgba(0, 0, 0, 1);
		text-decoration: none;

		h1 {
			font-size: 20px;
			font-weight: 200;
			letter-spacing: 1px;
		}
	}
`;

export default Header;
