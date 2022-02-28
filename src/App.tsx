import { FC } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeConsumer } from "styled-components";
import { GlobalStyle, darkTheme } from "globalStyle";

import { Layout } from "components";
import { Home } from "pages";
import "react-dropdown/style.css";
import { BASE_URL } from "./def";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.get["Accept"] = "application/vnd.github.v3+json";

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
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
};

export default App;
