import { useState, useEffect } from "react";
import "./App.css";
import SearchInput from "../components/SearchInput/index";
import SimpsonViewer from "../components/SimpsonViewer/index";
import QuoteList from "../components/QuoteList/index";
// import { tSImportEqualsDeclaration } from '@babel/types';

type SimpsonCharacter = {
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

	useEffect(() => {
		async function getSimpson() {
			const response = await fetch(
				"https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=homer",
				{
					headers: {
						Accept: "application/json",
					},
				}
			);
			// console.log("Response is ", response);
			const data = await response.json();
			// console.log("data is ", data);
			let array = [];
			for (let i = 0; i < data.length; i++) {
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
	}, []);

	return (
		<div className='App'>
			<div className='navbar'>
				<h1 className='title'>Simpson's Quote App</h1>
			</div>
			<div className='container'>
				<SearchInput></SearchInput>
				<SimpsonViewer
					name={simpson.name}
					image={simpson.image}
				></SimpsonViewer>
				<QuoteList quotes={simpson.quotes}></QuoteList>
			</div>
		</div>
	);
}

export default App;
