import PageBreadcrumb from "@/components/PageBreadcrumb"
import { Col, Container, Row, Card, CardBody, CardTitle } from 'react-bootstrap';
import { Link } from "react-router";

const CardPlantilla = ({titulo}:{titulo:string}) => {
    return (
        <Card>
            <CardBody>
                <CardTitle as={'h5'} className="mb-2">
                    {titulo}
                </CardTitle>
                <Link to="" className="btn btn-success mt-2">
                    Visualizar
                </Link>
            </CardBody>
        </Card>
    )
}

const ListPlantilla = () => {
  return (
    <div>
        <Container fluid>
            <PageBreadcrumb title="Gestion de Plantillas" subtitle="" modulo="Panel Control" />

            <Row className="justify-content-center">
                <Col xxl={2}>
                    <CardPlantilla
                        titulo="Album N°1"
                    />
                </Col>
                <Col xxl={2}>
                    <CardPlantilla
                        titulo="Album N°2"
                    />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ListPlantilla
