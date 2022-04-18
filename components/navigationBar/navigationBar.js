//Imports
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useState } from 'react';

//Images
import logo from '../../public/images/navigation/logo.png';
import discordLogo from '../../public/images/navigation/discord.svg';
import twitterLogo from '../../public/images/navigation/twitter.svg';
import mailLogo from '../../public/images/navigation/mail.svg';
import mediumLogo from '../../public/images/navigation/medium.svg';

import VolumeUpRounded from '@material-ui/icons/VolumeUpRounded';
import VolumeDownRounded from '@material-ui/icons/VolumeDownRounded';
import VolumeOffRounded from '@material-ui/icons/VolumeOffRounded';

//CSS
import useStyles from './navigationBarStyle';

//Script
function NavigationBar() {
	//Style
	const classes = useStyles();
	const [played, setPlayed] = useState(false);
	const [playing, setPlaying] = useState(0);

	function changePlay() {
		if (playing === 0) {
			document.getElementById('mySound').play();
			document.getElementById('mySound').volume = 0.5;
			setPlaying(1);
		} else if (playing === 1) {
			document.getElementById('mySound').volume = 1;
			setPlaying(2);
		} else if (playing === 2) {
			document.getElementById('mySound').volume = 0.5;
			document.getElementById('mySound').pause();
			setPlaying(0);
		}
	}

	if (played === false) {
		if (document.getElementById('mySound')) {
			setPlayed(true);
			document.getElementById('mySound').play();
			document.getElementById('mySound').volume = 0.5;
			setPlaying(1);
		}
	}

	return (
		<>
			<div className={classes.audioDiv}>
				<audio id="mySound" src="./music.mp3" loop></audio>
				<IconButton
					className={classes.audioButton}
					onClick={() => changePlay()}
				>
					{playing === 0 ? (
						<VolumeOffRounded className={classes.audioIcon} />
					) : playing === 1 ? (
						<VolumeDownRounded className={classes.audioIcon} />
					) : (
						<VolumeUpRounded className={classes.audioIcon} />
					)}
				</IconButton>
			</div>

			<AppBar className={classes.appBar} elevation={0}>
				<Toolbar className={classes.toolBar}>
					<div className={classes.appBarBg}></div>
					<div className={classes.logoDiv}>
						<Image
							src={logo}
							alt=""
							layout="responsive"
							objectFit="contain"
							priority
						/>
					</div>
					<div className={classes.centerElements}>
						<ul>
							<li>
								<Link
									to="overviewScroll"
									smooth={true}
									onClick={() => play()}
								>
									Overview
								</Link>
							</li>
							<div className={classes.navStripe}></div>
							<li>
								<Link to="aboutUsScroll" smooth={true}>
									About us
								</Link>
							</li>
							<div className={classes.navStripe}></div>
							<li>
								<Link to="utilitiesScroll" smooth={true}>
									Utilities
								</Link>
							</li>
							<div className={classes.navStripe}></div>
							<li>
								<Link to="roadmapScroll" smooth={true}>
									Roadmap
								</Link>
							</li>
							<div className={classes.navStripe}></div>
							<li>
								<Link to="teamScroll" smooth={true}>
									Team
								</Link>
							</li>
							<div className={classes.navStripe}></div>
							<li>
								<Link to="faqScroll" smooth={true}>
									FAQ
								</Link>
							</li>
							<div className={classes.navStripe}></div>
							<li>
								<a disabled={true}>
									<div className={classes.navDisabled}>
										Blog
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div className={classes.rightElements}>
						<ul>
							<li>
								<a
									href="https://discord.gg/JdxwwZfpXh"
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={classes.rightElementsElement}
									>
										<Image
											src={discordLogo}
											alt=""
											width="100%"
											height="100%"
											layout="responsive"
											objectFit="contain"
										/>
									</div>
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/LoopyLorisTribe"
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={classes.rightElementsElement}
									>
										<Image
											src={twitterLogo}
											alt=""
											width="100%"
											height="100%"
											layout="responsive"
											objectFit="contain"
										/>
									</div>
								</a>
							</li>
							<li>
								<a
									href="https://medium.com/@LoopyLorisTribe"
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={classes.rightElementsElement}
									>
										<Image
											src={mediumLogo}
											alt=""
											width="100%"
											height="100%"
											layout="responsive"
											objectFit="contain"
										/>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default NavigationBar;
