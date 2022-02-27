import { fetchGithubOrgRepos } from "api";
import useSWRInfinite from "swr/infinite";
import { Repositories } from "types";

const PAGE_SIZE = 50;

export interface GithubOrgReposFetcherProps {
	org: string;
	sort?: "created" | "updated" | "pushed" | "full_name";
	type?:
		| "all"
		| "public"
		| "private"
		| "forks"
		| "sources"
		| "member"
		| "internal";
	direction?: "asc" | "desc";
	page?: number;
	per_page?: number;
}

const useGithubOrgReposFetcher = ({
	org,
	sort,
	type,
	direction
}: GithubOrgReposFetcherProps): {
	repositoryList: Repositories[];
	isLoadingMore: boolean;
	isValidating: boolean;
	isEmpty: boolean;
	error: Error;
	isReachingEnd: boolean;
	loadMore: () => void;
	revalidate: () => void;
} => {
	const getKey = (pageIndex: number, previousPageData: Repositories[][]) => {
		// reached the end
		if (previousPageData && !previousPageData.length) return null;

		return {
			org,
			sort,
			type,
			direction,
			per_page: PAGE_SIZE,
			page: pageIndex + 1
		};
	};

	const {
		data = [],
		error,
		mutate,
		size,
		setSize,
		isValidating
	} = useSWRInfinite(getKey, fetchGithubOrgRepos, {
		revalidateFirstPage: false
	});

	const isLoadingInitialData = !data && !error;

	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === "undefined");

	const repositoryList = data
		? data.reduce((arr, cur) => [...arr, ...cur], [])
		: [];

	const isEmpty = data?.[0]?.length === 0;

	const isReachingEnd =
		isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

	const loadMore = () => {
		setSize(prev => prev + 1);
	};

	const revalidate = () => {
		mutate();
	};

	return {
		repositoryList,
		isLoadingMore,
		isValidating,
		isEmpty,
		error,
		isReachingEnd,
		loadMore,
		revalidate
	};
};

export { useGithubOrgReposFetcher };
