import { fetchGithubOrgRepos } from "api";
import useSWRInfinite from "swr/infinite";
import { FetchGithubOrgReposProps, Repositories } from "types";

const useGithubOrgReposFetcher = ({
	org,
	sort,
	type,
	direction
}: FetchGithubOrgReposProps) => {
	const getKey = (pageIndex: number, previousPageData: Repositories[][]) => {
		if (previousPageData && !previousPageData.length) return null; // reached the end

		return { org, sort, type, direction, page: pageIndex + 1 };
	};

	const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
		getKey,
		fetchGithubOrgRepos,
		{
			initialSize: 1,
			revalidateFirstPage: false
		}
	);

	const repositories = data
		? data.reduce((arr, cur) => cur.concat(arr), [])
		: [];

	const handleLoadMore = () => {
		setSize(prev => prev + 1);
	};

	return { repositories, handleLoadMore };
};

export { useGithubOrgReposFetcher };
