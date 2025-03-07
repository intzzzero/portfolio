/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaAngular } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

function Project() {
	return (
		<ProjectContainer>
			<h2 className="react">
				<FaReact /> React
			</h2>
			<div className="bookjournalism">
				<h3>
					북저널리즘(
					<a
						href="https://github.com/intzzzero/bookjournalism-clone-with-tdd"
						target="_blank"
						rel="noopener noreferrer"
					>
						repo
					</a>
					)
				</h3>
				<iframe
					src="https://www.youtube.com/embed/KTXLcmBhr-0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				/>
				<h4>소개</h4>
				<p>
					켄트 벡의 테스트 주도 개발을 읽으며 TDD를 경험해보고 싶어 테스트코드를
					작성한 만큼만 구현한다는 TDD 원칙에 입각하여 진행중인
					개인프로젝트입니다. 평소 즐겨 보는 북저널리즘이라는 사이트를 클론하고
					있습니다. 자세한 내용은{' '}
					<a
						href="https://intzzzero.netlify.app/i-want-tdd"
						target="_blank"
						rel="noopener noreferrer"
					>
						블로그에 포스팅
					</a>
					하였습니다.
				</p>
				<h4>사용기술</h4>
				<p>
					- React.js
					<br />
					- Hooks
					<br />
					- Styled-components
					<br />
					- Jest
					<br />- React-Testing-Library
				</p>
			</div>
			<div className="kartrider">
				<h3>
					카트라이더 TMI(
					<a
						href="https://github.com/intzzzero/kartrider-tmi-clone"
						target="_blank"
						rel="noopener noreferrer"
					>
						repo
					</a>
					)
				</h3>
				<iframe
					src="https://www.youtube.com/embed/PbSX27sZF-4"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				/>
				<h4>소개</h4>
				<p>
					넥슨(NEXON)의 온라인 레이싱 게임 카트라이더(Kart Rider)의 전적 검색
					서비스인 카트라이더 TMI 를 클로닝하는 프로젝트로써 프론트엔드 개발자로
					참여했습니다. React의 함수형 컴포넌트로 제작했으며, Hooks와
					Styled-component를 사용했습니다. 데이터 시각화를 경험해볼 수 있는 좋은
					기회였고, 그래프는 Chart.js를 통해 구현하였습니다.{' '}
					<a
						href="https://intzzzero.netlify.app/after-second-project-with-wecode"
						target="_blank"
						rel="noopener noreferrer"
					>
						자세한 후기는 블로그에 포스팅
					</a>
					하였습니다.
				</p>
				<h4>사용기술</h4>
				<p>
					- React.js
					<br />
					- Hooks
					<br />
					- Styled-components
					<br />
					- React-router-dom
					<br />
					- React-kakao-login
					<br />
					- Chart.js
					<br />- React-circular-progressbar
				</p>
			</div>

			<div className="chanel">
				<h3>
					샤넬(
					<a
						href="https://github.com/intzzzero/chanel-clone-frontend"
						target="_blank"
						rel="noopener noreferrer"
					>
						repo
					</a>
					)
				</h3>
				<iframe
					src="https://www.youtube.com/embed/tIeM7EzcDEo"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				/>
				<h4>소개</h4>
				<p>
					우아함과 고급스러움의 대명사인 샤넬의 홈페이지를 클로닝하는
					프로젝트로써 프론트엔드 개발자로 참여하였습니다. React의 클래스형
					컴포넌트를 사용했으며, 컴포넌트의 Lifecycle을 명시적으로 알 수 있는
					메서드를 활용하며 동작원리를 익히기 위한 목적이 컸습니다. 위시리스트의
					상태를 boolean으로 관리하여 동일한 POST로 추가와 삭제를 구현할 수
					있었습니다.{' '}
					<a
						href="https://intzzzero.netlify.app/after-first-project-with-wecode"
						target="_blank"
						rel="noopener noreferrer"
					>
						자세한 후기는 블로그에 포스팅
					</a>
					하였습니다.
				</p>
				<h4>사용기술</h4>
				<p>
					- React.js
					<br />
					- Sass
					<br />
					- React-router-dom
					<br />
					- React-slick
					<br />
				</p>
			</div>

			<h2 className="angular">
				<FaAngular />
				Angular
			</h2>

			<div>
				<h3>
					패스트플릭스(
					<a
						href="https://github.com/intzzzero/FASTFLIX-with-Angular"
						target="_blank"
						rel="noopener noreferrer"
					>
						repo
					</a>
					)
				</h3>
				<iframe
					src="https://www.youtube.com/embed/46TPg-dyv78"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				/>
				<h4>소개</h4>
				<p>
					Angular와 TypeScript를 사용하여 진행했던 넷플릭스 클론 프로젝트입니다.
					프론트엔드 3명, 백엔드 2명으로 구성된 팀이었으며, 본인은 '비디오
					플레이어 컴포넌트'를 담당했습니다. 관련 라이브러리로 video.js를
					사용했으며, 당시 DOM에 대한 이해가 부족했기에 공부 목적으로 해당
					라이브러리의 플러그인을 사용하지 않고 각각의 버튼과 기능을 직접
					구현하였습니다. 특히, 컴포넌트 소멸 시점에 재생된 시간을 로그인 중인
					유저의 정보로 저장했다가 이어보기 시 불러오는 작업이 가장 기억에
					남습니다.
				</p>
				<h4>사용기술</h4>
				<p>
					- Angular
					<br />
					- Sass
					<br />
					- TypeScript
					<br />
					- Video.js
					<br />
				</p>
			</div>

			<h2 className="vanilla">
				<IoLogoJavascript className="jsIcon" />
				Vanilla JavaScript
			</h2>
			<div>
				<h3>
					유령을 피해라(
					<a
						href="https://github.com/intzzzero/enemy-rain"
						target="_blank"
						rel="noopener noreferrer"
					>
						repo
					</a>
					)
				</h3>
				<img
					src="https://github.com/intzzzero/enemy-rain/raw/master/images/play.png"
					alt="mini game"
				/>
				<h4>소개</h4>
				<p>
					제한 시간 60초 동안 플레이어는 상, 하, 좌, 우 방향키를 통해 이동할 수
					있습니다. 유령은 1초마다 랜덤한 위치로 이동하며, 플레이어가 유령과
					직선상으로 동일한 위치에 있을 경우 'WARNING!!!'이 출력됩니다. 진한
					빨간색으로 표시된 유령의 반경으로 플레이어가 진입 시 'YOU DIE!!!'가
					출력되며, 카운트다운과 유령의 움직임이 멈춥니다. 만약, 플레이어가 60초
					동안 생존할 경우 'YOU SURVIVE!!!'가 출력되며 카운트다운과 유령의
					움직임 멈춥니다.{' '}
					<a
						href="https://intzzzero.github.io/enemy-rain/"
						target="_blank"
						rel="noopener noreferrer"
					>
						게임 플레이 링크
					</a>
					를 통해 체험하실 수 있습니다.
				</p>
				<h4>사용기술</h4>
				<p>
					- JavaScript(ES6)
					<br />
					- HTML5
					<br />
					- CSS3
					<br />
				</p>
			</div>
			<div>
				<h3>
					인스타그램(
					<a
						href="https://github.com/intzzzero/westagram"
						target="_blank"
						rel="noopener noreferrer"
					>
						repo
					</a>
					)
				</h3>
				<img
					src="https://github.com/intzzzero/westagram/raw/master/img/screenshot.png"
					alt="mini game"
				/>
				<h4>소개</h4>
				<p>
					인스타그램의 로그인 화면과 피드 화면을 반응형 웹으로 구현한
					프로젝트입니다. 전체 코드를 즉시실행함수(IIFE)로 감싸 모듈화를
					하였으며, 중점적으로 신경을 쓴 부분은 검색창에 키워드 입력 시 자동완성
					키워드 리스트의 등장, 댓글 추가와 삭제, 더블클릭 좋아요 시 등장하는
					하트 애니메이션입니다.{' '}
					<a
						href="https://intzzzero.github.io/westagram/"
						target="_blank"
						rel="noopener noreferrer"
					>
						링크로 이동
					</a>
					하여 체험하실 수 있습니다.
				</p>
				<h4>사용기술</h4>
				<p>
					- JavaScript(ES6)
					<br />
					- HTML5
					<br />
					- CSS3
					<br />
				</p>
			</div>
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

	div {
		width: 750px;
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;

		h3 {
			font-size: 24px;
			color: #313034;
			border-left: 5px solid #313034;
			padding-left: 15px;
		}
		h4 {
			font-size: 20px;
			color: #313034;
			border-left: 5px solid #313034;
			padding-left: 15px;
		}
		p {
			text-align: left;
			margin: 10px 0 20px 0;
			line-height: 28px;
			font-size: 16px;
			padding: 0 20px;
			color: #313034;
		}

		img {
			width: 100%;
			height: auto;
		}
	}
	iframe {
		border: 5px solid #313034;
		background-color: #f7d928;
		width: 750px;
		height: 455px;
		margin: 15px 0;
		padding: 15px;
	}

	h2 {
		width: 750px;
		font-size: 30px;
		padding-bottom: 10px;
		margin-bottom: 30px;
		border-bottom: 5px solid #313034;
	}
	.react {
		color: #276cac;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.angular {
		color: #d72729;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.vanilla {
		color: #f7d928;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.jsIcon {
			background-color: #f7d928;
			color: #fff;
		}
	}

	@media only screen and (max-width: 800px) {
		div,
		h2 {
			width: 560px;
		}
		iframe {
			width: 560px;
			height: 315px;
		}
	}
	@media only screen and (max-width: 400px) {
		div,
		h2 {
			width: 370px;
		}
		iframe {
			width: 370px;
			height: 200px;
			margin: 10px 0;
			padding: 5px;
		}
	}
`;

export default Project;
