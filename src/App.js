import React, { useEffect} from 'react';
import { BrowserRouter, Routes, Route , Outlet, useLocation } from "react-router-dom"; //, Outlet, Link

import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import NoPage from "./pages/NoPage/nopage";
import styles from "./App.module.css";

import Header from "./pages/default/Header/header";
import Footer from "./pages/default/Footer/footer";

import main from "./assets/main.json";


function App() {
    const hiddenPaths = ["/login"];
    return (
        <BrowserRouter>
            <HeaderLayout hiddenPaths={hiddenPaths} />
            <div className={styles.layout}>
                <Routes>
                    <Route exact path="/login" element={<Page title={"Signin to " + main.name} component={<Login />}></Page>} />
                    <Route exact path="*" element={<Page title="Page not found" component={<NoPage />}></Page>} />
                    <Route exact path="/" element={<Page title="Welcome" component={<Home />}></Page>} index />
                </Routes>
            </div>
            <FooterLayout hiddenPaths={hiddenPaths} />
        </BrowserRouter>
    );
}

const Page = (props) => {
    useEffect(() => {
      document.title = ( props.title ? props.title + " · "  : "" ) + main.name;
    }, [props.title]);
    return(
        <>{props.component}</>
    );
  };

const HeaderLayout = ({ hiddenPaths = [] }) => {
    const { pathname } = useLocation();
    return (
        <>
            {!hiddenPaths.includes(pathname) && <Header />}
            <Outlet />
        </>
    );
}
const FooterLayout = ({ hiddenPaths = [] }) => {
    const { pathname } = useLocation();
    return (
        <>
            {!hiddenPaths.includes(pathname) && <Footer />}
            <Outlet />
        </>
    );
}

export default App;