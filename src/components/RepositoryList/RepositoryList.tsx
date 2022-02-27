/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { Repositories } from "types";
import { useInView } from "hooks";

import { RepositoryCard } from "./RepositoryCard";

interface RepositoryListProps {
	repositoryList: Repositories[];
	onLoadMore: () => void;
}

const RepositoryList: FC<RepositoryListProps> = ({
	repositoryList,
	onLoadMore
}) => {
	const [inViewRef, isInView] = useInView();

	useEffect(() => {
		if (isInView) {
			onLoadMore();
		}
	}, [isInView]);

	return (
		<div>
			{repositoryList.map(repository => (
				<RepositoryCard key={String(repository.id)} repository={repository} />
			))}

			<div ref={inViewRef} />
		</div>
	);
};

export { RepositoryList };
