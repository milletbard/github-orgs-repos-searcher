import { FC } from "react";
import { Main } from "./Main";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Layout: FC = () => {
	return (
		<>
			<Header />

			<Main>
				<Outlet />
			</Main>

			<ScrollToTop smooth />
		</>
	);
};

export { Layout };
