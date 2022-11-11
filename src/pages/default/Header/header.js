import React from 'react';
import { Link } from 'react-router-dom';
import base from "../../../assets/base.module.css";
import styles from "./header.module.css";

import main from "../../../assets/main.json";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className="applet">
                    <div className="appicon">
                        <Link to="/"><img src="/assets/images/icon-100x100.png" alt={main.name} /></Link>
                    </div>
                </div>
                <div className={styles.account}>
                    <Link to="/login" className={base.button}>Sign in</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;