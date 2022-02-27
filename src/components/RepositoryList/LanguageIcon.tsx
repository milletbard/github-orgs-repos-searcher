import { FC } from "react";
import styled, { useTheme } from "styled-components";
import { IThemeType } from "globalStyle";
import colors from "github-colors";

const CircleSpan = styled.span`
	top: 1px;
	display: inline-block;
	width: 12px;
	height: 12px;
	border: 1px solid gray;
	border-radius: 50%;
	margin-right: 4px;
`;

interface LanguageIconProps {
	language: null | string;
}
const LanguageIcon: FC<LanguageIconProps> = ({ language }) => {
	const theme: IThemeType = useTheme();
	const { color = theme.colorDark20 } = colors.get(language ?? "") ?? {};

	return <CircleSpan style={{ backgroundColor: color }} />;
};

export { LanguageIcon };
