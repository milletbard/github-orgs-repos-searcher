import { FC } from "react";
import styled, { useTheme } from "styled-components";
import { GoStar } from "react-icons/go";
import { LanguageIcon } from "./LanguageIcon";

const numberFormatter = new Intl.NumberFormat("en", { notation: "compact" });

const Card = styled.div`
	background-color: ${props => props.theme.colorDark50};
	border-color: ${props => props.theme.colorDark20};
	border-style: solid;
	border-width: 1px;
	border-radius: 6px;
	padding: 16px;
	margin-top: 8px;
	min-height: 108px;
`;

const CardTitle = styled.a`
	color: ${props => props.theme.colorBlue50};
	display: inline;
	font-weight: 600;
	line-height: 1.25;
	text-decoration: none;
	margin-right: 4px;
	&:hover {
		text-decoration: underline;
	}

	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

const CardDescription = styled.div`
	color: ${props => props.theme.colorPrimary50};
	margin-top: 4px;
`;

const CardTagSpan = styled.span`
	white-space: nowrap;
	display: inline-block;
	padding: 0 8px;
	font-weight: 500;
	font-size: 14px;
	line-height: 22x;
	margin: 4px 2px 4px 2px;
	border: 0.8px solid transparent;
	border-color: ${({ theme }) => theme.colorPrimary50};
	border-radius: 2em;
	line-height: 22px;
	color: ${({ theme }) => theme.colorPrimary50};
	background-color: ${({ theme }) => theme.colorDark50};
`;

const CardDetail = styled.p`
	color: ${props => props.theme.colorPrimary50};
	display: flex;
	align-item: center;
	font-size: 12px;
	margin-top: 8px;
	margin-bottom: 0;
`;

const CardDetailItem = styled.span`
	color: ${props => props.theme.colorPrimary50};
	display: inline-flex;
	font-size: 12px;
	align-items: center;
	margin-right: 16px;
`;

const RepositoryCard: FC = () => {
	return (
		<Card>
			<div>
				<div>
					<CardTitle href="href" target="_blank">
						CardTitle
					</CardTitle>
					<CardTagSpan>public</CardTagSpan>
				</div>

				<CardDescription>CardDescription</CardDescription>

				<CardDescription>
					<CardTagSpan>tag</CardTagSpan>
					<CardTagSpan>tag</CardTagSpan>
					<CardTagSpan>tag</CardTagSpan>
				</CardDescription>

				<CardDetail>
					<CardDetailItem>
						<LanguageIcon />
						TypeScript
					</CardDetailItem>

					<CardDetailItem>
						<GoStar style={{ marginRight: "4px" }} />

						{numberFormatter.format(1500)}
					</CardDetailItem>
				</CardDetail>
			</div>
		</Card>
	);
};

export { RepositoryCard, Card };
