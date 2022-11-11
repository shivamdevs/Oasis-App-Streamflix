import React from 'react';
import { Link } from 'react-router-dom';
import base from "../../../assets/base.module.css";
import styles from"./footer.module.css";

import main from "../../../assets/main.json";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <Link className={base.link + " " + styles.tabs} to={main.links.support}>Support</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.blog}>Blogs</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.releases}>Releases</Link>
                    </div>
                    <div className={styles.column}>
                        <Link className={base.link + " " + styles.tabs} to={main.links.support}>Support</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.blog}>Blogs</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.releases}>Releases</Link>
                    </div>
                    <div className={styles.column}>
                        <Link className={base.link + " " + styles.tabs} to={main.links.support}>Support</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.blog}>Blogs</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.releases}>Releases</Link>
                    </div>
                    <div className={styles.column}>
                        <Link className={base.link + " " + styles.tabs} to={main.links.support}>Support</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.blog}>Blogs</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.releases}>Releases</Link>
                    </div>
                    <div className={styles.column}>
                        <Link className={base.link + " " + styles.tabs} to={main.links.support}>Support</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.blog}>Blogs</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.releases}>Releases</Link>
                    </div>
                    <div className={styles.column}>
                        <Link className={base.link + " " + styles.tabs} to={main.links.support}>Support</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.blog}>Blogs</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.releases}>Releases</Link>
                    </div>
                    <div className={styles.column}>
                        <Link className={base.link + " " + styles.tabs} to={main.links.support}>Support</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.blog}>Blogs</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.releases}>Releases</Link>
                    </div>
                    <div className={styles.column}>
                        <Link className={base.link + " " + styles.tabs} to={main.links.support}>Support</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.blog}>Blogs</Link>
                        <Link className={base.link + " " + styles.tabs} to={main.links.releases}>Releases</Link>
                    </div>
                </div>
                <div className={styles.column + " " + styles.claim}>© {main.name} 2022</div>
            </div>
        </footer>
    );
};

export default Footer;