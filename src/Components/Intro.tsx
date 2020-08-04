import React from 'react';
import styled from 'styled-components';
import profile from '../Images/apple-profile.png';

function Intro() {
	return (
		<IntroContainer>
			<img src={profile} alt='profile' />
			<div>
				<h3>안녕하세요!</h3>
				<p>시멘틱 마크업이 더 나은 세상을 만든다고 믿으며, 마케터의 이성과 디자이너의 감성을 지닌 프론트엔드 개발자 정수영입니다. 즐겁게 일하되 기본은 지키자는 것이 지향점입니다.</p>
			</div>
		</IntroContainer>
	);
}

const IntroContainer = styled.article`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 300px;
		height: auto;
		margin: 20px;
	}

	div {
		width: 500px;
		text-align: center;
		margin: 20px;

		h3 {
			font-size: 30px;
		}
		p {
			text-align: left;
			margin-top: 20px;
			line-height: 28px;
		}
	}

	@media only screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

export default Intro;
