import PageBreadcrumb from "@/components/PageBreadcrumb"
import { Card, Col, Container, Row } from "react-bootstrap"
import addImage from '@/app/assets/images/add-image.jpg'
import { useRef, useState, type ChangeEvent } from "react";

const CardImageLink = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    // 1. Estado para guardar la URL de la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleClickCard = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // 2. Creamos una URL temporal para mostrar la imagen en el navegador
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            
            console.log("Archivo seleccionado:", file.name);
        }
    };

    return (
        <>
            {/* Fila del selector (Card) */}
            <Row className="justify-content-center">
                <Col xxl={2}>
                    <Card 
                        className="border-primary border border-dashed" 
                        onClick={handleClickCard} 
                        style={{ cursor: 'pointer' }}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            accept="image/*"
                        />
                        <img 
                            src={addImage} 
                            className="card-img-top img-fluid" 
                            alt="Agregar imagen" 
                            width={373} 
                            height={233} 
                        />
                    </Card>
                </Col>
            </Row>

            {/* 3. Nueva fila para mostrar la imagen seleccionada (solo si existe) */}
            {selectedImage && (
                <Row className="justify-content-center mt-4">
                    <Col xxl={4} className="text-center">
                        <h5>Previsualización:</h5>
                        <img 
                            src={selectedImage} 
                            alt="Imagen cargada" 
                            className="img-thumbnail shadow"
                            style={{ maxHeight: '300px' }} 
                        />
                    </Col>
                </Row>
            )}
        </>
    );
};

const AlbumDetalle = () => {
  return (
    <div>
      <Container fluid>
        <PageBreadcrumb title="Gestion de fotos del album" subtitle="" />
        <CardImageLink />
        
      </Container>
    </div>
  )
}

export default AlbumDetalle
