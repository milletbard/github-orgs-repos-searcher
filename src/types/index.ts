export type Repositories = {
	id: number;
	name: string;
	full_name: string;
	private: boolean;
	html_url: string;
	description: string;
	fork: boolean;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	homepage: string;
	language: null | string;
	license: null | {
		name: string;
	};
	topics: null | string[];
	visibility: string;
	watchers_count: number;
	forks: number;
};
