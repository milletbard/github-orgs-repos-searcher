import { FC, MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

const Button = styled.button`
	width: 100%;
	padding: 12px;
	margin-top: 20px;
	font-weight: 600;
	color: ${props => props.theme.colorPrimary50};
	background: ${props => props.theme.colorDark50};
	border: 1px solid ${props => props.theme.colorDark20};
	border-radius: 6px;
	cursor: pointer;

	&:hover {
		background: ${props => props.theme.colorDark20};
	}
`;

interface RepositoryButtonProps {
	loading: boolean;
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const RepositoryRevalidateButton: FC<RepositoryButtonProps> = ({
	loading,
	children,
	onClick
}) => {
	return (
		<Button disabled={loading} onClick={onClick}>
			{loading ? "loading..." : children}
		</Button>
	);
};

export { RepositoryRevalidateButton };
