import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from "@/components/PageBreadcrumb"
import { Col, Container, FormControl, FormLabel, Row, Form } from "react-bootstrap"
import addImage from '@/app/assets/images/add-image.jpg'

const NuevaFoto = () => {
  return (
    <div>
 
      <Container fluid>
        <PageBreadcrumb title="Agregar nueva foto" subtitle="" />
        <Row className="justify-content-center">
            <Col xxl={8}>
                <ComponentCard title="Crear nuevo registro">
                    <Row>
                        <Col xxl={6}>
                            <Form.Group className="mb-3" >
                                <FormLabel htmlFor="titulo">Titulo</FormLabel>
                                <FormControl type="text" id="titulo" />
                            </Form.Group>                            
                        </Col>
                        <Col xxl={6}>
                            <Form.Group className="mb-3" >
                                <FormLabel htmlFor="album">Album</FormLabel>
                                <FormControl type="text" id="album" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xxl={6}>
                            <Form.Group className="mb-3" >
                                <FormLabel htmlFor="descripcion">Descripción</FormLabel>
                                <FormControl as="textarea" id="descripcion" rows={6} />
                            </Form.Group>                            
                        </Col>
                        <Col xxl={6}>
                            <p>Agrege una imagen</p>
                            <img 
                                src={addImage} 
                                alt="Imagen cargada" 
                                className="img-thumbnail shadow"
                                style={{ maxHeight: '200px' }} 
                            />
                        </Col>
                    </Row>
                </ComponentCard>
            </Col>

        </Row>


      </Container>
    </div>
  )
}

export default NuevaFoto
