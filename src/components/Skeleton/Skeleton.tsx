import { FC } from "react";
import { useTheme } from "styled-components";
import { IThemeType } from "globalStyle";

import ContentLoader from "react-content-loader";
import { Card } from "components/RepositoryList";

const Skeleton: FC = () => {
	const theme: IThemeType = useTheme();

	return (
		<Card>
			<ContentLoader
				backgroundColor={theme.colorDark50}
				foregroundColor={theme.colorDark20}
				speed={2}
				width="100%"
				height={80}>
				<rect x="0" y="16" rx="3" ry="3" width="50%" height="8" />
				<rect x="0" y="32" rx="3" ry="3" width="50%" height="8" />
				<rect x="0" y="48" rx="3" ry="3" width="80%" height="8" />
				<rect x="0" y="64" rx="3" ry="3" width="80%" height="8" />
			</ContentLoader>
		</Card>
	);
};

const Skeletons: FC = () => {
	return (
		<>
			<Skeleton />
			<Skeleton />
			<Skeleton />
		</>
	);
};

export { Skeletons };
