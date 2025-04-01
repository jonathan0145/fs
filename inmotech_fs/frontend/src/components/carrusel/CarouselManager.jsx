import React, { useState, useEffect } from 'react';

function CarouselManager() {
    const [slides, setSlides] = useState(JSON.parse(localStorage.getItem('carouselSlides')) || []);
    const [newImage, setNewImage] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [newSubtitle, setNewSubtitle] = useState('');

    useEffect(() => {
        localStorage.setItem('carouselSlides', JSON.stringify(slides));
    }, [slides]);

    const handleImageChange = (e) => {
        setNewImage(e.target.files[0]);
    };

    const handleAddSlide = () => {
        if (newImage) {
            const imageUrl = URL.createObjectURL(newImage);
            setSlides([...slides, { imageUrl, title: newTitle, subtitle: newSubtitle }]);
            setNewImage(null);
            setNewTitle('');
            setNewSubtitle('');
        }
    };

    const handleRemoveSlide = (index) => {
        const updatedSlides = slides.filter((_, i) => i !== index);
        setSlides(updatedSlides);
    };

    return (
        <div>
            <h2>Gestión del Carrusel</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <input type="text" placeholder="Título" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <input type="text" placeholder="Subtítulo" value={newSubtitle} onChange={(e) => setNewSubtitle(e.target.value)} />
            <button onClick={handleAddSlide}>Agregar Slide</button>
            <ul>
                {slides.map((slide, index) => (
                    <li key={index}>
                        <img src={slide.imageUrl} alt={`Slide ${index}`} style={{ maxWidth: '100px' }} />
                        <span>{slide.title} - {slide.subtitle}</span>
                        <button onClick={() => handleRemoveSlide(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarouselManager;