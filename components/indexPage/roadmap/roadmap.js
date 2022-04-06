//Imports
import { Typography } from '@material-ui/core';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import 'swiper/css';

//Images
import title from '../../../public/images/indexPage/roadmap/title.png';
import earthquake from '../../../public/images/indexPage/roadmap/earthquake.png';
import paradise from '../../../public/images/indexPage/roadmap/paradise.png';
import traveling from '../../../public/images/indexPage/roadmap/traveling.png';
import filledCircle from '../../../public/images/indexPage/roadmap/filledCircle.png';
import unfilledCircle from '../../../public/images/indexPage/roadmap/unfilledCircle.png';
import filledLine from '../../../public/images/indexPage/roadmap/filledLine.png';
import unfilledLine from '../../../public/images/indexPage/roadmap/unfilledLine.png';
import rotating from '../../../public/images/indexPage/roadmap/rotating.png';
import checked from '../../../public/images/indexPage/roadmap/checked.png';

//CSS
import useStyles from './roadmapStyle';

//Roadmap
const roadmapElements = new Array();
roadmapElements[1] = new Array();
roadmapElements[2] = new Array();
roadmapElements[3] = new Array();

roadmapElements[1][1] = { text: 'MARKET RESEARCH', done: true };
roadmapElements[1][2] = { text: 'TEAM FORMATION', done: true };
roadmapElements[1][3] = { text: 'CREATING MARKETING STRATEGY', done: true };
roadmapElements[1][4] = { text: 'COMMUNITY BUILDING', done: true };
roadmapElements[1][5] = {
	text: 'DEVELOPING LASTING RELATIONSHIPS',
	done: true,
};

roadmapElements[2][1] = {
	text: 'DETERMINATION OF MINT DETAILS WITH THE COMMUNITY',
	done: false,
};
roadmapElements[2][2] = { text: 'MINT PHASE', done: false };
roadmapElements[2][3] = { text: 'MARKETPLACE LISTING', done: false };
roadmapElements[2][4] = { text: 'RARITY CALCULATOR', done: false };
roadmapElements[2][5] = {
	text: 'DONATING TO SLOW LORIS CHARITY',
	done: false,
};

roadmapElements[3][1] = { text: 'TREASURY WALLET', done: false };
roadmapElements[3][2] = {
	text: 'CONSTANT REOCCURRING GIVEAWAYS',
	done: false,
};
roadmapElements[3][3] = {
	text: 'ALLOW HOLDERS TO REDEEM THEIR IRL LOOTBOX',
	done: false,
};
roadmapElements[3][4] = {
	text: 'HOLDERS WILL HAVE EXCLUSIVE ACCESS TO OUR 2ND GENERATION AIRDROP',
	done: false,
};
roadmapElements[3][5] = { text: 'ROADMAP 2.0 ANNOUNCEMENT', done: false };

