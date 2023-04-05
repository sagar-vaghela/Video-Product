import {
	AbsoluteFill,
	Img,
	Sequence,
	staticFile,
	interpolate,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';

const MyImage = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const opacity = interpolate(
		frame,
		[0, 20, durationInFrames - 20, durationInFrames],
		[0, 1, 0.6, 1]
	);
	return (
		<>
			<Sequence durationInFrames={33} name="image1">
				<AbsoluteFill>
					<Img
						src={staticFile('Explore1.png')}
						alt="dsfsdf"
					/>
				</AbsoluteFill>
			</Sequence>
			<Sequence from={33} durationInFrames={33} name="image2">
				<AbsoluteFill>
					<Img
						src={staticFile('explore2.png')}
						alt="asdfas"
					/>
				</AbsoluteFill>
			</Sequence>
			<Sequence from={66} durationInFrames={33} name="image3">
				<AbsoluteFill>
					<Img
						src={staticFile('explore3.png')}
						alt="dsfsfsdfdf"
					/>
				</AbsoluteFill>
			</Sequence>
		</>
	);
};

export default MyImage;
