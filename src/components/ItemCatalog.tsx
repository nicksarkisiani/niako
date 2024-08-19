import React from 'react';
import styles from '../styles/itemcatalog.module.css'
import {IFilm} from "../types/films.type";
import {NavLink} from "react-router-dom";
import {useActions} from "../hooks/useActions";

interface ItemCatalogProps {
    item: IFilm
}

const ItemCatalog: React.FC<ItemCatalogProps> = ({item}) => {

    const {setItem} = useActions()

    const onClickHandler = () => {
        setItem({item})
    }

    return (
        <NavLink to={`/cinema/${item.id}`} className={styles.container} onClick={onClickHandler}>
            <div className={styles.img}>
                <img src={item.img} alt="logo"/>
            </div>

            <div className={styles.text}>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
            </div>
        </NavLink>
    );
};

export default ItemCatalog;