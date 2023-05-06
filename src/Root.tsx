import {Composition} from 'remotion';
import {ThePersuaders} from "./ThePersuaders";
import "./fonts.css"
import {projects} from "./projects";

function getProjectInformations(projectName:string) {
	const {leftPersona, rightPersona, parts} = projects[projectName];
	return {leftPersona, rightPersona, parts};
}

export const RemotionRoot: React.FC = () => {
	const fps = 30;
	const durationInFrames = fps * 69.1;

	const projectInformations = getProjectInformations("demo");

	return (
		<>
			<Composition
				id="ThePersuaders"
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={durationInFrames}
				component={ThePersuaders}
				defaultProps={projectInformations}
			/>
		</>
	);
};
