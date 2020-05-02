import Router from 'next/router'
import css from './style.css';
import { useEffect } from 'react';

const LoadingComponent = ({data, param}) => { 
    useEffect(() => {
        setTimeout(() => {
            Router.push(`/result/?param=${param}&data=${data}`);
        }, 1000);
    });
    
    return(
        <div className={css.loadingComponent}>
            <div className={css.loadingSection}>
                <img src="/loading.gif" alt="loading gif" />
            </div>
        </div>
    )
}

export default LoadingComponent;
