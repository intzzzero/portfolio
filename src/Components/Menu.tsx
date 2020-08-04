import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GrClose } from 'react-icons/gr';

interface Props {
	handleMenu: () => void;
}

function Menu({ handleMenu }: Props) {
	return (
		<MenuContainer>
			<GrClose onClick={handleMenu} className='closeIcon' />
		</MenuContainer>
	);
}

const MenuAnimation = keyframes`
	0% {
		left: -200px;
		opacity: 0;
	}
	100% {
		left: 0;
		opacity: 1;
	}
`;

const MenuContainer = styled.aside`
	width: 200px;
	height: 100vh;
	position: fixed;
	top: 0;
	background-color: #fff;
	z-index: 20;
	padding: 0 3vh;
	border-right: 1px solid rgba(0, 0, 0, 1);
	animation: ${MenuAnimation} 0.3s ease-in-out;

	.closeIcon {
		margin-top: 15px;
		font-size: 20px;
		cursor: pointer;
	}
`;

export default Menu;
