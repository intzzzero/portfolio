import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';

interface Props {
	handleMenu: () => void;
}

function Menu({ handleMenu }: Props) {
	return (
		<MenuContainer>
			<FaWindowClose onClick={handleMenu} className='closeIcon' />
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
	background-color: #276cac;
	z-index: 20;
	padding: 0 3vh;
	border-right: 4px solid #313034;
	animation: ${MenuAnimation} 0.3s ease-in-out;

	.closeIcon {
		margin-top: 15px;
		font-size: 25px;
		cursor: pointer;
		color: #313034;
	}
`;

export default Menu;
