import React from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme } from "./styles/theme";
import Helmet from "react-helmet";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

const App = () => {
    const themeStyle = lightTheme;
    return (
        <ThemeProvider theme={themeStyle}>
            <Helmet>
                <title>Form Component</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700;900&family=Ubuntu:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyle />
            <Layout>
                <Switch>
                    <Route exact path={"/"}>
                        <Redirect to="/signin" />
                    </Route>
                    <Route exact path={"/signin"}>
                        <SignIn />
                    </Route>
                    <Route exact path={"/register"}>
                        <Register />
                    </Route>
                </Switch>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
