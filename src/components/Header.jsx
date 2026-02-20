import React from 'react';
import { Home, BookOpen, Smile, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header style={styles.header}>
            <div className="container" style={styles.container}>
                {/* Left: Home Icon */}
                <Link to="/" style={styles.iconButton}>
                    <Home size={28} color="var(--color-secondary)" strokeWidth={1.5} />
                </Link>

                {/* Center: Title */}
                <div style={styles.titleContainer}>
                    <h1 style={styles.title}>MAB web</h1>
                </div>

                {/* Right: Navigation Icons */}
                <div style={styles.nav}>
                    <button onClick={() => scrollToSection('books')} style={styles.iconButton} aria-label="Books">
                        <div style={styles.circleIcon}>
                            <BookOpen size={24} color="var(--color-primary)" strokeWidth={1.5} />
                        </div>
                    </button>
                    <button onClick={() => scrollToSection('about')} style={styles.iconButton} aria-label="About">
                        <div style={styles.circleIcon}>
                            <Smile size={24} color="var(--color-primary)" strokeWidth={1.5} />
                        </div>
                    </button>
                    <a href="https://www.amazon.es/Notas-recorrido-una-bola-billar/dp/B0GDM69KKT/ref=sr_1_1?crid=2QA292BDRQD4Y&dib=eyJ2IjoiMSJ9.APBPPnHspGb7rOXJPgdqbA.HL_eTWNhrE7RYrxfU49mGm9sRUujCwJf2ohjnu5YdFA&dib_tag=se&keywords=notas+en+el+%2Caps%2C275&qid=1769620390&sprefix=notas+en+el+%2Caps%2C275&sr=8-1" target="_blank" rel="noopener noreferrer" style={styles.iconButton} aria-label="Amazon">
                        <div style={styles.circleIcon}>
                            <LinkIcon size={24} color="var(--color-primary)" strokeWidth={1.5} />
                        </div>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={styles.iconButton} aria-label="Amazon 2">
                        <div style={styles.circleIcon}>
                            <LinkIcon size={24} color="var(--color-primary)" strokeWidth={1.5} />
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        padding: '20px 0',
        backgroundColor: 'var(--color-white)',
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        textAlign: 'center',
    },
    title: {
        fontSize: '1.5rem',
        letterSpacing: '2px',
        textTransform: 'uppercase',
    },
    nav: {
        display: 'flex',
        gap: '15px',
    },
    iconButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleIcon: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'transparent', // Minimalist
        border: '2px solid var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
    }
};

export default Header;
