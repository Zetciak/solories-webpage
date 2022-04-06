//Imports
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

//Images
import nft1 from '../../../public/images/indexPage/nftArts/nft1.png';

//CSS
import useStyles from './nftArtsStyle';

//Script
function NftArts() {
	//Style
	const classes = useStyles();
	return (
		<div className={classes.mainDiv}>
			<div className={classes.ograDiv}>
				<Marquee
					className={classes.nftShow}
					gradient={false}
					speed={50}
				>
					<div className={classes.oneNftDiv}>
						<Image
							src={nft1}
							alt=""
							layout="responsive"
							objectFit="contain"
							className={classes.oneNftDiva}
						/>
					</div>
					<div className={classes.oneNftDiv}>
						<Image
							src={nft1}
							alt=""
							layout="responsive"
							objectFit="contain"
							className={classes.oneNftDiva}
						/>
					</div>
					<div className={classes.oneNftDiv}>
						<Image
							src={nft1}
							alt=""
							layout="responsive"
							objectFit="contain"
							className={classes.oneNftDiva}
						/>
					</div>
					<div className={classes.oneNftDiv}>
						<Image
							src={nft1}
							alt=""
							layout="responsive"
							objectFit="contain"
							className={classes.oneNftDiva}
						/>
					</div>
					<div className={classes.oneNftDiv}>
						<Image
							src={nft1}
							alt=""
							layout="responsive"
							objectFit="contain"
							className={classes.oneNftDiva}
						/>
					</div>
					<div className={classes.oneNftDiv}>
						<Image
							src={nft1}
							alt=""
							layout="responsive"
							objectFit="contain"
							className={classes.oneNftDiva}
						/>
					</div>
					<div className={classes.oneNftDiv}>
						<Image
							src={nft1}
							alt=""
							layout="responsive"
							objectFit="contain"
							className={classes.oneNftDiva}
						/>
					</div>
				</Marquee>
			</div>
		</div>
	);
}

export default NftArts;
