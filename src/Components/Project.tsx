/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled, { keyframes } from 'styled-components';

function Project() {
	return (
		<ProjectContainer>
			<iframe
				src='https://www.youtube.com/embed/KTXLcmBhr-0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
			/>
			<iframe
				src='https://www.youtube.com/embed/PbSX27sZF-4'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
			/>
			<iframe
				src='https://www.youtube.com/embed/tIeM7EzcDEo'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
			/>
			<iframe
				src='https://www.youtube.com/embed/46TPg-dyv78'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
			/>
		</ProjectContainer>
	);
}

const VideoAnimation = keyframes`
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

const ProjectContainer = styled.article`
	width: 100%;
	margin-top: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	animation: ${VideoAnimation} 1s ease-in-out;

	iframe {
		border: 4px solid #313034;
		background-color: #f7d928;
		width: 750px;
		height: 455px;
		margin: 20px 0;
		padding: 15px;
	}

	@media only screen and (max-width: 800px) {
		iframe {
			width: 560px;
			height: 315px;
		}
	}
	@media only screen and (max-width: 400px) {
		iframe {
			width: 370px;
			height: 200px;
			margin: 10px 0;
			padding: 5px;
		}
	}
`;

export default Project;
