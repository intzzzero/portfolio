import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWindowClose, FaBloggerB } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram, AiFillFacebook, AiOutlineSmile } from 'react-icons/ai';
import { MdPhotoCamera } from 'react-icons/md';

interface Props {
	handleMenu: () => void;
}

function Menu({ handleMenu }: Props) {
	return (
		<MenuContainer>
			<FaWindowClose onClick={handleMenu} className='closeIcon' />
			<div>
				<ul>
					<li>
						<a href='https://codeameba.netlify.app/' target='_blank' rel='noopener noreferrer'>
							<FaBloggerB />
							<span>Blog</span>
						</a>
					</li>
					<li>
						<a href='https://github.com/codeAmeba' target='_blank' rel='noopener noreferrer'>
							<AiFillGithub />
							<span>Github</span>
						</a>
					</li>
					<li>
						<a href='https://www.instagram.com/aprilgreenery/' target='_blank' rel='noopener noreferrer'>
							<AiFillInstagram />
							<span>Instagram</span>
						</a>
					</li>
					<li>
						<a href='https://www.facebook.com/aprilgreenery/' target='_blank' rel='noopener noreferrer'>
							<AiFillFacebook />
							<span>Facebook</span>
						</a>
					</li>
					<li>
						<a
							href='https://codeameba.github.io/front-end-practice/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<AiOutlineSmile />
							<span>Practice</span>
						</a>
					</li>
				</ul>
			</div>
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
	border: 5px solid #313034;
	animation: ${MenuAnimation} 0.3s ease-in-out;

	.closeIcon {
		margin-top: 15px;
		font-size: 25px;
		cursor: pointer;
		color: #313034;
	}

	div {
		margin-top: 20vh;
		ul {
			li {
				list-style: none;
				a {
					display: flex;
					justify-content: flex-start;
					margin-bottom: 20px;
					font-size: 20px;
					font-weight: 600;
					cursor: pointer;
					color: #313034;
					text-decoration: none;
					transition: 0.3s ease-in-out;
					transition-delay: 0.1s;
					display: flex;
					justify-content: space-between;

					&:hover {
						color: #f7d928;
					}
				}
			}
		}
	}
`;

export default Menu;
