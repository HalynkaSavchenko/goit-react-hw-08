import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import css from './NotFoundPage.module.css'

export default function NotFoundPage() {
    const notifyNotFound = () => toast ('This page not found.', {
        duration: 4000, 
        position: 'top-right',
        style: {
            borderRadius: '12px',
            background: '#3339',
            color: '#fff',
        },
        icon: '👏'
    });

    useEffect(()=> {
        notifyNotFound()
    },[])

    
    return (
        <div>
            <p className={css.text}>Please, visit our <Link className={css.link} to='/'>home page  😎</Link></p>
            <Toaster/>
        </div>
    )
}