import React from 'react';
import styled, { keyframes } from 'styled-components';
import profile from '../Images/apple-profile.png';

function Intro() {
	return (
		<IntroContainer>
			<section className='greeting'>
				<img src={profile} alt='profile' />
				<div>
					<h3>안녕하세요!</h3>
					<p>
						시멘틱 마크업이 더 나은 세상을 만든다고 믿으며, 마케터의 이성과 디자이너의 감성을 지닌 프론트엔드 개발자 정수영입니다. 즐겁게 일하되 기본은 지키자는 것이 지향점입니다.
					</p>
				</div>
			</section>
			<section className='concept'>
				<div />
			</section>
		</IntroContainer>
	);
}

const IntroAnimation = keyframes`
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

const IntroContainer = styled.article`
	width: 100%;
	margin-top: 10vh;
	position: relative;
	animation: ${IntroAnimation} 1s ease-in-out;

	.greeting {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		img {
			width: 300px;
			height: auto;
			margin: 20px 20px 0 20px;
		}

		div {
			width: 500px;
			text-align: center;
			margin: 20px;
			color: #313034;

			h3 {
				font-size: 30px;
			}
			p {
				text-align: left;
				margin-top: 20px;
				line-height: 28px;
				font-size: 16px;
			}
		}
	}

	/* @media only screen and (max-width: 800px) {
		.greeting {
			flex-direction: column;
		}
	} */
	@media only screen and (max-width: 400px) {
		.greeting {
			div {
				width: 330px;
			}
		}
	}
`;

export default Intro;
