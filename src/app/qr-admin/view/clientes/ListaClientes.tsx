import PageBreadcrumb from "@/components/PageBreadcrumb"
import { Button, Col, Container, FormControl, FormLabel, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, OverlayTrigger, Pagination, Row, Tooltip, Form } from "react-bootstrap"

//necesario para el data table-----
import DT from 'datatables.net-bs5'
import DataTable, {type  DataTableRef } from 'datatables.net-react'
import 'datatables.net-responsive'
import 'datatables.net-select'
import ReactDOMServer from 'react-dom/server'
import { TbChevronLeft, TbChevronRight, TbChevronsLeft, TbChevronsRight, TbEdit, TbPlus, TbQrcode, TbTrash } from 'react-icons/tb'
import { createRoot } from 'react-dom/client'
import { useEffect, useRef, useState } from 'react'
import useToggle from '@/hooks/useToggle'
import type { Paginate } from "@/app/qr-admin/interface/BackEndPaginate"
import { LuSave } from "react-icons/lu"
import { sweet } from '@/utils/alerts'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import ComponentCard from "@/components/cards/ComponentCard"
import type { Cliente, Persona } from "../../interface/Cliente"
import { guardarData, inactivarData, listarData, verData } from "../../service/clienteServices"

const CardTable = () => {
  
  /*
  * funciones del Data Table-----------------------------------
  */
  // CREAMOS LAS COLUMNAS DEL DATA TABLE
  const columns = [
    { data: 'id', className: 'text-center', },
    {
      data: 'persona',
      render: (data: Persona) => {
        if (!data) return 'Sin persona asignada'
        return `${data.apellidos} ${data.nombres}`
      },
      className: 'text-center',
    },
    { data: 'email' },
    {
      data: 'estado',
      render: (data: number) => {
        const badgeClass = data === 1 ? 'success' : 'danger'
        const textEstado = data === 1 ? 'Activo' : 'Inactivo'
        return `<span class="badge badge-label badge-soft-${badgeClass}">${textEstado}</span>`
      },
      className: 'text-center',
    },
    {
      data: 'id',
        render: (data: number) => {
        // Devolvemos un contenedor vacío donde React "aterrizará"
        return `<div class="react-action-buttons" data-id="${data}"></div>`;
      },
      createdCell: (cell: Node, cellData: any, rowData: any) => {
        // Aquí montamos el componente de React-Bootstrap en la celda recién creada
        const root = createRoot(cell as HTMLElement);
        root.render(
          <div className=" gap-1 ms-2 ">

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-${rowData.persona_id}`} className="danger-tooltip">
                  Editar registro.
                </Tooltip>
              }
            >
              <button className="btn btn-sm btn-outline-default btn-icon rounded" onClick={() => handleEdit(Number(rowData.persona_id))}>
                <TbEdit className="fs-lg" />
              </button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-${rowData.persona_id}`} className="danger-tooltip">
                  Inactivar registro.
                </Tooltip>
              }
            >
              <button className="btn btn-sm btn-outline-default btn-icon rounded" onClick={() => handleDelet(Number(rowData.persona_id)) }>
                <TbTrash className="fs-lg" />
              </button>
            </OverlayTrigger>
            
          </div>
        );
      },
    className: 'text-center align-middle',
    }
  ]
  // DECLARAMOS LAS VARIABLES USESTATE
  const [formData, setFormData] = useState({ id: 0, numero_documento: "", nombres:"", apellidos:"", telefono: null as number | null , email: "", password:"" }); // variable donde se guarda el formulario 
  const [dataJson, setDataJson] = useState<Cliente[]>([]); // donde se guarda el json que se trae del backend
  // ------- Control del estado de pagionas 
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [links, setLinks] = useState<any[]>([]);
  const [perPage, setPerPage] = useState(5);
  // variables para usar el modal
  const [textModal, setTextModal] = useState("");
  const { isTrue: isOpen, toggle: toggleModal } = useToggle(); // variable para abrir y cerrar el modal
  // const [listaPlantillas, setListaPlantillas] = useState<Plantilla[]>([]);
  // Modal 2: QR (El que se ve en image_e8d4e4.png)
  const { isTrue: isOpenQR, toggle: toggleModalQR } = useToggle();
  const [imgQR, setImgQR] = useState("");
  const [linkQR, setLinkQR] = useState("");
  DataTable.use(DT)
  const tableRef = useRef<DataTableRef | null>(null)
  // ---- evento que carga al inciar la pagian useEffect --
  useEffect(() => {

    // getPlantillas();
    fetchLista(currentPage, perPage); // evento que se ejecuta para traer la data del backend
    if (tableRef.current && tableRef.current.dt) {
      const tableApi = tableRef.current?.dt() as any;

      // Escuchamos el evento 'length' que se dispara al cambiar el selector
      if (tableApi) {
        tableApi.on('length.dt', (_e: any, _settings: any, len: number) => {
          setPerPage(len);
          setCurrentPage(1);
        });
      }

      // Limpieza al desmontar el componente
      return () => {
        tableApi.off('length.dt');
      };
    }
    
    // fetchLista(currentPage);
  }, [currentPage, perPage]);

  // evento que tare la data del backend
  const fetchLista = async (page = 1, limit = perPage) => {
    try {
      const respons: Paginate = await listarData(page, limit);
      
      setDataJson(respons.data); // Laravel devuelve los registros en .data
      setCurrentPage(respons.current_page);
      setLastPage(respons.last_page);
      setTotalRecords(respons.total);

      setLinks(respons.links);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  // para ir al primer registro
  const goToFirstPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  };
  // para ir al ultimo registro
  const goToLastPage = () => {
    if (currentPage !== lastPage) {
      setCurrentPage(lastPage);
    }
  };
  // ----------------------------------------------------------


  /*
  * funciones ejm. crear editar eliminar etc -----------------
  */
  // EVENTO DON CONVIERTO EL FORMULARIO EN UN JSON
  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {
    const { name, value } = e.target;

    // Si es un input de archivo, extraemos el primer archivo seleccionado
    if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
      const file = e.target.files ? e.target.files[0] : null;
      setFormData((prev) => ({
        ...prev,
        [name]: file, // Guardamos el objeto File, no un string
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  // CREAR NUEVO REGISTRO
  const handleNew = async (id: number) => {
    setFormData({
      id: id, 
      numero_documento: "", 
      nombres: "",
      apellidos: "",
      telefono: null,
      email: "",
      password: "",
      
    });
    setTextModal("Nuevo Album")
    toggleModal();
  };
  // EVENTO DE GUARDAR
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que se recargue la página
    // creamos una variable para envair el formData porque enviamos archivo file porque si no enviamos directo la variable
    // const data = new FormData(); // OBLIGATORIO
  
    // data.append("id", formData.id.toString());
    // data.append("nombre", formData.nombre);
    // data.append("descripcion", formData.descripcion);
    
    // // Verifica que formData.imagen sea un objeto FILE, no un string
    // if (formData.imagen instanceof File) {
    //   data.append("imagen", formData.imagen);
    // }

    // const respons = await guardarData(data);
    const respons = await guardarData(formData); // solo cuando no se envia imagen
    fetchLista(currentPage);
    toggleModal();
    sweet({
      title: respons.title,
      icon: respons.icon,
      text: respons.text,
      customClass: { confirmButton: "btn btn-" + respons.icon },
    });
  };
  // EVENTO QUE TRAE DATA PARA EDITAR
  const handleEdit = async (id: number) => {
    const respons: Cliente = await verData(id);

    setFormData({
      id: respons.id, // Asegúrate de que 'id' exista en el objeto Nivel
      numero_documento: respons.persona.numero_documento, 
      nombres: respons.persona.nombres,
      apellidos: respons.persona.apellidos,
      telefono: respons.persona.telefono,
      email: respons.email,
      password: ""
    });
    setTextModal("Editar Album")
    
    toggleModal();
  };
  // ELIMINAR UN REGISTRO
  const ReactSwal = withReactContent(Swal);
  const handleDelet =  (id: number) => {
    ReactSwal.fire({
      title: "Alerta",
      text: "¿Esta seguro de Inactivar este registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      showCloseButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success me-2 mt-2",
        cancelButton: "btn btn-danger mt-2",
      },
    }).then( async (result) => {
      if (result.isConfirmed) {
        const data = {
          id: id,
          estado: 0
        };
        const respons = await inactivarData(data);
        fetchLista(currentPage);
        sweet({
          title: respons.title,
          text: respons.text,
          icon: respons.icon,
          customClass: { confirmButton: "btn btn-"+respons.icon },
        });
      }
    });
  };
  // ----------------------------------------------------------
  // const getPlantillas = async () => {
  //   const respons: Plantilla[] = await listasPlantillas();
  //   setListaPlantillas(respons);
    
  // }
  // const handleViewQR = async (id: number) => {
  //   const respons = await generarQR(id);
  //   toggleModalQR();
  //   console.log(respons);
  //   setImgQR(respons.imagen)
  //   setLinkQR(respons.link)
  // };
  return (
    <ComponentCard title="Lista de Albumes">
      <Button variant="secondary" className="mb-3 btn-sm" onClick={() => handleNew(0) }>
        <TbPlus className="fs-lg" /> 
        Nuevo
      </Button>
      <DataTable
        ref={tableRef}
        data={dataJson}
        columns={columns}
        options={{
          paging: true, // Desactivamos la paginación interna de DataTables
          info: false,   // Ocultamos la info interna para usar la nuestra
          order: [[1, 'asc']],
          responsive: true,
          language: {
            
            paginate: {
              first: ReactDOMServer.renderToStaticMarkup(<TbChevronsLeft className="fs-lg" />),
              previous: ReactDOMServer.renderToStaticMarkup(<TbChevronLeft className="fs-lg" />),
              next: ReactDOMServer.renderToStaticMarkup(<TbChevronRight className="fs-lg" />),
              last: ReactDOMServer.renderToStaticMarkup(<TbChevronsRight className="fs-lg" />),
            },
            processing: "Procesando...",
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Mostrando de _START_ a _END_ de _TOTAL_ registros",
            infoEmpty: "Mostrando 0 a 0 de 0 registros",
            infoFiltered: "(filtrado de un total de _MAX_ registros)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron resultados",
            emptyTable: "Ningún dato disponible en esta tabla"
          },

          lengthChange: true, // Activa el selector nativo
          lengthMenu: [5, 10, 25, 50, 100], // Opciones del select
          dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" + // 'l' es el selector, 'f' es el buscador
              "<'row'<'col-sm-12'tr>>",

          
        }}
        className="table table-striped dt-responsive dt-select-checkbox align-middle mb-0">
        <thead className="thead-sm text-uppercase fs-xxs text-center">
          <tr>
            <th>#</th>
            <th>Apellidos y Nombres</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
      </DataTable>
      {/* Controles de Paginación Personalizados (Estilo Bootstrap) */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          Mostrando página {currentPage} de {lastPage} (Total: {totalRecords} registros)
        </div>

        <Pagination className="pagination-boxed pagination-secondary">    
          <Pagination.First 
            onClick={goToFirstPage} 
            disabled={currentPage === 1}
          >
            <TbChevronsLeft />
          </Pagination.First>
          <Pagination.First 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <TbChevronLeft />
          </Pagination.First>
            {links.map((link, index) => {
              if (link.label.includes("Next") || link.label.includes("Prev")) return null;

              return (
                <Pagination.Item
                  active={link.active}
                  key={index}
                  onClick={() => {
                    // Extraemos el número de página de la URL o del label
                    const pageNumber = parseInt(link.label);
                    if (pageNumber) setCurrentPage(pageNumber);
                  }}
                  
                >
                  {link.label.replace('&laquo; ', '').replace(' &raquo;', '')}
                </Pagination.Item>
                
              );
            })}
          {/* ---- */}
          <Pagination.Next 
            disabled={currentPage === lastPage}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <TbChevronRight />
          </Pagination.Next>
          <Pagination.Last 
            onClick={goToLastPage} 
            disabled={currentPage === lastPage}
          >
            <TbChevronsRight />
          </Pagination.Last>
        </Pagination>
      </div>
      

      <Modal
        className="fade"
        show={isOpen}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton>
          <ModalTitle as="h5">{textModal}</ModalTitle>
        </ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <div className="row">
              <div className="col-md-12">
                <FormLabel htmlFor="numero_documento" className="col-form-label">
                  Numero de Documento:
                </FormLabel>
                <FormControl
                  type="text"
                  className="form-control form-control-sm"
                  id="numero_documento"
                  name="numero_documento"
                  placeholder="Ingresa tu titulo..."
                  value={formData.numero_documento}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-12">
                <FormLabel htmlFor="apellidos" className="col-form-label">
                  Apellidos:
                </FormLabel>
                
                <FormControl
                  type="text"
                  className="form-control form-control-sm"
                  id="apellidos"
                  name="apellidos"
                  placeholder="Ingresa tus apellidos..."
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <FormLabel htmlFor="nombres" className="col-form-label">
                  Nombres:
                </FormLabel>
                
                <FormControl
                  type="text"
                  className="form-control form-control-sm"
                  id="nombres"
                  name="nombres"
                  placeholder="Ingresa tus nombres..."
                  value={formData.nombres}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <FormLabel htmlFor="telefono" className="col-form-label">
                  Telefono:
                </FormLabel>
                
                <FormControl
                  type="number"
                  className="form-control form-control-sm"
                  id="telefono"
                  name="telefono"
                  placeholder="Ingresa tus nombres..."
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <FormLabel htmlFor="email" className="col-form-label">
                  Email:
                </FormLabel>
                
                <FormControl
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu email..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <FormLabel htmlFor="password" className="col-form-label">
                  Password:
                </FormLabel>
                
                <FormControl
                  type="password"
                  className="form-control form-control-sm"
                  id="password"
                  name="password"
                  placeholder="*********"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
          </ModalBody>
          <ModalFooter>
            <Button variant="default" onClick={toggleModal} className="btn-sm">
              Cerrar
            </Button>
            <Button variant="success" type="submit" className="btn-sm">
              {" "}
              <LuSave /> Guardar{" "}
            </Button>
          </ModalFooter>
        </form>
      </Modal>
      {/* modal de qr---------------------------------------------------------------------- */}
      <Modal
        className="fade"
        show={isOpenQR}
        onHide={toggleModalQR}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton>
          <ModalTitle as="h5">QR</ModalTitle>
        </ModalHeader>
            <ModalBody>
                <div className="row">
                <div className="col-md-12 text-center">
                    <img src={`data:image/png;base64,${imgQR}`} alt="Código QR" />
                </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button variant="default" onClick={toggleModalQR} className="btn-sm">
                    Cerrar
                </Button>
                <a href={linkQR} target="_blank" rel="noopener noreferrer" className="btn-sm btn-success btn">Ver plantilla</a>
            </ModalFooter>
      </Modal>
    </ComponentCard>
  )
}

const ListaClientes = () => {
  return (
    <div>
      <Container fluid>
        <PageBreadcrumb title="Gestion de Clientes" subtitle="" modulo="QR Admin" />

        <Row className="justify-content-center">
          <Col xxl={8}>
            <CardTable />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ListaClientes
