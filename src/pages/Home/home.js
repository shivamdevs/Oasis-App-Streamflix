import React from 'react';
import styles from "./home.module.css";

import Banner from "../default/Banner/banner";

import db from "../../assets/database.json";

function Home() {
    function gme() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let str = "";
        for (var i = 0; i < 10; i++) {
            str += getRandomInt(0, 9);
        }
        return str;
    };
    db.files.forEach(file => {
        file.key = gme();
        file.icon += `?room=${file.key}`;
    });
    return (
        <div className={styles.home}>
            <Banner title={db.title} data={db.files} />
        </div>
    );
};


export default Home;