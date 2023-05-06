import {Composition} from 'remotion';
import {ThePersuaders} from "./ThePersuaders";
import "./fonts.css"

export const RemotionRoot: React.FC = () => {
	const fps = 30;
	const durationInFrames = fps * 69.1;

	return (
		<>
			<Composition
				id="ThePersuaders"
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={durationInFrames}
				component={ThePersuaders}
			/>
		</>
	);
};
