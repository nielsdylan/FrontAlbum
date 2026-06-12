import ComponentCard from "@/components/cards/ComponentCard";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import {
  Col,
  Container,
  FormControl,
  FormLabel,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import addImage from "@/app/assets/images/add-image.jpg";
import { useEffect, useRef, useState } from "react";
import { LuSave } from "react-icons/lu";
import { allAlbumes } from "@/app/panel-control/services/galeria/AlbumServices";
import { guardarData, verData } from "@/app/panel-control/services/galeria/FotoService";
import type { Album } from "@/app/panel-control/interface/galeria/Album";
import Select from "react-select";
type OptionType = {
  label: string;
  value: string;
};
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate, useParams } from "react-router";
const ReactSwal = withReactContent(Swal);
const IMG_URL = import.meta.env.VITE_APP_IMG_URL;

const NuevaFoto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // variable donde se guarda el formulario
  const [formData, setFormData] = useState({
    id: 0,
    titulo: "",
    album_id: "",
    descripcion: "",
    imagen: null as File | null | string,
    weight: 0,
    name_imagen: "",
    extension: "-",
    weightKB: 0,
  });
  // const [albumesData, setAlbumesData] = useState<Album[]>([]);
  const [options, setOptions] = useState<OptionType[]>([]);
  // Referencia al input de tipo file (oculto)
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Estado para la imagen (inicia con la imagen por defecto)
  const [imagePreview, setImagePreview] = useState(addImage);

  const handleImageClick = () => {
    // Al hacer clic en la imagen, activamos el clic del input oculto
    fileInputRef.current?.click();
  };

  useEffect(
    () => {
      Albumes();
      if (id) {
        buscarRegistro();
      }
      
    },
    [
      /* 3. Arreglo de dependencias */
    ],
  );
  // OBTENER REGISTRO PARA EDITAR
  const buscarRegistro = async () => {
    const respons = await verData(Number(id));
    setFormData((prev) => ({
      ...prev,
      id: respons.id,
      titulo: respons.titulo,
      album_id: respons.albumes_id ? String(respons.albumes_id) : "",
      descripcion: respons.description
    }));
    setImagePreview(IMG_URL+'/'+respons.path);
    console.log(respons);
    
  }
  const Albumes = async () => {
    const respons = await allAlbumes();
    // Transformamos los datos de la API al formato del Select
    const nuevasOpciones = respons.map((album: Album) => ({
      value: album.id.toString(),
      label: album.titulo, // O la propiedad que tenga el título del álbum
    }));

    // Guardamos las opciones ya transformadas
    setOptions(nuevasOpciones);
  };

  // EVENTO DE GUARDAR
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que se recargue la página
    // creamos una variable para envair el formData porque enviamos archivo file porque si no enviamos directo la variable
    const data = new FormData(); // OBLIGATORIO

    data.append("id", formData.id.toString());
    data.append("titulo", formData.titulo);
    data.append("album_id", formData.album_id);
    data.append("descripcion", formData.descripcion);

    // Verifica que formData.imagen sea un objeto FILE, no un string
    if (formData.imagen instanceof File) {
      data.append("imagen", formData.imagen);
      data.append("weight", String(formData.weight));
      data.append("weightKB", String(formData.weightKB));
      data.append("name_imagen", formData.name_imagen);
      data.append("extension", formData.extension);
    }

    await ReactSwal.fire({
      title: "¿Está seguro?",
      text: "Se guardar el registro",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      showLoaderOnConfirm: true,
      showCloseButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-primary me-2",
        cancelButton: "btn btn-danger",
      },
      preConfirm: async () => {
        return await guardarData(data);
      },
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {

        ReactSwal.fire({
            title: result.value.title,
            text: result.value.text,
            icon: result.value.icon,
            confirmButtonText: "Aceptar!",
            buttonsStyling: false,
            allowOutsideClick: false,
            customClass: {
            confirmButton: "btn btn-success me-2 mt-2",
            },
        }).then(async (confirmation) => {
            if (confirmation.isConfirmed) {
            navigate("/panel-control/galeria/fotos");
            }
        });
      }
    });
  };

  // EVENTO DON CONVIERTO EL FORMULARIO EN UN JSON
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    // Si es un input de archivo, extraemos el primer archivo seleccionado
    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const file = e.target.files ? e.target.files[0] : null;
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);

        // 1. Calcular el peso en KB (con 2 decimales)
        const weightInKB = file.size / 1024;

        // 2. Extraer la extensión del nombre
        const extension = file.name.split(".").pop() || "";

        setFormData((prev) => ({
          ...prev,
          weight: file.size,
          weightKB: weightInKB,
          name_imagen: file.name,
          extension: extension,
        }));
      }
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
    console.log(formData);
    
  };
  

  return (
    <div>
      <Container fluid>
        <PageBreadcrumb title="Agregar nueva foto" subtitle="" />
        <Row className="justify-content-center">
          <Col xxl={8}>
            <form onSubmit={handleSubmit}>
              <FormControl
                type="hidden"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
              <ComponentCard title="Crear nuevo registro">
                <Row>
                  <Col xxl={6}>
                    <Form.Group className="mb-3">
                      <FormLabel htmlFor="titulo">Titulo</FormLabel>
                      <FormControl
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xxl={6}>
                    <Form.Group className="mb-3">
                      <FormLabel htmlFor="album_id">Album</FormLabel>
                      {/* <FormControl type="text" id="album_id" name="album_id" value={formData.album_id} onChange={handleChange} required /> */}

                      <Select
                        className="react-select"
                        classNamePrefix={"react-select"}
                        placeholder="Seleccione..."
                        options={options}
                        value={
                          options.find(
                            (opt) => opt.value === formData.album_id,
                          ) || null
                        }
                        // onChange={(val) => setSingleDefault(val as OptionType)}
                        onChange={(val) => {
                          const selectedOption = val as OptionType | null;
                          setFormData((prev) => ({
                            ...prev,
                            album_id: selectedOption
                              ? selectedOption.value
                              : "",
                          }));
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xxl={6}>
                    <Form.Group className="mb-3">
                      <FormLabel htmlFor="descripcion">Descripción</FormLabel>
                      <FormControl
                        as="textarea"
                        id="descripcion"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        rows={6}
                      />
                    </Form.Group>
                  </Col>
                  <Col xxl={6}>
                    <p>Agregue una imagen</p>

                    {/* Input File oculto */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={handleChange}
                      name="imagen"
                      required={formData.id === 0 && !formData.imagen}
                    />

                    {/* Imagen que actúa como disparador */}
                    <img
                      onClick={handleImageClick}
                      src={imagePreview}
                      alt="Imagen cargada"
                      className="img-thumbnail shadow"
                      style={{
                        maxHeight: "200px",
                        cursor: "pointer",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xxl={12} className="text-end">
                    <Button variant="success" type="submit" className="btn-sm">
                      {" "}
                      <LuSave /> Guardar{" "}
                    </Button>
                  </Col>
                </Row>
              </ComponentCard>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NuevaFoto;
