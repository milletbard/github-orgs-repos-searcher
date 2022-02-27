import { FC } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeConsumer } from "styled-components";
import { GlobalStyle, darkTheme } from "globalStyle";
import "react-dropdown/style.css";

import { Layout } from "components";
import { Home } from "pages";
import "react-dropdown/style.css";

axios.defaults.baseURL = `https://api.github.com`;
axios.defaults.headers.get["Accept"] = "application/vnd.github.v3+json";

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<ThemeConsumer>{theme => <GlobalStyle theme={theme} />}</ThemeConsumer>

				<Router>
					<Routes>
						<Route path="/github-orgs-repo-searcher" element={<Layout />}>
							<Route
								path="/github-orgs-repo-searcher/:org"
								element={<Home />}
							/>

						<Route path="/github-orgs-repo-searcher" element={<Home />} />
						</Route>
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
};

export default App;
