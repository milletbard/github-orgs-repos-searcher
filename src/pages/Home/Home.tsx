import { FC, ChangeEventHandler, useState, useEffect } from "react";

import { useDebounce } from "use-debounce";
import { useGithubOrgReposFetcher, useHasMounted } from "hooks";

import Dropdown from "react-dropdown";
import { Header, Main } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { EmptyState } from "components/EmptyState";
import { RepositoryList } from "components/RepositoryList";
import { Skeletons } from "components/Skeleton";
import { RevalidateButton } from "components/RevalidateButton";

import styled from "styled-components";

const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const FilterWrapper = styled.div`
	display: flex;
`;

const Home: FC = () => {
	const [searchValue, setSearchValue] = useState("");
	const [debouncedSearchValue] = useDebounce(searchValue, 500);
	const hasMounted = useHasMounted();

	const { repositories, handleLoadMore } = useGithubOrgReposFetcher({
		org: "freeCodeCamp",
		sort: "created",
		type: "all",
		direction: "asc"
	});

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
		setSearchValue(event.target.value);
	};

	return (
		<>
			<Header>
				<SearchBar placeholder="search..." onChange={handleInputChange} />
			</Header>

			<Main>
				<Row>
					<h2 style={{ fontWeight: "400", fontSize: "16px" }}>
						List organization repositories
					</h2>

					<FilterWrapper>
						<Dropdown
							options={[
								"all",
								"public",
								"private",
								"forks",
								"sources",
								"member",
								"internal"
							]}
							placeholder="Type"
						/>
						<Dropdown
							options={["created", "updated", "pushed", "full_name"]}
							placeholder="Sort"
						/>
						<Dropdown options={["asc", "desc"]} placeholder="Direction" />
					</FilterWrapper>
				</Row>

				{!hasMounted.current && <h3>search repo here</h3>}

				<EmptyState />
				<RepositoryList />
				<Skeletons />
				<RevalidateButton />
			</Main>
		</>
	);
};

export { Home };
