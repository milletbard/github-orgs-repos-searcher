import { ChangeEventHandler, FC, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

import { SearchBar } from "components/SearchBar";

const EmptyStateWrapper = styled.div`
	padding: 32px;
	text-align: center;
`;

interface EmptyProps {
	error?: Error;
}

const Empty: FC<EmptyProps> = ({ error }) => {
	const [input, setInput] = useState("");

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
		setInput(event.target.value);
	};

	const handleInputKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			window.open(`https://github.com/search?q=${input}`, "github-searcher");
		}
	};

	return (
		<EmptyStateWrapper>
			<GoSearch style={{ fontSize: "36px" }} />

			<h3>{error?.message || `We couldn't find any repositories matching`}</h3>

			<SearchBar
				placeholder="Find code, projects, and people on GitHub..."
				value={input}
				onChange={handleInputChange}
				onKeyUp={handleInputKeyUp}
			/>
		</EmptyStateWrapper>
	);
};

export { Empty };
