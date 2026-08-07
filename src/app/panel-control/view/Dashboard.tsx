import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
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

            </Col>
        </Row>
        <Row>
            
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
