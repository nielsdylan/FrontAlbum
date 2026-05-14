import type { Paginate } from "@/app/panel-control/interface/BackEndPaginate";
import type { Image } from "@/app/panel-control/interface/galeria/Image";
import { listarData } from "@/app/panel-control/services/galeria/FotoService";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useEffect, useState } from "react";
import { Col, Container, Modal, ModalBody, ModalHeader, ModalTitle, Row } from "react-bootstrap";
import { Link } from "react-router";
import useToggle from '@/hooks/useToggle'

const IMG_URL = import.meta.env.VITE_APP_IMG_URL;


const Fotos = () => {
    const [dataJson, setDataJson] = useState<Image[]>([]);
    // ------- Control del estado de pagionas 
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [links, setLinks] = useState<any[]>([]);
    const [perPage, setPerPage] = useState(5);
    const { isTrue: isOpen, toggle: toggleModal } = useToggle(); // variable para abrir y cerrar el modal
    const [urlImagen, setUrlImagen] = useState('');

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
    const verImagen = (url:any) => {
        console.log(url);
        setUrlImagen(url);
        toggleModal();
    }
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
                    {dataJson.map((data) => (
                        <Col xxl={2}>
                            <div className="contenedor-imagen"
                                style={{

                                    backgroundImage: `url(${IMG_URL}/${data.path})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    height: '250px',
                                    position: 'relative', // IMPORTANTE para el botón
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    backgroundColor: '#f8f9fa'
                                }}
                            >
                                <div className="capa-hover">
                                    <Link
                                        to={`/panel-control/galeria/fotos/editar-foto/${data.id}`} // Ruta dinámica si la necesitas
                                        className="btn btn-light btn-sm"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '10px',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    > Editar </Link>
                                    <button
                                        className="btn btn-light btn-sm"
                                        style={{
                                            fontWeight: 'bold',
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                        }}
                                        onClick={() => verImagen(data.path)}
                                    > Ver </button>
                                </div>
                            </div>
                        </Col>
                    ))}
                    
                </Row>
            </Container>

            <Modal
                className="fade"
                show={isOpen}
                onHide={toggleModal}
                // backdrop="static"
                keyboard={false}
            >
                {/* <ModalHeader closeButton>
                <ModalTitle as="h5">ss</ModalTitle>
                </ModalHeader> */}
                <ModalBody>
                    <img 
                        src={IMG_URL + '/' +urlImagen} 
                        alt="Vista completa" 
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} 
                    />
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Fotos;
