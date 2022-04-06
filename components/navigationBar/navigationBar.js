//Imports
import { AppBar, Toolbar } from '@material-ui/core';
import Image from 'next/image';
import { Link } from 'react-scroll';

//Images
import logo from '../../public/images/navigation/logo.png';
import discordLogo from '../../public/images/navigation/discord.svg';
import twitterLogo from '../../public/images/navigation/twitter.svg';
import mailLogo from '../../public/images/navigation/mail.svg';

//CSS
import useStyles from './navigationBarStyle';

//Script
function NavigationBar() {
	//Style
	const classes = useStyles();
	return (
		<>
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
								<Link to="overviewScroll" smooth={true}>
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
								<Link
									to="blogScroll"
									smooth={true}
									disabled={true}
								>
									<div className={classes.navDisabled}>
										Blog
									</div>
								</Link>
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
									href="mailto:hello@loopyloristribe.com"
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={classes.rightElementsElement}
									>
										<Image
											src={mailLogo}
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
