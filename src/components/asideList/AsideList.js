import React from 'react';


import  {listItems} from '../../services/listItems';

// local styles
import styles from './AsideList.module.css'
const AsideList = () => {

    return (
        <div>
            <aside>
                <header className='mt-5'>
                    Venus
                </header>
                <div className={styles.itemList}></div>
              
                <div className={styles.listItemBox}>
                    {listItems.map(data => 
                    <p tabIndex="0" key={data} className={styles.item}>{data}</p>)}
                </div>
                <button className='rounded text-light border-0 connectBtn'>content</button>
                
            </aside>
        </div>
    );
};

export default AsideList;