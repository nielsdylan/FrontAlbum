import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { TbArrowUp } from 'react-icons/tb'
import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import { getColor } from '@/helpers/color'
import type { ApexOptions } from 'apexcharts'

const GraficaLineas = () => {
    const getLineChart = (): ApexOptions => ({
        chart: {
            height: 380,
            type: 'line',
            zoom: { enabled: false },
            toolbar: { show: false },
        },
        colors: [getColor('info'), getColor('danger')],
        dataLabels: {
            enabled: true,
            style: {
            fontSize: '10px',
            fontWeight: 'bold',
            colors: [getColor('info'), getColor('danger')],
            },
            background: {
            enabled: true,
            padding: 8,
            borderRadius: 4,
            },
            offsetY: 3,
        },
        stroke: {
            width: [2, 2],
            curve: 'smooth',
        },
        series: [
            {
            name: 'Revenue - 2024',
            data: [45, 52, 48, 58, 63, 72, 80],
            },
            {
            name: 'Expenses - 2024',
            data: [25, 35, 32, 40, 38, 36, 34],
            },
        ],
        grid: {
            row: {
            colors: ['transparent', 'transparent'],
            opacity: 0.2,
            },
            borderColor: getColor('border-color'),
            padding: {
            top: 0,
            right: 20,
            bottom: 0,
            left: 20,
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        yaxis: {
            title: {
            text: 'Amount (in K)',
            offsetX: 0,
            style: {
                fontSize: '14px',
                fontWeight: 500,
            },
            },
            labels: {
            offsetX: -7,
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            offsetY: 5,
        },

        })
    return (

        //Muestra la actividad de carga a lo largo del tiempo (ej. mes a mes o por años). Le permite ver visualmente en qué épocas ha guardado más recuerdos
        <ComponentCard title="Línea de Tiempo de Recuerdos">
            <CustomApexChart getOptions={getLineChart} series={getLineChart().series} type="line" height={380} />
        </ComponentCard>
    )
}
const Dashboard = () => {

  return (
    <div>
      <Container fluid>
        <PageBreadcrumb title="Dashboard" subtitle="" modulo="Panel Control" />

        <Row>
            <Col md={6}>
                <GraficaLineas></GraficaLineas>
            </Col>

            <Col md={4}>
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
        <Row>
            
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
