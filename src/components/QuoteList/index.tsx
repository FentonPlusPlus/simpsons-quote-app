import "./index.css";
import useCounter from '../../hooks/useCounter';

type QuoteDetails = {
	quotes: string[];
};

/* Quote List Problems
	- two buttons - 1 that goes up the array list, and one that goes down
	- because we are actively changing the number, we want a variable (count)
	- we either increment the count or decrement
	- so each button will change that variable and the quote displayed

	- array length
		- we will need to somewhere pass to that custom hook the array length
		- and IF the count exceeds that (if it increments), or preceeds (it it decrements) then it will be set to 0 or the top index
*/

export function QuoteList(props: QuoteDetails) {
	const { quotes } = props;
	const { count, increment, decrement } = useCounter(quotes.length);


	return (
		<div className='quote-container'>
			<button className='button' id="decrement" onClick={increment}></button>
			<p className='quote'>"{quotes[count]}"</p>
			<button className='button' id="increment" onClick={decrement}></button>
		</div>
	);
}

export default QuoteList;
