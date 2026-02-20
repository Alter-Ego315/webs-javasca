import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <div style={styles.links}>
                    <a href="#" style={styles.link}>Términos Legales</a>
                    <span style={styles.separator}>|</span>
                    <a href="#" style={styles.link}>Copyright</a>
                </div>
                <p style={styles.copy}>&copy; {new Date().getFullYear()} Marta Aguilera Bañón. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        padding: '40px 0',
        marginTop: 'auto',
    },
    container: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        fontSize: '0.9rem',
    },
    link: {
        textDecoration: 'underline',
    },
    separator: {
        opacity: 0.7,
    },
    copy: {
        fontSize: '0.8rem',
        opacity: 0.9,
    }
};

export default Footer;
