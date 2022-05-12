//Imports
import { Typography, IconButton } from '@material-ui/core';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCallback, useRef } from 'react';
import 'swiper/css';
import ArrowForwardRounded from '@material-ui/icons/ArrowForwardRounded';

//Images
import arrow from '../../../public/images/indexPage/team/arrow.svg';
import title from '../../../public/images/indexPage/team/title.png';
import twitter from '../../../public/images/indexPage/team/twitter.svg';
import linkedin from '../../../public/images/indexPage/team/linkedin.svg';
import instagram from '../../../public/images/indexPage/team/instagram.svg';

//Avatars
import maciek1 from '../../../public/images/indexPage/team/avatars/maciek1.png';
import maciek2 from '../../../public/images/indexPage/team/avatars/maciek2.png';
import zetty1 from '../../../public/images/indexPage/team/avatars/zetty1.png';
import zetty2 from '../../../public/images/indexPage/team/avatars/zetty2.png';
import dawid1 from '../../../public/images/indexPage/team/avatars/dawid1.png';
import dawid2 from '../../../public/images/indexPage/team/avatars/dawid2.png';
import kacper1 from '../../../public/images/indexPage/team/avatars/kacper1.png';
import kacper2 from '../../../public/images/indexPage/team/avatars/kacper2.png';
import julian1 from '../../../public/images/indexPage/team/avatars/julian1.png';
import julian2 from '../../../public/images/indexPage/team/avatars/julian2.png';

//CSS
import useStyles from './teamStyle';

// Team members
let drawed = false;
const teamMembersList = new Array();
teamMembersList[1] = {
	image1: dawid1,
	image2: dawid2,
	name: 'Helsinki',
	role: 'Founder',
	linkedin: 'https://google.com',
	twitter: 'https://google.com',
	instagram: false,
};
teamMembersList[2] = {
	image1: kacper1,
	image2: kacper2,
	name: 'Craig Stole Luna',
	role: 'Founder',
	linkedin: 'https://google.com',
	twitter: 'https://google.com',
	instagram: false,
};
teamMembersList[3] = {
	image1: zetty1,
	image2: zetty2,
	name: 'Zetty',
	role: 'Developer',
	linkedin: false,
	twitter: 'https://google.com',
	instagram: false,
};
teamMembersList[4] = {
	image1: maciek1,
	image2: maciek2,
	name: 'skyliNe',
	role: 'Graphic Designer',
	linkedin: false,
	twitter: 'https://google.com',
	instagram: false,
};
teamMembersList[5] = {
	image1: julian1,
	image2: julian2,
	name: 'Juju',
	role: 'Community Manager',
	linkedin: false,
	twitter: 'https://google.com',
	instagram: 'https://google.com',
};
let teamMembers = [];

//Script
function Team() {
	//Style
	const classes = useStyles();

	//Team members
	if (drawed === false) {
		drawed = true;
		for (let i = 1; i < teamMembersList.length; i++) {
			teamMembers.push(
				<SwiperSlide className={classes.oneSlide} key={i}>
					<div className={classes.insideOneSlideOutside}>
						<div className={classes.insideOneSlide}>
							<div className={classes.bigImage}>
								<Image
									src={teamMembersList[i].image1}
									alt=""
									width="252px"
									height="252px"
									className={classes.bigImage}
									priority={true}
								/>
							</div>
							<div className={classes.smallImage}>
								<Image
									src={teamMembersList[i].image2}
									alt=""
									width="72px"
									height="72px"
									className={classes.smallImage}
									priority={true}
								/>
							</div>
							<div className={classes.firstLine}>
								<Typography className={classes.nameTypo}>
									{teamMembersList[i].name}
								</Typography>
								<div className={classes.teamLinks}>
									{teamMembersList[i].instagram ===
									false ? null : (
										<div className={classes.instagram}>
											<a
												href={
													teamMembersList[i].instagram
												}
												target="_blank"
												rel="noreferrer"
											>
												<Image
													src={instagram}
													alt=""
													width="100%"
													height="100%"
													layout="responsive"
													objectFit="contain"
												/>
											</a>
										</div>
									)}

									{teamMembersList[i].linkedin ===
									false ? null : (
										<div className={classes.linkedIn}>
											<a
												href={
													teamMembersList[i].linkedin
												}
												target="_blank"
												rel="noreferrer"
											>
												<Image
													src={linkedin}
													alt=""
													width="100%"
													height="100%"
													layout="responsive"
													objectFit="contain"
												/>
											</a>
										</div>
									)}

									{teamMembersList[i].twitter ===
									false ? null : (
										<div className={classes.twitter}>
											<a
												href={
													teamMembersList[i].twitter
												}
												target="_blank"
												rel="noreferrer"
											>
												<Image
													src={twitter}
													alt=""
													width="100%"
													height="100%"
													layout="responsive"
													objectFit="contain"
												/>
											</a>
										</div>
									)}
								</div>
							</div>
							<Typography className={classes.roleTypo}>
								{teamMembersList[i].role}
							</Typography>
						</div>
					</div>
				</SwiperSlide>
			);
		}
	}

	const sliderRef = useRef(null);

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	return (
		<div className={classes.mainDiv} id="teamScroll">
			<div className={classes.insideDivTitle}>
				<div className={classes.titleDiv}>
					<Image
						src={title}
						alt=""
						layout="responsive"
						objectFit="contain"
					/>
				</div>
			</div>
			<div className={classes.insideDiv}>
				<div className={classes.allSlides}>
					<IconButton
						className={classes.arrowLeft}
						onClick={handlePrev}
					>
						<ArrowForwardRounded
							className={classes.arrowLeftIcon}
						/>
					</IconButton>
					<Swiper
						breakpoints={{
							300: {
								slidesPerView: 1,
							},
							1290: {
								slidesPerView: 3,
							},
						}}
						slidesPerView={3}
						spaceBetween={0}
						className={classes.sliderDiv}
						ref={sliderRef}
						loop={true}
					>
						{teamMembers}
					</Swiper>
					<IconButton
						className={classes.arrowRight}
						onClick={handleNext}
					>
						<ArrowForwardRounded
							className={classes.arrowRightIcon}
						/>
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Team;
