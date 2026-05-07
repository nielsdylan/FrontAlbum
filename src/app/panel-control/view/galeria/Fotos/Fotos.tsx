import type { Paginate } from "@/app/panel-control/interface/BackEndPaginate";
import type { Image } from "@/app/panel-control/interface/galeria/Image";
import { listarData } from "@/app/panel-control/services/galeria/FotoService";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

const Fotos = () => {
    const [dataJson, setDataJson] = useState<Image[]>([]);
    // ------- Control del estado de pagionas 
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [links, setLinks] = useState<any[]>([]);
    const [perPage, setPerPage] = useState(5);

    useEffect(
        () => {
            listaFotos();
        },
        [currentPage, perPage],
    );
    const listaFotos = async (page = 1, limit = perPage) => {
        try {
            const respons: Paginate = await listarData(page, limit);
            
            setDataJson(respons.data); // Laravel devuelve los registros en .data
            setCurrentPage(respons.current_page);
            setLastPage(respons.last_page);
            setTotalRecords(respons.total);
    
            setLinks(respons.links);
            console.log(respons);
            
        } catch (error) {
            console.log(error);
        } finally {
        }
    };
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
                <Row></Row>
                <Row>
                    <Col xxl={2}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Fotos;
