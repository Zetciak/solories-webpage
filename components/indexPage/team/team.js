//Imports
import { Typography } from '@material-ui/core';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCallback, useRef } from 'react';
import 'swiper/css';

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
	name: 'Dawid Ganowski',
	role: 'Founder',
	linkedin: 'https://pl.linkedin.com/in/dawid-ganowski-506b06205',
	twitter: 'https://twitter.com/DGanowski',
	instagram: false,
};
teamMembersList[2] = {
	image1: kacper1,
	image2: kacper2,
	name: 'Kacper Suszek',
	role: 'Founder',
	linkedin:
		'https://pl.linkedin.com/in/kacper-suszek-a08971233?trk=people_directory',
	twitter: 'https://twitter.com/MrSuszek',
	instagram: false,
};
teamMembersList[3] = {
	image1: zetty1,
	image2: zetty2,
	name: 'Marcel Mikosza',
	role: 'Developer',
	linkedin: false,
	twitter: 'https://twitter.com/Zetciak',
	instagram: false,
};
teamMembersList[4] = {
	image1: maciek1,
	image2: maciek2,
	name: 'Maciek Stradowski',
	role: 'Graphic Designer',
	linkedin: false,
	twitter: 'https://twitter.com/47maciek47',
	instagram: false,
};
teamMembersList[5] = {
	image1: julian1,
	image2: julian2,
	name: 'Julian Mills',
	role: 'Community Manager',
	linkedin: false,
	twitter: 'https://twitter.com/47maciek47',
	instagram: 'https://twitter.com/47maciek47',
};
let teamMembers = [];

//Script
function Team() {
	//Style
	const classes = useStyles();

	//Team members
	if (drawed === false) {
		drawed = true;
		console.log('drawing');
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
								/>
							</div>
							<div className={classes.smallImage}>
								<Image
									src={teamMembersList[i].image2}
									alt=""
									width="72px"
									height="72px"
									className={classes.smallImage}
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
		<div className={classes.mainDiv}>
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
					<div className={classes.arrowLeft} onClick={handlePrev}>
						<Image
							src={arrow}
							alt=""
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
					<Swiper
						slidesPerView={3}
						spaceBetween={0}
						className={classes.sliderDiv}
						ref={sliderRef}
						loop={true}
					>
						{teamMembers}
					</Swiper>
					<div className={classes.arrowRight} onClick={handleNext}>
						<Image
							src={arrow}
							alt=""
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;