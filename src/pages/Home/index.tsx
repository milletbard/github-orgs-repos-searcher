import { FC } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { GithubOrgReposFetcherProps, useGithubOrgReposFetcher } from "hooks";

import Dropdown from "react-dropdown";
import {
	Empty,
	RepositoryRevalidateButton,
	RepositoryList,
	Skeletons
} from "components";

const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const FilterWrapper = styled.div`
	display: flex;
`;

const FILTER_TYPE = [
	"all",
	"public",
	"private",
	"forks",
	"sources",
	"member",
	"internal"
];

const FILTER_SORT = ["created", "updated", "pushed", "full_name"];

const FILTER_DIRECTION = ["asc", "desc"];

const Home: FC = () => {
	const { org = "" } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const routeParams = Object.fromEntries(searchParams);

	const type = routeParams.type as GithubOrgReposFetcherProps["type"];
	const sort = routeParams.sort as GithubOrgReposFetcherProps["sort"];
	const direction =
		routeParams.direction as GithubOrgReposFetcherProps["direction"];

	const {
		repositoryList,
		isLoadingMore,
		isValidating,
		isEmpty,
		isReachingEnd,
		error,
		loadMore,
		revalidate
	} = useGithubOrgReposFetcher({
		org,
		sort,
		type,
		direction
	});

	const handleFilterChange = (value: any) => {
		const params = { ...routeParams, ...value };

		setSearchParams(params);
	};

	const handleLoadMore = () => {
		if (!isLoadingMore) {
			loadMore();
		}
	};

	const handleRevalidate = () => {
		if (!isValidating) {
			revalidate();
		}
	};

	return (
		<>
			<Row>
				<h2 style={{ fontWeight: "400", fontSize: "16px" }}>
					List organization repositories
				</h2>

				<FilterWrapper>
					<Dropdown
						options={FILTER_TYPE}
						value={type}
						onChange={({ value }) => handleFilterChange({ type: value })}
						placeholder="Type"
					/>

					<Dropdown
						options={FILTER_SORT}
						value={sort}
						onChange={({ value }) => handleFilterChange({ sort: value })}
						placeholder="Sort"
					/>

					<Dropdown
						options={FILTER_DIRECTION}
						value={direction}
						onChange={({ value }) => handleFilterChange({ direction: value })}
						placeholder="Direction"
					/>
				</FilterWrapper>
			</Row>

			{!error && (
				<RepositoryList
					repositoryList={repositoryList}
					onLoadMore={handleLoadMore}
				/>
			)}

			{!isReachingEnd && isLoadingMore && !error && <Skeletons />}

			{(isEmpty || error) && <Empty error={error} />}

			{isReachingEnd && (
				<RepositoryRevalidateButton
					onClick={handleRevalidate}
					loading={isValidating}>
					Is reaching end, click me to revalidate.
				</RepositoryRevalidateButton>
			)}
		</>
	);
};

export { Home };
