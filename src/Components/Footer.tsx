import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<p>&copy; {new Date().getFullYear()} codeAmeba</p>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	width: 100%;
	height: 5vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		color: rgba(0, 0, 0, 0.4);
		font-size: 14px;
		font-weight: 200;
	}
`;

export default Footer;
