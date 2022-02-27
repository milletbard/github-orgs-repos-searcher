import axios from "axios";
import { GithubOrgReposFetcherProps } from "hooks";
import { Repositories } from "types";

export const fetchGithubOrgRepos = async ({
	org,
	sort,
	type,
	direction,
	per_page,
	page
}: GithubOrgReposFetcherProps): Promise<Repositories[]> => {
	const response = await axios
		.get(`/orgs/${org}/repos`, {
			params: {
				sort,
				type,
				direction,
				per_page,
				page
			}
		})
		.catch(error => {
			const { status } = error.response;

			switch (status) {
				case 403:
					throw new Error("API rate limit exceeded");

				case 404:
					throw new Error(`We couldn't find any repositories matching`);

				default:
					throw new Error(`oops something went wrong please try again later`);
			}
		});

	return response?.data ?? [];
};
