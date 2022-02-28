import { ChangeEvent, FC, useLayoutEffect, useState } from "react";
import { useDebounce, useHasMounted } from "hooks";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { SearchBar } from "components/SearchBar";
import { HeaderGithubIcon } from "./HeaderGithubIcon";

const HeaderWrapper = styled.div`
	background-color: ${props => props.theme.colorDark50};
	color: ${props => props.theme.colorPrimary100};
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 1.5;
	padding: 16px;
`;

const HeaderContent = styled.div`
	width: 100%;
	max-width: 768px;
`;

const Header: FC = () => {
	const navigate = useNavigate();
	const { org = "" } = useParams();
	const hasMounted = useHasMounted();

	const [searchValue, setSearchValue] = useState(org);
	const debouncedSearchValue = useDebounce(searchValue, 800);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	useLayoutEffect(() => {
		navigate(`/${debouncedSearchValue}`);
	}, [debouncedSearchValue, navigate]);

	return (
		<>
			<HeaderWrapper>
				<HeaderContent>
					<SearchBar
						placeholder={
							!hasMounted.current ? "First search here..." : undefined
						}
						value={searchValue}
						onChange={handleInputChange}
					/>
				</HeaderContent>

				<HeaderGithubIcon />
			</HeaderWrapper>
		</>
	);
};

export { Header };
