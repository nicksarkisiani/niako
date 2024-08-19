import React from 'react';
import styles from '../styles/filmpage.module.css'
import {IFilm} from "../types/films.type";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface FilmPageProps {
    item?: IFilm
}

const FilmPage: React.FC<FilmPageProps> = ({item}) => {
    const items = useTypedSelector(state => state.items)
    if(item?.img === undefined) {
        const currentUrl = window.location.pathname;
        const index: number = +currentUrl[currentUrl.length - 1]

        item = items.items.filter(item => {
            console.log(item.id, index, item.id === index)
            return item.id === index
        })[0]
    }

    return (
        <section className={styles.filmpage}>
            <div className={styles.img}>
                <img src={item?.img} alt="logo"/>
            </div>

            <div className={styles.container}>
                {item?.videos.map(video => (
                    <div className={styles.video} key={video.name}>
                        <div>
                            <iframe width="560" height="315"
                                    src={video.link}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                        <div className={styles.text}>
                            <h2>{video.name}</h2>
                            {video.additional && <h3>{video.additional}</h3>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FilmPage;