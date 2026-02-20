import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BookDetail = () => {
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Placeholder data
    const books = [
        {
            id: "1",
            title: 'Notas en el recorrido de una bola de billar',
            price: '16.95€',
            amazonLink: 'https://www.amazon.es/Notas-recorrido-una-bola-billar/dp/B0GDM69KKT/ref=sr_1_1?crid=2QA292BDRQD4Y&dib=eyJ2IjoiMSJ9.APBPPnHspGb7rOXJPgdqbA.HL_eTWNhrE7RYrxfU49mGm9sRUujCwJf2ohjnu5YdFA&dib_tag=se&keywords=notas+en+el+recorrido+de+una+bola+de+billar&qid=1769620390&sprefix=notas+en+el+%2Caps%2C275&sr=8-1',
            description: 'Breve descripción del libro. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            images: ['/book1-front.jpg', '/book1-back.jpg']
        }
    ];

    const book = books.find(b => b.id === id) || { title: 'Libro no encontrado', description: '', price: '', images: [] };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % book.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + book.images.length) % book.images.length);
    };

    const isComingSoon = book.id === "2";

    return (
        <div className="container section" style={{ position: 'relative' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '40px', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                <ChevronLeft size={20} /> Volver
            </Link>

            <div style={{
                ...styles.grid,
                filter: isComingSoon ? 'blur(10px)' : 'none',
                opacity: isComingSoon ? 0.5 : 1,
                pointerEvents: isComingSoon ? 'none' : 'auto'
            }}>
                {/* Left Column: Images */}
                <div style={styles.imageColumn}>
                    <div style={styles.mainImageContainer}>
                        {book.images.length > 1 && (
                            <button onClick={prevImage} style={styles.navButton}><ChevronLeft size={24} /></button>
                        )}
                        <div style={{
                            ...styles.mainImage,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {!book.images[currentImageIndex].startsWith('#') ? (
                                <img
                                    src={book.images[currentImageIndex]}
                                    alt={`${book.title} - ${currentImageIndex + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            ) : (
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: book.images[currentImageIndex],
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span style={{ opacity: 0.3, fontSize: '2rem' }}>Foto {currentImageIndex + 1}</span>
                                </div>
                            )}
                        </div>
                        {book.images.length > 1 && (
                            <button onClick={nextImage} style={styles.navButton}><ChevronRight size={24} /></button>
                        )}
                    </div>

                    {/* Thumbnails */}
                    <div style={styles.thumbnails}>
                        {book.images.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                style={{
                                    ...styles.thumbnail,
                                    border: currentImageIndex === idx ? '2px solid var(--color-primary)' : '1px solid #ddd',
                                    overflow: 'hidden',
                                    backgroundColor: img.startsWith('#') ? img : 'transparent'
                                }}
                            >
                                {!img.startsWith('#') && (
                                    <img
                                        src={img}
                                        alt="thumbnail"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Details */}
                <div style={styles.detailsColumn}>
                    <h1 style={styles.title}>{book.title}</h1>
                    <p style={styles.price}>{book.price}</p>

                    <div style={styles.description}>
                        <p>{book.description}</p>
                    </div>

                    {book.amazonLink && book.amazonLink !== '#' && (
                        <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" style={styles.buyButton}>
                            Comprar en Amazon
                        </a>
                    )}
                </div>
            </div>

        </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'start',
    },
    imageColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    mainImageContainer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
    },
    mainImage: {
        width: '100%',
        aspectRatio: '3/4', // Book ratio
        backgroundColor: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    navButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '5px',
        color: '#666',
    },
    thumbnails: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
    },
    thumbnail: {
        width: '60px',
        height: '80px',
        cursor: 'pointer',
        borderRadius: '2px',
    },
    detailsColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '10px',
        lineHeight: 1.2,
    },
    price: {
        fontSize: '1.5rem',
        color: 'var(--color-primary)',
        fontWeight: '700',
        marginBottom: '30px',
    },
    description: {
        color: '#555',
        lineHeight: '1.8',
        marginBottom: '40px',
    },
    buyButton: {
        display: 'inline-block',
        padding: '16px 32px',
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        borderRadius: '0', // Square/Classic look
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textAlign: 'center',
        maxWidth: '300px',
        transition: 'opacity 0.3s ease',
    }
};

export default BookDetail;
