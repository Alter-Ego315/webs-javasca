import React from 'react';

const Hero = () => {
    return (
        <section style={styles.hero}>
            <div className="container" style={styles.content}>
                <h2 style={styles.title}>HERO</h2>
                <p>(Foto)</p>
            </div>
        </section>
    );
};

const styles = {
    hero: {
        height: '80vh',
        backgroundColor: '#e0e0e0', // Placeholder gray
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: '60px',
    },
    content: {
        textAlign: 'center',
        color: '#666',
        border: '2px dashed #999',
        padding: '40px',
        width: '80%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '3rem',
        marginBottom: '20px',
        fontFamily: 'var(--font-heading)',
    }
};

export default Hero;
