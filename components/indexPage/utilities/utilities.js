//Imports
import { Typography } from '@material-ui/core';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

//Images
import title from '../../../public/images/indexPage/utilities/title.png';
import utility1 from '../../../public/images/indexPage/utilities/utility1.png';
import utility2 from '../../../public/images/indexPage/utilities/utility2.png';
import utility3 from '../../../public/images/indexPage/utilities/utility3.png';
import utility4 from '../../../public/images/indexPage/utilities/utility4.png';
import utilityDot from '../../../public/images/indexPage/utilities/utilityDot.png';

//CSS
import useStyles from './utilitiesStyle';

//Script
function Utilities() {
	//Style
	const classes = useStyles();
	return (
		<div className={classes.mainDiv} id="utilitiesScroll">
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
					This is not your average jpeg pfp. Buying a Loris NFT grants
					you access to one of the best loving communities on Luna.
					Holders of Loris NFT get to use their NFT to reap rewards
					such as:
				</Typography>
				<div className={classes.lineDiv}></div>
				<Swiper
					slidesPerView={4}
					spaceBetween={0}
					className={classes.sliderDiv}
				>
					<SwiperSlide className={classes.oneSlide}>
						<div className={classes.utility1SlideImage}>
							<Image
								src={utility1}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<div className={classes.utilityDot}>
							<Image
								src={utilityDot}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<Typography
							className={`${classes.sliderDesc} swiper-no-swiping`}
						>
							Holders get access to be able to redeem a Free IRL
							Lootbox
						</Typography>
					</SwiperSlide>
					<SwiperSlide className={classes.oneSlide}>
						<div className={classes.utility2SlideImage}>
							<Image
								src={utility2}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<div className={classes.utilityDot}>
							<Image
								src={utilityDot}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<Typography
							className={`${classes.sliderDesc} swiper-no-swiping`}
						>
							Ownership and commercial usage rights given to the
							consumer over their NFT
						</Typography>
					</SwiperSlide>
					<SwiperSlide className={classes.oneSlide}>
						<div className={classes.utility3SlideImage}>
							<Image
								src={utility3}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<div className={classes.utilityDot}>
							<Image
								src={utilityDot}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<Typography
							className={`${classes.sliderDesc} swiper-no-swiping`}
						>
							Holders of v1 will be able to claim airdrop of our
							next collection (v2) and access presale
						</Typography>
					</SwiperSlide>
					<SwiperSlide className={classes.oneSlide}>
						<div className={classes.utility4SlideImage}>
							<Image
								src={utility4}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<div className={classes.utilityDot}>
							<Image
								src={utilityDot}
								alt=""
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<Typography
							className={`${classes.sliderDesc} swiper-no-swiping`}
						>
							Access to The Ultimate ALPHA Group with deep market
							researches on Terra NFT projects and weekly live
							chats hosted by NFT Experts.
						</Typography>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default Utilities;
