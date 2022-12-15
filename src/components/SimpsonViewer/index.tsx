import "./index.css";

type SimpsonDetails = {
	name: string;
	image: string;
};

export function SimpsonViewer(props: SimpsonDetails) {
	const { name, image } = props;

	return (
		<div className='simpson-card'>
			<h1 className='simpson-name'>{name}</h1>
			<img className='simpson-profile' src={image} alt='simpson-profile'></img>
		</div>
	);
}

export default SimpsonViewer;
