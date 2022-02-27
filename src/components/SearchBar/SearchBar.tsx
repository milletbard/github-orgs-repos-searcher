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

interface SearchBarProps {
	placeholder?: string;
	value?: string | undefined;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}

const SearchBar: FC<SearchBarProps> = ({
	placeholder = "Search",
	value = "",
	onKeyUp,
	onChange
}) => {
	return (
		<SearchBarWrapper>
			<StyleInput
				value={value}
				placeholder={placeholder}
				onKeyUp={onKeyUp}
				onChange={onChange}
			/>
		</SearchBarWrapper>
	);
};

export { SearchBar };
