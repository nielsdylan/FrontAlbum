import PageBreadcrumb from "@/components/PageBreadcrumb"
import { Col, Container, Row, Card, CardBody, CardTitle } from 'react-bootstrap';
import { Link } from "react-router";

const CardPlantilla = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle as={'h5'} className="mb-2">
                    Card with stretched link
                </CardTitle>
                <Link to="" className="btn btn-primary mt-2 stretched-link">
                    Go somewhere
                </Link>
            </CardBody>
        </Card>
    )
}

const ListPlantilla = () => {
  return (
    <div>
        <Container fluid>
            <PageBreadcrumb title="Gestion de Plantillas" subtitle="" />

            <Row className="justify-content-center">
            <Col xxl={8}>
                <CardPlantilla />
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ListPlantilla
