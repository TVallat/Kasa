import React from 'react';
import './Error.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section>
            <h2 className='error-title'>404</h2>
            <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="nav-link" to="/">Retourner sur la page d'accueil</Link>
        </section>
    );
};

export default ErrorPage;
