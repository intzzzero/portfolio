import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function Main() {
	const [ isMenuOpened, setIsMenuOpened ] = useState(false);

	const handleMenu = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	return (
		<React.Fragment>
			<GlobalStyles />
			{isMenuOpened ? <Menu handleMenu={handleMenu} /> : ''}
			<Header handleMenu={handleMenu} />
			<MainContainer />
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
	height: 90vh;
	margin-top: 5vh;
`;

export default Main;
