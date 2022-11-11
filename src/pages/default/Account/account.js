import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./account.module.css";
import base from "../../../assets/base.module.css";

import main from "../../../assets/main.json";


function Account() {
    return (
        <div className={styles.account}>
            <div className={styles.container}>
                <div className={styles.banner}>
                <Link to="/"><img src="/assets/images/icon-100x100.png" alt={main.name} /></Link>
                </div>
                <div className={styles.fluid}>

                </div>
                <div className={styles.column}>
                    <Link className={base.link} to="/docs/terms">Terms</Link>
                    <Link className={base.link} to="/docs/privacy">Privacy</Link>
                    <Link className={base.link} to="/frwd/support">Support</Link>
                </div>
            </div>
        </div>
    );
};

export default Account;