import { FC } from "react";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
	display: flex;
	min-height: 28px;
`;

const StyleInput = styled.input`
	width: 100%;
	background-color: ${props => props.theme.colorDark100};
	color: inherit;
	font-size: inherit;
	border: 1px solid;
	border-color: ${props => props.theme.colorDark20};
	box-shadow: none;
	border-radius: 6px;
	outline: none;
	padding: 5px 12px;

	&:focus {
		border-color: ${props => props.theme.colorBlue20};
	}
`;

interface ISearchBarProps {
	placeholder: string;
}

const SearchBar: FC<ISearchBarProps> = ({ placeholder }) => {
	return (
		<SearchBarWrapper>
			<StyleInput placeholder={placeholder} />
		</SearchBarWrapper>
	);
};

export { SearchBar };
