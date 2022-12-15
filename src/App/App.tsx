import { useState, useEffect } from "react";
import "./App.css";
import SearchInput from "../components/SearchInput/index";
import SimpsonViewer from "../components/SimpsonViewer/index";
import QuoteList from "../components/QuoteList/index";
// import { tSImportEqualsDeclaration } from '@babel/types';

function App() {
	const [simpson, setSimpson] = useState({
		name: "",
		quote: "",
		// quotes: ['Eat my shorts', "Don't have a cow man"],
		image: "",
	});

	useEffect(() => {
		async function getSimpson() {
			const response = await fetch(
				"https://thesimpsonsquoteapi.glitch.me/quotes",
				{
					headers: {
						Accept: "application/json",
					},
				}
			);
			console.log("Response is ", response);
			const data = await response.json();
			console.log("data is ", data);
			setSimpson({
				...simpson,
				name: data[0].character,
				quote: data[0].quote,
				image: data[0].image,
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
				<QuoteList quote={simpson.quote}></QuoteList>
			</div>
		</div>
	);
}

export default App;
