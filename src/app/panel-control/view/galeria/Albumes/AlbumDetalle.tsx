import PageBreadcrumb from "@/components/PageBreadcrumb"
import { Col, Container, Row } from "react-bootstrap"

const AlbumDetalle = () => {
  return (
    <div>
      <Container fluid>
        <PageBreadcrumb title="Gestion de fotos del album" subtitle="" />

        <Row className="justify-content-center">
          <Col xxl={8}>
            {/* <CardTable /> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AlbumDetalle
