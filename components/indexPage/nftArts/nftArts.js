//Imports
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

//Images
import frame from '../../../public/images/indexPage/nftArts/frame.png';
import nft1 from '../../../public/images/indexPage/nftArts/nft1.png';
import nft2 from '../../../public/images/indexPage/nftArts/nft2.png';
import nft3 from '../../../public/images/indexPage/nftArts/nft3.png';
import nft4 from '../../../public/images/indexPage/nftArts/nft4.png';
import nft5 from '../../../public/images/indexPage/nftArts/nft5.png';

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
						<div className={classes.nftImage}>
							<Image
								src={nft1}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
						<div className={classes.frameImage}>
							<Image
								src={frame}
								alt=""
								layout="fill"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className={classes.oneNftDiv}>
						<div className={classes.nftImage}>
							<Image
								src={nft2}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
						<div className={classes.frameImage}>
							<Image
								src={frame}
								alt=""
								layout="fill"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className={classes.oneNftDiv}>
						<div className={classes.nftImage}>
							<Image
								src={nft3}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
						<div className={classes.frameImage}>
							<Image
								src={frame}
								alt=""
								layout="fill"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className={classes.oneNftDiv}>
						<div className={classes.nftImage}>
							<Image
								src={nft4}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
						<div className={classes.frameImage}>
							<Image
								src={frame}
								alt=""
								layout="fill"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className={classes.oneNftDiv}>
						<div className={classes.nftImage}>
							<Image
								src={nft5}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
						<div className={classes.frameImage}>
							<Image
								src={frame}
								alt=""
								layout="fill"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className={classes.oneNftDiv}>
						<div className={classes.nftImage}>
							<Image
								src={nft1}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
						<div className={classes.frameImage}>
							<Image
								src={frame}
								alt=""
								layout="fill"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className={classes.oneNftDiv}>
						<div className={classes.nftImage}>
							<Image
								src={nft2}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
						<div className={classes.frameImage}>
							<Image
								src={frame}
								alt=""
								layout="fill"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className={classes.oneNftDiv}>
						<div className={classes.nftImage}>
							<Image
								src={nft3}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
						<div className={classes.frameImage}>
							<Image
								src={frame}
								alt=""
								layout="fill"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className={classes.oneNftDiv}>
						<div className={classes.nftImage}>
							<Image
								src={nft4}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
						<div className={classes.frameImage}>
							<Image
								src={frame}
								alt=""
								layout="fill"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className={classes.oneNftDiv}>
						<div className={classes.nftImage}>
							<Image
								src={nft5}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
						<div className={classes.frameImage}>
							<Image
								src={frame}
								alt=""
								layout="fill"
								objectFit="contain"
								quality="100"
								priority={true}
							/>
						</div>
					</div>
				</Marquee>
			</div>
		</div>
	);
}

export default NftArts;
