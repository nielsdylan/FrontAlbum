import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { TbArrowUp } from 'react-icons/tb'

const Dashboard = () => {
  return (
    <div>
      <Container fluid>
        <PageBreadcrumb title="Dashboard" subtitle="" modulo="Panel Control" />

        <Row className="row-cols-xxl-5 row-cols-md-3 row-cols-1 g-2 p-3">
            <Col>
                <Card className={`border shadow-none border-dashed mb-0 border-default bg-default`}>
                    <CardBody>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            <h5 className="fs-xl mb-0">4320</h5>
                            <span className='d-flex justify-content-center align-items-center'>12.75%&nbsp;<TbArrowUp className={`text-success`} /></span>
                        </div>
                        <p className="text-muted mb-2"><span>Total reports generated</span></p>
                        <ProgressBar now={12.75} variant={'secondary'} className='progress-sm' />
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
