import React from 'react';
import ItemCatalog from "./ItemCatalog";
import items from '../info/films.json'
import styles from '../styles/itemcatalog.module.css'

const Catalog = () => {
    return (
        <div className={styles.catalog}>
            {items.map(item => (
                <ItemCatalog item={item} key={item.name}/>
            ))}

        </div>
    );
};

export default Catalog;