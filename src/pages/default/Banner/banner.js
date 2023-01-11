import {React, useRef, useEffect} from 'react';
import styles from "./banner.module.css";
import TimeAgo from 'react-timeago';

import { Link } from 'react-router-dom';

import Loading from "./../loading.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Banner(props) {
    const Slider = useRef(null), Wrapper = useRef(null), Left = useRef(null), Right = useRef(null);
    const autoSlide = (event) => {
        if (Slider.current.scrollLeft <= 30) Left.current.classList.add(styles.disabled); else Left.current.classList.remove(styles.disabled);
        if (Slider.current.scrollWidth - (Slider.current.scrollLeft + Slider.current.offsetWidth) <= 30) Right.current.classList.add(styles.disabled); else Right.current.classList.remove(styles.disabled);
    };
    const slideCheck = () => {
        if (Slider.current.scrollWidth <= Slider.current.offsetWidth) {
            Left.current.classList.add(styles.hidden);
            Right.current.classList.add(styles.hidden);
        } else {
            Left.current.classList.remove(styles.hidden);
            Right.current.classList.remove(styles.hidden);
        }
        autoSlide();
    };
    const slideLeft = () => Slider.current.scrollLeft -= 500;
    const slideRight = () => Slider.current.scrollLeft += 500;
    useEffect(() => {
        slideCheck();
        Slider.current.scrollLeft = 80;
        window.addEventListener("resize", slideCheck, false);
    });

    return (
        <div className={styles.container}>
            {props.title && <div className={styles.topic}>{props.title}</div>}
            <div className={styles.inliner}>
                <div className={styles.slider} ref={Slider} onScroll={autoSlide}>
                    <div className={styles.banner} ref={Wrapper}>
                        {props.data.map(data => (
                            <div key={data.key} className={styles.block}>
                                <Link className={styles.content} to={`/room/${data.key}`}>
                                    <LazyLoadImage className={styles.image} src={data.icon} placeholderSrc={Loading} alt={data.name} />
                                    <div className={styles.placer}>
                                        <div className={styles.name}>{data.name + data.key}</div>
                                        <div className={styles.prov}>{data.name + data.key}</div>
                                    </div>
                                    <div className={styles.views}><i className="far fa-eye"></i> {data.views}</div>
                                    <div className={styles.timeago}><i className="far fa-timer"></i> <TimeAgo date={data.time} /></div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.switcher}>
                    <button type="button" ref={Left} onClick={slideLeft} className={styles.button + " " + styles.hidden + " " + styles.left}><i className="fas fa-arrow-left"></i></button>
                    <button type="button" ref={Right} onClick={slideRight} className={styles.button + " " + styles.hidden + " " + styles.right}><i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;