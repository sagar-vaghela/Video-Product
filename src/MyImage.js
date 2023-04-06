import {
	AbsoluteFill,
	Img,
	Sequence,
	staticFile,
	interpolate,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';
const arr = [
	{
		name: 'explore1.png',
		from: 0 - 5,
		durationInFrames: 50 + 5,
	},
	{
		name: 'explore2.png',
		from: 50 - 5,
		durationInFrames: 50 + 5,
	},
	{
		name: 'explore3.png',
		from: 100 - 5,
		durationInFrames: 50 + 5,
	}
]
const MyImage = ({ durationInFrames }) => {
	const frame = useCurrentFrame();
	// const {durationInFrames} = useVideoConfig();

	return (
		<>
			{
				arr.map((e) => {
					// let dif = durationInFrames / arr.length;
					return (
						<>
							<Sequence from={e.from} durationInFrames={e.durationInFrames} name="image1">
								<AbsoluteFill>
									<Img
										src={staticFile(e.name)}
										alt="explore"
										style={{ opacity: `${ frame / e.durationInFrames }` }}
									/>
								</AbsoluteFill>
							</Sequence>
						</>
					)
				})
			}
		</>
	);
};

export default MyImage;
