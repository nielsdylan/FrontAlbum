// IMPORTACIONES  -------------
import {lazy} from 'react'
import {Navigate, type RouteObject} from 'react-router'
import MainLayout from '@/layouts/MainLayout.tsx'
import PrivateRoute from '@/app/panel-control/services/auth/PrivateRoute'
import PublicRoute from '@/app/panel-control/services/auth/PublicRoute'


// -------------
// RUTAS DE LOS COMPONENTES --------------------------
const Auth2SignIn   = lazy(() => import('@/app/panel-control/auth/index'))
const Dashboard     = lazy(() => import('@/views/dashboards/dashboard'))


// -------------

// Errorr
const Error400 = lazy(() => import('@/views/error/400'))
const Error401 = lazy(() => import('@/views/error/401'))
const Error403 = lazy(() => import('@/views/error/403'))
const Error404 = lazy(() => import('@/views/error/404'))
const Error408 = lazy(() => import('@/views/error/408'))
const Error500 = lazy(() => import('@/views/error/500'))
// -------------
// RUTAS DE LA PAGINA WEB --------------------------
const Home          = lazy(() => import('@/app/web/view/Home'))
const Nosotros      = lazy(() => import('@/app/web/view/Nosotros'))
const Contacto      = lazy(() => import('@/app/web/view/Contacto'))
// -------------
// COMPONENTES DEL PANEL DE CONTROL ALBUM--------------------------
const AdminLayout   = lazy(() => import('@/app/panel-control/layouts/AdminLayout'))
const PublicLayout   = lazy(() => import('@/app/web/layouts/PublicLayout'))


const Albumes   = lazy(() => import('@/app/panel-control/view/galeria/Albumes/Albumes'))
const AlbumDetalle   = lazy(() => import('@/app/panel-control/view/galeria/Albumes/AlbumDetalle'))
const Fotos   = lazy(() => import('@/app/panel-control/view/galeria/Fotos/Fotos'))
const NuevaFoto   = lazy(() => import('@/app/panel-control/view/galeria/Fotos/NuevaFoto'))
const ListPlantilla   = lazy(() => import('@/app/panel-control/view/plantillas/ListPlantilla'))

// RUTAS DE LOS TEMPLATE
const Plantilla1   = lazy(() => import('@/app/templates/plantilla1/plantilla1'))
const Plantilla2   = lazy(() => import('@/app/templates/plantilla2/plantilla2'))
const Plantilla3   = lazy(() => import('@/app/templates/plantilla3/plantilla3'))

// RUTAS DE LOS QR ADMIN --------------------------
const QRAdmin   = lazy(() => import('@/app/qr-admin/auth/qrAuth'))
import QRPublicRoute from '@/app/qr-admin/service/auth/QRPublicRoute'
import QRPrivateRoute from '@/app/qr-admin/service/auth/QRPrivateRoute'
const QRAdminLayout   = lazy(() => import('@/app/qr-admin/layouts/QRAdminLayout'))
// -------------
/*
*CONFIGURACION DE RUTAS DE PANEL DE CONTROL
*/
const dashboardRoutes: RouteObject[] = [
    { path: 'dashboard', element: <Dashboard/> },
    {
        path: 'galeria',
        children: [
            { path: 'fotos', element: <Fotos /> },
            { path: 'fotos/nueva-foto', element: <NuevaFoto /> },
            { path: 'fotos/editar-foto/:id', element: <NuevaFoto /> },
            { path: 'albumes', element: <Albumes /> },
            // { path: 'albumes/:id', element: <AlbumDetalle /> }
        ],
    },
    { path: 'plantillas', element: <ListPlantilla/> },
]
// -------------------------------
/*
*CONFIGURACION DE RUTAS DE QR ADMIN
*/
const QRAdminRoutes: RouteObject[] = [
    { path: 'dashboard', element: <Dashboard/> },
]
// ----------------------------------------------------
/*
*CONFIGURACION DE RUTAS DE ERRORES
*/
const errorRoutes: RouteObject[] = [
    {
        path: '/error',
        children: [
            {path: '400', element: <Error400/>},
            {path: '401', element: <Error401/>},
            {path: '403', element: <Error403/>},
            {path: '404', element: <Error404/>},
            {path: '408', element: <Error408/>},
            {path: '500', element: <Error500/>},
        ],
    },
    
]
// ----------------------------------------------------
/*
*CONFIGURACION DE RUTAS DONDE TODO SE ALMACENA
*/
const allRoutes: RouteObject[] = [
    // RUTA PÚBLICA (Landing Page)
    {
        path: '/',
        element: <PublicLayout />, 
        children: [
            { index: true, element: <Home /> },
            // { path: 'incio', element: <Home /> },
            { path: 'nosotros', element: <Nosotros /> },
            { path: 'contacto', element: <Contacto /> },
        ]
    },
    // ---------------------------------------------------------------------------------------------------------------------
    // RUTA PÚBLICA (Landing Page)
    { path: 'template/plantilla1/:usuario_id/:album_id', element: <Plantilla1/> },
    { path: 'template/plantilla2/:usuario_id/:album_id', element: <Plantilla2/> },
    { path: 'template/plantilla3/:usuario_id/:album_id', element: <Plantilla3/> },
    //---------------------------------------------------------------------------------------------------------------------
    // GRUPO PANEL DE CONTROL (Login + Dashboard)
    {
        path: 'panel-control',
        element: <AdminLayout />,
        children: [
            // Login: entrará por /private/login
            {
                index: true,
                element: <Navigate to="login" replace />
            },
            {
                path: 'login',
                element: <PublicRoute><Auth2SignIn /></PublicRoute>
            },
            // Dashboard: entrará por /private/...
            {
                element: <PrivateRoute />, 
                children: [
                    {
                        element: <MainLayout />,
                        children: [
                            { index: true, element: <Navigate to="panel-control/dashboard" replace /> },
                            ...dashboardRoutes,
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: 'qr-admin',
        element: <QRAdminLayout />,
        children: [
            // Login: entrará por /private/login
            {
                index: true,
                element: <Navigate to="login" replace />
            },
            {
                path: 'login',
                element: <QRPublicRoute><QRAdmin /></QRPublicRoute>
            },
            // Dashboard: entrará por /private/...
            {
                element: <QRPrivateRoute />, 
                children: [
                    {
                        element: <MainLayout />,
                        children: [
                            { index: true, element: <Navigate to="qr-admin/dashboard" replace /> },
                            ...QRAdminRoutes,
                        ],
                    },
                ],
            },
        ],
    },
    

    // RUTAS DE ERROR
    { path: '*', element: <Error404 /> },
];


const otherRoutes: RouteObject[] = [...errorRoutes]

export const routes: RouteObject[] = [...allRoutes, ...otherRoutes]
