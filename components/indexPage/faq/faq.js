//Imports
import Image from 'next/image';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { useState } from 'react';

//Images
import arrow from '../../../public/images/indexPage/team/arrow.svg';
import title from '../../../public/images/indexPage/faq/title.png';

//CSS
import useStyles from './faqStyle';

const StyledAccordion = withStyles({
	root: {
		'&:before': {
			display: 'none',
		},

		background:
			'radial-gradient(59.18% 59.18% at 50.73% 100.25%, rgba(222, 190, 205, 0.2) 0%, rgba(241, 226, 220, 0.2) 100%), linear-gradient(156.26deg, rgba(255, 255, 255, 0.2) -4.88%, rgba(255, 255, 255, 0) 147.21%)',
		border: 'none',
		boxShadow: 'none',
		backdropFilter: 'blur(71.1989px)',
		borderRadius: '11.3918px 11.3918px 0px 0px',
		transition: 'all .3s',

		margin: '0px',
		marginBottom: '12px',

		'&$expanded': {
			margin: '0px',
			background:
				'radial-gradient(111.7% 14649.87% at 0.57% 100%, rgba(161, 238, 247, 0.3) 0%, rgba(254, 227, 150, 0.3) 70.31%, rgba(245, 228, 159, 0.3) 100%), linear-gradient(156.26deg, rgba(255, 255, 255, 0.3) -4.88%, rgba(255, 255, 255, 0) 147.21%)',
			marginBottom: '12px',
			border: 'none',
			borderRadius: '11.31px',
		},

		//460px
		['@media (max-width: 460px)']: {
			minHeight: '75px',
		},

		'&:hover': {
			opacity: '0.8',
		},
	},

	expanded: {},
})(Accordion);

//Script
function Faq() {
	//States
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const data = [
		{
			id: 'faq11',
			title: 'Wen Mint?',
			desc: '- The loopy lorries are cute primates that reside on a paradise island where love is embraced, they are dedicated to growing their family Mentaly, spiritually, and financially. Will your wallet be their new home?',
		},
		{
			id: 'faq22',
			title: 'What is the supply?',
			desc: '- TBA',
		},
		{
			id: 'faq33',
			title: 'Will there be a treasury?',
			desc: '- TBA',
		},
		{
			id: 'faq44',
			title: 'How to be Lorrie Whale?',
			desc: '- TBA',
		},
		{
			id: 'faq55',
			title: 'What are the Loving Lorises?',
			desc: '- TBA',
		},
		{
			id: 'faq66',
			title: 'How do I get whitelisted for pre-sale?',
			desc: '- TBA',
		},
		{
			id: 'faq77',
			title: 'How do I get OG aka be an early supporter?',
			desc: '- TBA',
		},
		{
			id: 'faq88',
			title: 'What rights do I have if I own one of these NFTs?',
			desc: '- TBA',
		},
	];

	//Style
	const classes = useStyles();

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
				<div className={classes.accordionMargin}>
					{data.map((accordion) => {
						const { id, title, desc } = accordion;
						return (
							<StyledAccordion
								expanded={expanded === id}
								key={id}
								onChange={handleChange(id)}
								square
							>
								<AccordionSummary
									className={classes.panelSummary}
									expandIcon={
										<div className={classes.expandArrow}>
											<Image
												src={arrow}
												alt=""
												width="100%"
												height="100%"
												layout="responsive"
												objectFit="contain"
											/>
										</div>
									}
								>
									<Typography className={classes.title}>
										{title}
									</Typography>
								</AccordionSummary>
								<AccordionDetails
									className={classes.panelDetails}
								>
									<Typography className={classes.desc}>
										{desc}
									</Typography>
								</AccordionDetails>
							</StyledAccordion>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Faq;
