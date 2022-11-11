import React from 'react';
import { useNavigate , Link } from 'react-router-dom';
import base from "../../assets/base.module.css";
import styles from"./nopage.module.css";

import Birdy from "./birdy.png";

function NoPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.title}>Page not found</div>
                <img src={Birdy} className={styles.birdy} alt="Page not found" />
                <div className={styles.navigation}>
                    <button className={base.button + " " + base.button_filled + " " + styles.button} onClick={() => navigate(-1)}><i className="fas fa-arrow-left"></i> Go Back</button>
                    <Link className={base.button + " " + styles.button} to="/"><i className="fas fa-home"></i> Go Home</Link>
                </div>
            </div>
        </>
    );
};

export default NoPage;