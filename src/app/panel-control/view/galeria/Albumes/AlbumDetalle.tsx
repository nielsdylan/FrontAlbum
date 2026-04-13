import PageBreadcrumb from "@/components/PageBreadcrumb"
import { Card, CardBody, CardTitle, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router"
import addImage from '@/app/assets/images/add-image.jpg'

const CardWithStretchedLink = () => {
    return (
        <Card className="border-primary border border-dashed">
            <img src={addImage} className="card-img-top img-fluid" alt="..." width={373} height={233} />
        </Card>
    )
}


const AlbumDetalle = () => {
  return (
    <div>
      <Container fluid>
        <PageBreadcrumb title="Gestion de fotos del album" subtitle="" />

        <Row className="justify-content-center">
          <Col xxl={2}>
            <CardWithStretchedLink />
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default AlbumDetalle
