import { userDropdownItems } from '@/app/qr-admin/layouts/components/dataQR'

import {Link} from "react-router";
import { Fragment } from 'react'
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { TbChevronDown } from 'react-icons/tb'

import user3 from '@/assets/images/users/user-3.jpg'
import { qrLogOut } from '@/app/qr-admin/service/auth/AuthServices';

const UserProfile = () => {
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault(); 
    try {
        // Intentamos cerrar la sesión en el backend
        const respons = await qrLogOut();
        console.log(respons);
    } catch (error) {
        // Si da error 401 (ya expiró o es inválido), lo ignoramos
        console.error("El token ya era inválido en el backend", error);
    } finally {
        // El bloque finally se ejecuta SIEMPRE, haya dado error o no.
        // Forzamos la limpieza del navegador para que el usuario pueda salir.
        localStorage.removeItem('token_admin');
        localStorage.removeItem('userToken_admin'); // Asegúrate de borrar los correctos
        window.location.reload(); 
    }
    
  };
  return (
    <div className="topbar-item nav-user">
      <Dropdown align="end">
        <DropdownToggle as={'a'} className="topbar-link dropdown-toggle drop-arrow-none px-2">
          <img src={user3} width="32" height="32" className="rounded-circle me-lg-2 d-flex" alt="user-image" />
          <div className="d-lg-flex align-items-center gap-1 d-none">
            <h5 className="my-0">Geneva</h5>
            <TbChevronDown className="align-middle" />
          </div>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          {userDropdownItems.map((item, idx) => (
            <Fragment key={idx}>
              {item.isHeader ? (
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">{item.label}</h6>
                </div>
              ) : item.isDivider ? (
                <DropdownDivider />
              ) : (
                <DropdownItem 
                  as={Link} 
                  to={item.url ?? ''} 
                  className={item.class}
                  onClick={(e) => {
                      // 2. Evaluamos si el ítem actual es el de Log Out
                      if (item.action === 'logout') {
                          handleLogout(e);
                      }
                  }}
                >
                  {item.icon && <item.icon className="me-2 fs-17 align-middle" />}
                  <span className="align-middle">{item.label}</span>
                </DropdownItem>
              )}
            </Fragment>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default UserProfile
