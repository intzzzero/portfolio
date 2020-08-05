import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';
import Intro from '../Components/Intro';
import Project from '../Components/Project';
import Welcome from '../Components/Welcome';
import Concept from '../Components/Concept';

function Main() {
	const [ isMenuOpened, setIsMenuOpened ] = useState(false);
	const [ scrollPosition, setScrollPosition ] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};

	const handleMenu = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	return (
		<React.Fragment>
			<GlobalStyles />
			{isMenuOpened ? <Menu handleMenu={handleMenu} /> : ''}
			<Header handleMenu={handleMenu} />
			<MainContainer data-testid='MainContainer'>
				{scrollPosition > 0 ? <Intro /> : <Welcome />}
				{scrollPosition > 350 ? <Concept /> : ''}
				{scrollPosition > 600 ? <Project /> : ''}
			</MainContainer>
			<Footer />
		</React.Fragment>
	);
}

const GlobalStyles = createGlobalStyle`
	body {
		width: 100%;
		height: 100%;
		font-family: Helvetica, sans-serif;
		position: relative;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

const MainContainer = styled.main`
	width: 100%;
	height: 450vh;
	margin-top: 5vh;
	overflow: hidden;
`;

export default Main;
