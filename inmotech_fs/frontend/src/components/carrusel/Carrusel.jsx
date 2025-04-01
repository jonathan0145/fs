// import React from 'react';
// import { Carousel } from 'react-bootstrap';

// function Carrusel({ slides }) {
//     if (!Array.isArray(slides) || slides.length === 0) {
//         return <div>No hay slides para mostrar.</div>; // Manejo en caso de que slides sea invalido
//     }

//     return (
//         <Carousel>
//             {slides.map((slide, index) => (
//                 <Carousel.Item key={index}>
//                     <img
//                         className="d-block w-100"
//                         src={slide.imageUrl}
//                         alt={`Slide ${index}`}
//                         style={{ maxHeight: '400px', objectFit: 'cover' }}
//                     />
//                     <Carousel.Caption>
//                         <h3>{slide.title}</h3>
//                         <p>{slide.subtitle}</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             ))}
//         </Carousel>
//     );
// }

// export default Carrusel;

import React from 'react';
import { Carousel } from 'react-bootstrap';

function Carrusel({ slides }) {
    console.log('Carousel re-renderizado con slides:', slides);
    console.log('Slides recibidos en Carousel:', slides);

    if (!Array.isArray(slides)) {
        console.log('Slides no es un array.');
        return <div>No hay slides para mostrar.</div>;
    }

    if (slides.length === 0) {
        console.log('Slides está vacío.');
        return <div>No hay slides para mostrar.</div>;
    }

    return (
        <Carousel>
            {slides.map((slide, index) => {
                if (!slide || !slide.imageUrl || !slide.title || !slide.subtitle) {
                    return null;
                }

                return (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={slide.imageUrl}
                            alt={`Slide ${index}`}
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>{slide.title}</h3>
                            <p>{slide.subtitle}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default Carrusel;