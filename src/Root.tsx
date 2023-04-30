import {Composition} from 'remotion';
import {ThePersuaders} from "./ThePersuaders";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	const fps = 30;
	const durationInFrames = fps * 68;

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
