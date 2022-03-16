import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeConsumer } from "styled-components";
import { GlobalStyle, darkTheme } from "globalStyle";

import { Layout } from "components";
import { Home } from "pages";
import "react-dropdown/style.css";

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<ThemeConsumer>{theme => <GlobalStyle theme={theme} />}</ThemeConsumer>

				<Router>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route path={`:org`} element={<Home />} />
						</Route>

						<Route path="*" element={<Layout />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
};

export default App;
