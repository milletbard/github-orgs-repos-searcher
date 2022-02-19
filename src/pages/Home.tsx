import { FC } from "react";

import { Header, Main } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { EmptyState } from "components/EmptyState";
import { RepositoryList } from "components/RepositoryList";
import { Skeletons } from "components/Skeleton";
import { RevalidateButton } from "components/RevalidateButton";

const Home: FC = () => {
	return (
		<>
			<Header>
				<SearchBar placeholder="search..." />
			</Header>

			<Main>
				<h2 style={{ fontWeight: "400", fontSize: "16px" }}>
					List organization repositories
				</h2>

				<EmptyState />

				<RepositoryList />

				<Skeletons />

				<RevalidateButton />
			</Main>
		</>
	);
};

export { Home };
