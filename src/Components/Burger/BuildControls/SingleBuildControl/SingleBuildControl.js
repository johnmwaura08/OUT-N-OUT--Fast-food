import React from 'react';
import styles from './SingleBuildControl.css'

 const SingleBuildControl = (props) => {
    return (
        <div className ={styles.SingleBuildControl}>
            <div className={styles.label}>{props.label}</div>
            <button className={styles.Less}>Remove</button>
            <button className={styles.More}>Add</button>
        </div>
    )
}


export default SingleBuildControl;