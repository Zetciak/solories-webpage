//Imports
import Head from 'next/head';
import dynamic from 'next/dynamic';

//Components
const NavigationBar = dynamic(
	() => import('../components/navigationBar/navigationBar'),
	{ ssr: false }
);
import FirstSection from '../components/indexPage/firstSection/firstSection';
import AboutUs from '../components/indexPage/aboutUs/aboutUs';
import NftArts from '../components/indexPage/nftArts/nftArts';
import Utilities from '../components/indexPage/utilities/utilities';
import Roadmap from '../components/indexPage/roadmap/roadmap';
import Team from '../components/indexPage/team/team';
import Faq from '../components/indexPage/faq/faq';
import Footer from '../components/footer/footer';

//CSS
import useStyles from '../components/indexPage/indexStyle';

//Script
function HomePage() {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>Loopy Loris Tribe</title>
			</Head>
			<div className={classes.background}></div>
			<div className={classes.indexStripes}></div>
			<div className={classes.indexNoise}></div>
			<NavigationBar />
			<FirstSection />
			<AboutUs />
			<NftArts />
			<Utilities />
			<Roadmap />
			<Team />
			<Faq />
			<Footer />
		</div>
	);
}

export default HomePage;