//Script
function Roadmap() {
	//Rotation
	//Timer
	const [rotation, setRotation] = useState();

	let interval;

	const startTimer = () => {
		const countDownDate = new Date('April 7, 2100 23:59:59').getTime();
		interval = setInterval(() => {
			const distance = countDownDate - new Date().getTime();
			let test = distance / 7;
			setRotation(test - test - test);
		});
	};

	useEffect(() => {
		startTimer();
	});

	//Style
	const classes = useStyles();

	//Roadmap
	let roadmapPhase1 = [];
	let roadmapPhase2 = [];
	let roadmapPhase3 = [];
	for (let i = 1; i < roadmapElements[1].length; i++) {
		if (roadmapElements[1][i].done === true) {
			roadmapPhase1.push(
				<div className={classes.roadmapElementsOne} key={i}>
					<div className={classes.roadmapElementsCircle}>
						<Image
							src={checked}
							alt=""
							layout="responsive"
							objectFit="contain"
						/>
					</div>
					<Typography
						className={`${classes.roadmapElementsText} swiper-no-swiping`}
					>
						{roadmapElements[1][i].text}
					</Typography>
				</div>
			);
		} else {
			roadmapPhase1.push(
				<div className={classes.roadmapElementsOne} key={i}>
					<div
						className={classes.roadmapElementsCircle}
						style={{
							transform: `rotate(${rotation}deg)`,
						}}
					>
						<Image
							src={rotating}
							alt=""
							layout="responsive"
							objectFit="contain"
						/>
					</div>
					<Typography
						className={`${classes.roadmapElementsText} swiper-no-swiping`}
					>
						{roadmapElements[1][i].text}
					</Typography>
				</div>
			);
		}
	}

	for (let i = 1; i < roadmapElements[2].length; i++) {
		if (roadmapElements[2][i].done === true) {
			roadmapPhase2.push(
				<div className={classes.roadmapElementsOne} key={i}>
					<div className={classes.roadmapElementsCircle}>
						<Image
							src={checked}
							alt=""
							layout="responsive"
							objectFit="contain"
						/>
					</div>
					<Typography
						className={`${classes.roadmapElementsText} swiper-no-swiping`}
					>
						{roadmapElements[2][i].text}
					</Typography>
				</div>
			);
		} else {
			roadmapPhase2.push(
				<div className={classes.roadmapElementsOne} key={i}>
					<div
						className={classes.roadmapElementsCircle}
						style={{
							transform: `rotate(${rotation}deg)`,
						}}
					>
						<Image
							src={rotating}
							alt=""
							layout="responsive"
							objectFit="contain"
						/>
					</div>
					<Typography
						className={`${classes.roadmapElementsText} swiper-no-swiping`}
					>
						{roadmapElements[2][i].text}
					</Typography>
				</div>
			);
		}
	}

	for (let i = 1; i < roadmapElements[3].length; i++) {
		if (roadmapElements[3][i].done === true) {
			roadmapPhase3.push(
				<div className={classes.roadmapElementsOne} key={i}>
					<div className={classes.roadmapElementsCircle}>
						<Image
							src={checked}
							alt=""
							layout="responsive"
							objectFit="contain"
						/>
					</div>
					<Typography
						className={`${classes.roadmapElementsText} swiper-no-swiping`}
					>
						{roadmapElements[3][i].text}
					</Typography>
				</div>
			);
		} else {
			roadmapPhase3.push(
				<div className={classes.roadmapElementsOne} key={i}>
					<div
						className={classes.roadmapElementsCircle}
						style={{
							transform: `rotate(${rotation}deg)`,
						}}
					>
						<Image
							src={rotating}
							alt=""
							layout="responsive"
							objectFit="contain"
						/>
					</div>
					<Typography
						className={`${classes.roadmapElementsText} swiper-no-swiping`}
					>
						{roadmapElements[3][i].text}
					</Typography>
				</div>
			);
		}
	}

	return (
		<div className={classes.mainDiv}>
			<div className={classes.insideDiv}>
				<div className={classes.titleDiv}>
					<Image
						src={title}
						alt=""
						layout="responsive"
						objectFit="contain"
					/>
				</div>
				<Typography className={classes.mainDesc}>
					Follow along the Loopy Lorries&apos; journey to becoming one
					of the most joyful Blue-Chip Luna NFT projects.
				</Typography>
				<Swiper
					slidesPerView={3}
					spaceBetween={0}
					className={classes.sliderDiv}
				>
					<SwiperSlide className={classes.oneSlide}>
						<div className={classes.slide1Title}>
							<Image
								src={earthquake}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<div className={classes.progressDiv}>
							<div className={classes.circleDiv}>
								<Image
									src={filledCircle}
									alt=""
									layout="responsive"
									objectFit="contain"
								/>
							</div>
							<div className={classes.lineDiv}>
								<Image
									src={filledLine}
									alt=""
									layout="responsive"
									objectFit="contain"
								/>
							</div>
						</div>
						<div className={classes.roadmapElements}>
							{roadmapPhase1}
						</div>
					</SwiperSlide>
					<SwiperSlide className={classes.oneSlide}>
						<div className={classes.slide2Title}>
							<Image
								src={traveling}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<div className={classes.progressDiv}>
							<div className={classes.circleDiv}>
								<Image
									src={filledCircle}
									alt=""
									layout="responsive"
									objectFit="contain"
								/>
							</div>
							<div className={classes.lineDiv}>
								<Image
									src={unfilledLine}
									alt=""
									layout="responsive"
									objectFit="contain"
								/>
							</div>
						</div>
						<div className={classes.roadmapElements}>
							{roadmapPhase2}
						</div>
					</SwiperSlide>
					<SwiperSlide className={classes.oneSlide}>
						<div className={classes.slide3Title}>
							<Image
								src={paradise}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<div className={classes.progressDiv}>
							<div className={classes.circleDiv}>
								<Image
									src={unfilledCircle}
									alt=""
									layout="responsive"
									objectFit="contain"
								/>
							</div>
						</div>
						<div className={classes.roadmapElements}>
							{roadmapPhase3}
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default Roadmap;
