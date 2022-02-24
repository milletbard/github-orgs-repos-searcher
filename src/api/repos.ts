import axios from "axios";
import { FetchGithubOrgReposProps, Repositories } from "types";

export const fetchGithubOrgRepos = async ({
	org,
	sort,
	type,
	direction,
	page
}: FetchGithubOrgReposProps): Promise<Repositories[]> => {
	const response = await axios.get(`/orgs/${org}/repos`, {
		params: {
			sort,
			type,
			direction,
			page,
			per_page: 6
		}
	});

	return response.data;
};
