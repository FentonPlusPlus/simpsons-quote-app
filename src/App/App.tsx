import React, { useState, useEffect, ChangeEvent } from "react";
import debounce from 'lodash.debounce';
import "./App.css";
import SearchInput from "../components/SearchInput/index";
import SimpsonViewer from "../components/SimpsonViewer/index";
import QuoteList from "../components/QuoteList/index";
import backgroundImage from '../spring.avif'
import { sortAndDeduplicateDiagnostics } from "typescript";

// do we export type here as it is passed down as props?
export type SimpsonCharacter = {
	name: string;
	image: string;
	quotes: string[];
}

function App() {
	const [simpson, setSimpson] = useState<SimpsonCharacter>({
		name: "",
		image: "",
		quotes: [],
	});
	const [searchText, setSearchText] = useState<string>('homer');
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError ] = useState(null);

	useEffect(() => {
		async function getSimpson() {
			setLoading(true);
			const response = await fetch(
				`https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=${searchText}`,
				{
					headers: {
						Accept: "application/json",
					},
				})
			const data = await response.json();
			// THIS ACTUALLY SLOWED DOWN THE APP RESPONSE BECAUSE OF ITS USE WITH DEBOUNCE
			// .then((response) => response.json()) 
			// .then((data) => {setData(data); setError(null)})
			// .catch((err) => {setError(err); })
			// .finally(() => setLoading(false));
			let array = [];
			for (let i = 0; i < data?.length; i++) {
				array.push(data[i].quote);
				// console.log(data[i].quote)
			}
			setSimpson({
				...simpson,
				name: data[0].character,
				image: data[0].image,
				quotes: array,
			});
		}
		getSimpson();
	}, [searchText]);

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e?.target?.value;
		setSearchText(newValue);
		console.log(newValue);
	}

	/** this function sets lodash.debounce to put a timer on the handleChange so it doesn't call the fetch (as its a dependency) too much */
	const debounceHandleChange = debounce(handleChange, 250);

	return (
		<div className='App'>
			<img src={backgroundImage} alt="springfield" className='background'></img>
			<div className='navbar'>
				<h1 className='title'>Simpson's Quote App</h1>
			</div>
			<div className='page'>
				<div className='card-container'>
					<SearchInput handleChange={debounceHandleChange}></SearchInput>
					<SimpsonViewer
						data={simpson}
					></SimpsonViewer>
					<QuoteList quotes={simpson.quotes}></QuoteList>
				</div>
			</div>
		</div>
	);
}

export default App;
