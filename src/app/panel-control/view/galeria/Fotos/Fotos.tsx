import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router'

const Fotos = () => {

  return (
    <div>
      <Container fluid>
        <PageBreadcrumb title="Gestion de fotos" subtitle="" />
        {/* <CardImageLink /> */}
        <Row>
            <Col xxl={2}>
                <Link to="/panel-control/galeria/fotos/nueva-foto">
                    <button className="btn btn-success">Nueva foto</button>
                </Link>
            </Col>
        </Row>
        <Row>
            <Col xxl={2}>
            
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Fotos
