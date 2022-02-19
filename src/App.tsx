import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider, ThemeConsumer } from "styled-components";
import { GlobalStyle, darkTheme } from "components/GlobalStyle";

import { Home } from "pages";

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<ThemeConsumer>{theme => <GlobalStyle theme={theme} />}</ThemeConsumer>

				<Router>
					<Routes>
						<Route path="/github-orgs-repo-searcher" element={<Home />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
};

export default App;
