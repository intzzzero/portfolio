import React from 'react';
import styled from 'styled-components';

function Welcome() {
	return (
		<WelcomeContainer>
			<div className='firstBox'>
				<div />
			</div>
			<div className='secondBox'>
				<div />
			</div>
			<div className='thirdBox'>
				<div />
			</div>
		</WelcomeContainer>
	);
}

const WelcomeContainer = styled.section`
	width: 100%;
	height: 100%;

	.firstBox {
		width: 100%;
		height: 30vh;
		border: 5px solid #313034;

		div {
			width: 30%;
			height: 100%;
			background-color: #f7d928;
			border-right: 5px solid #313034;
		}
	}

	.secondBox {
		width: 100%;
		height: 50vh;
		border: 5px solid #313034;
		border-top: none;
		display: flex;
		justify-content: flex-end;

		div {
			width: 60%;
			height: 100%;
			background-color: #276cac;
			border-left: 5px solid #313034;
		}
	}

	.thirdBox {
		width: 100%;
		height: 20vh;
		border: 5px solid #313034;
		border-top: none;

		div {
			width: 60%;
			height: 100%;
			background-color: #000;
			border-right: 5px solid #313034;
		}
	}
`;

export default Welcome;
