import React from 'react';
import styled, { keyframes } from 'styled-components';

function Concept() {
	return (
		<ConceptContainer>
			<section>
				<img
					src='https://i.pinimg.com/originals/40/98/c9/4098c99499ed0e38cc45c2c510967395.jpg'
					alt='mondrian'
				/>
				<p>
					이 사이트는 <i>몬드리안(Mondrian)</i>의 작품에 영감을 받아 제작한 포트폴리오 사이트입니다.
				</p>
			</section>
		</ConceptContainer>
	);
}

const ConceptAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const ConceptContainer = styled.article`
	width: 100%;
	max-height: 700px;
	margin-top: 10vh;
	animation: ${ConceptAnimation} 1s ease-in-out;

	section {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		img {
			width: 750px;
			height: auto;
		}

		p {
			margin-top: 25px;
			font-size: 16px;
			color: #313034;
		}
	}

	@media only screen and (max-width: 800px) {
		section {
			img {
				width: 560px;
			}
		}
	}
	@media only screen and (max-width: 400px) {
		section {
			img {
				width: 370px;
			}
		}
	}
`;

export default Concept;
