
import PageBreadcrumb from "@/components/PageBreadcrumb"
import { Button, Col, Container, FormControl, FormLabel, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap"

//necesario para el data table-----
import DT from 'datatables.net-bs5'
import DataTable, {type  DataTableRef } from 'datatables.net-react'
import 'datatables.net-responsive'
import 'datatables.net-select'
import ReactDOMServer from 'react-dom/server'
import { TbChevronLeft, TbChevronRight, TbChevronsLeft, TbChevronsRight, TbEdit, TbPlus, TbTrash } from 'react-icons/tb'
import { createRoot } from 'react-dom/client'
import { useEffect, useRef, useState } from 'react'
import useToggle from '@/hooks/useToggle'
import type { Paginate } from "../../interface/BackEndPaginate"
import { LuSave } from "react-icons/lu"
import { sweet } from '@/utils/alerts'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import ComponentCard from "@/components/cards/ComponentCard"
// ------
//cambiar
import { lista,guardar, inactivar, ver } from '@/app/panel-control/services/galeria/AlbumServices'
import type { Servicio } from "../../interface/Servicio"

const Albumes = () => {
  return (
    <div>
        <h1>albvum</h1>
    </div>
  )
}

export default Albumes
