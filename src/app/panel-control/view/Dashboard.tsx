import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart.tsx'
import { getColor } from '@/helpers/color'
import type { ApexOptions } from 'apexcharts'
import { useState } from 'react'

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

const GraficoEspacio = () => {
    const randomize = (series: number[]) => series.map(() => Math.floor(Math.random() * 100) + 1)
    const appendData = (series: number[]) => [...series.map(() => Math.floor(Math.random() * 100) + 1), Math.floor(Math.random() * 100) + 1]

    const removeData = (series: number[]) => series.slice(0, -1)
    const initialSeries = [64, 75, 33, 53]
    const getDonutOptions = (series: number[]): ApexOptions => ({
        chart: {
            type: 'donut',
            height: 320,
        },
        dataLabels: {
            enabled: false,
        },
        series,
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '14px',
            offsetY: 7,
        },
        colors: [getColor('purple'), getColor('warning'), getColor('danger'), getColor('info')],
        responsive: [
            {
            breakpoint: 600,
            options: {
                chart: {
                height: 240,
                },
                legend: {
                show: false,
                },
            },
            },
        ],
    })
    const [series, setSeries] = useState<number[]>(initialSeries)
    return (
        <ComponentCard title="Donut Update">
            <CustomApexChart getOptions={() => getDonutOptions(series)} series={series} type="donut" height={320} />
            <div className="text-center mt-2 d-flex justify-content-center gap-2 flex-wrap">
              <Button variant="primary" size="sm" onClick={() => setSeries(randomize(series))}>
                RANDOMIZE
              </Button>
              <Button variant="primary" size="sm" onClick={() => setSeries(appendData(series))}>
                ADD
              </Button>
              <Button variant="primary" size="sm" onClick={() => setSeries(removeData(series))}>
                REMOVE
              </Button>
              <Button variant="primary" size="sm" onClick={() => setSeries(initialSeries)}>
                RESET
              </Button>
            </div>
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
                <GraficoEspacio></GraficoEspacio>
            </Col>
        </Row>
        <Row>
            
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
