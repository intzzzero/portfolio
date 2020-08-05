/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Project = () => {
	return (
		<ProjectContainer>
			<iframe
				src='https://www.youtube.com/embed/KTXLcmBhr-0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
			/>
		</ProjectContainer>
	);
};

const ProjectAnimation = keyframes`
	0% {
		left: -20vw;
		opacity: 0;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		left: 0;
		opacity: 1;
	}
`;

const ProjectContainer = styled.article`
	width: 100%;
	margin-top: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	animation: ${ProjectAnimation} 0.5s ease-in-out;

	iframe {
		border: 1px solid rgba(0, 0, 0, 1);
		width: 750px;
		height: 455px;
	}

	@media only screen and (max-width: 800px) {
		iframe {
			width: 560px;
			height: 315px;
		}
	}
`;

export default Project;
