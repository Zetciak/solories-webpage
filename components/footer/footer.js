//Imports
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';

//Images
import discordLogo from '../../public/images/navigation/discord.svg';
import twitterLogo from '../../public/images/navigation/twitter.svg';
import mailLogo from '../../public/images/navigation/mail.svg';

//CSS
import useStyles from './footerStyle';

//Script
function Footer() {
	//Style
	const classes = useStyles();
	return (
		<>
			<div className={classes.mainDiv}>
				<div className={classes.insideDiv}>
					<div className={classes.stripeDiv}></div>
					<Typography className={classes.leftTitle}>
						@SOLORIES2022, ALL RIGHTS RESERVED.
					</Typography>
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
				</div>
			</div>
		</>
	);
}

export default Footer;
