import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const books = [
    {
        id: 1,
        title: 'Notas en el recorrido de una bola de billar',
        color: '#ffcccb',
        imageUrl: '/book1-front.jpg',
        price: '16.95€',
        amazonLink: 'https://www.amazon.es/Notas-recorrido-una-bola-billar/dp/B0GDM69KKT/ref=sr_1_1?crid=2QA292BDRQD4Y&dib=eyJ2IjoiMSJ9.APBPPnHspGb7rOXJPgdqbA.HL_eTWNhrE7RYrxfU49mGm9sRUujCwJf2ohjnu5YdFA&dib_tag=se&keywords=notas+en+el+recorrido+de+una+bola+de+billar&qid=1769620390&sprefix=notas+en+el+%2Caps%2C275&sr=8-1',
        description: 'Una obra de Marta Aguilera Bañón.'
    }
];

const BookSection = () => {
    const book = books[0];

    return (
        <>
            {/* Sales Text Section */}
            <section style={styles.salesSection}>
                <div className="container" style={styles.salesContent}>
                    <h2 style={styles.salesTitle}>Descubre la historia</h2>
                    <div style={styles.descriptionText}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </section>

            {/* Book Display Section */}
            <section style={styles.bookSection}>
                <div className="container section" style={styles.bookContainer}>
                    <h2 style={styles.sectionTitle}>El Libro</h2>

                    <div style={styles.singleBookWrapper}>
                        <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
                            <motion.div
                                initial="closed"
                                whileHover="open"
                                style={styles.bookPerspective}
                            >
                                {/* Book Cover (Front) */}
                                <motion.div
                                    variants={{
                                        closed: { rotateY: 0, x: 0 },
                                        open: { rotateY: -25, x: -10 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    style={{
                                        ...styles.bookCover,
                                        backgroundColor: book.color,
                                        overflow: 'hidden'
                                    }}
                                >
                                    {book.imageUrl && (
                                        <img
                                            src={book.imageUrl}
                                            alt={book.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    )}

                                    <div style={styles.spine}></div>
                                </motion.div>

                                {/* Simulated Pages/Inside (Behind the cover) */}
                                <motion.div
                                    variants={{
                                        closed: { opacity: 0 },
                                        open: { opacity: 1, x: 5 }
                                    }}
                                    style={styles.pages}
                                />

                            </motion.div>
                        </Link>

                        <div style={styles.actions}>
                            <Link to={`/book/${book.id}`} style={styles.button}>
                                Ver Detalles
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const styles = {
    salesSection: {
        backgroundColor: '#fff',
        padding: '80px 0',
        width: '100%',
    },
    salesContent: {
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
    },
    salesTitle: {
        fontSize: '2rem',
        marginBottom: '30px',
        color: 'var(--color-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    descriptionText: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#444',
    },
    bookSection: {
        backgroundColor: '#D4F7F6',
        width: '100%',
    },
    bookContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    singleBookWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        marginTop: '20px',
    },
    bookPerspective: {
        position: 'relative',
        perspective: '1000px', // Essential for 3D rotation
        cursor: 'pointer',
        width: '250px',
        height: '380px',
    },
    bookCover: {
        width: '250px',
        height: '380px',
        border: '1px solid #ddd',
        boxShadow: '5px 5px 15px rgba(0,0,0,0.15)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        transformOrigin: 'left center', // Rotate from the spine
        backgroundColor: '#fff',
        zIndex: 2,
    },
    spine: {
        position: 'absolute',
        left: '10px',
        top: 0,
        bottom: 0,
        width: '2px',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    pages: {
        position: 'absolute',
        top: '5px',
        left: '5px',
        width: '240px',
        height: '370px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        zIndex: -1,
        boxShadow: '5px 5px 10px rgba(0,0,0,0.1)'
    },
    sectionTitle: {
        textAlign: 'center',
        color: 'var(--color-secondary)',
        fontSize: '2.5rem',
        marginBottom: '40px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
    },
    button: {
        padding: '14px 30px',
        border: '2px solid var(--color-primary)',
        color: 'var(--color-primary)',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontSize: '1rem',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        display: 'inline-block',
    }
};

export default BookSection;
