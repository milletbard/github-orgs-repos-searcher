import { FC } from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

import { SearchBar } from "components/SearchBar";

const EmptyStateWrapper = styled.div`
	padding: 32px;
	text-align: center;
`;

const EmptyState: FC = () => {
	return (
		<EmptyStateWrapper>
			<GoSearch style={{ fontSize: "36px" }} />

			<h3>We couldn’t find any repositories matching</h3>

			<SearchBar placeholder="Find code, projects, and people on GitHub..." />
		</EmptyStateWrapper>
	);
};

export { EmptyState };