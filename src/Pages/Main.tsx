import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';
import Intro from '../Components/Intro';

function Main() {
	const [ isMenuOpened, setIsMenuOpened ] = useState(false);
	const [ scrollPosition, setScrollPosition ] = useState(0);

	const handleMenu = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	return (
		<React.Fragment>
			<GlobalStyles />
			{isMenuOpened ? <Menu handleMenu={handleMenu} /> : ''}
			<Header handleMenu={handleMenu} />
			<MainContainer onWheel={() => setScrollPosition(window.scrollY)} data-testid='MainContainer'>
				<Intro />
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
	height: 200vh;
	margin-top: 5vh;
`;

export default Main;
