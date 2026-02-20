import React from 'react';

const About = () => {
    return (
        <section className="section container">
            <div style={styles.header}>
                <h2 style={styles.title}>Sobre la autora</h2>
                <div style={styles.underline}></div>
            </div>

            <div style={styles.content}>
                <div style={styles.imageContainer}>
                    <div style={styles.placeholderImage}>
                        <span style={{ fontSize: '3rem' }}>:)</span>
                    </div>
                </div>

                <div style={styles.textContainer}>
                    <p style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p style={styles.paragraph}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </section>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '60px',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '10px',
        fontFamily: 'var(--font-heading)',
    },
    underline: {
        width: '60px',
        height: '3px',
        backgroundColor: 'var(--color-primary)',
        margin: '0 auto',
    },
    content: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '40px',
        alignItems: 'start',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    placeholderImage: {
        width: '200px',
        height: '250px',
        border: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    textContainer: {
        paddingTop: '20px',
    },
    paragraph: {
        marginBottom: '20px',
        fontSize: '1.1rem',
        color: '#555',
    },
    smallImageContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '20px',
    },
    smallPlaceholder: {
        width: '120px',
        height: '100px',
        border: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

};

export default About;
