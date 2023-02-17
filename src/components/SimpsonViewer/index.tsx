import { SimpsonCharacter } from "../../App/App";
import "./index.css";
interface SimpsonDetailsProps {
	data: SimpsonCharacter;
}

export function SimpsonViewer(data: SimpsonDetailsProps) {
	// destructuring within destructuring 
	const { data: {name, image} } = data;

	return (
		<div className='simpson-card'>
			<h1 className='simpson-name'>{name}</h1>
			<img className='simpson-profile' src={image} alt='simpson-profile'></img>
		</div>
	);
}

export default SimpsonViewer;
