import "./index.css";

type QuoteDetails = {
	quote: string;
};

export function QuoteList(props: QuoteDetails) {
	const { quote } = props;

	return (
		<div className='quote-container'>
			<p className='quote'>{quote}</p>
		</div>
	);
}

export default QuoteList;
