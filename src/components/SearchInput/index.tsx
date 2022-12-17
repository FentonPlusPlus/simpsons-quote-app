import "./index.css";
import { ChangeEventHandler } from "react";

type Props = {
	handleChange: ChangeEventHandler<HTMLInputElement>;
}
export function SearchInput(props: Props) {
	const { handleChange } = props;

	return <input className='search-input' placeholder="...d'oh!" onChange={handleChange}></input>;
}

export default SearchInput;
