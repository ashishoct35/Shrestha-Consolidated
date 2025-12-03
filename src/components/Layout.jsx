import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Navbar />
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerContent}>
                        <p>&copy; {new Date().getFullYear()} Shrestha Consolidated. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

