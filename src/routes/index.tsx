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
const ListClient    = lazy(() => import('@/app/panel-control/view/configuration/clients/ListClient'))
const ListNiveles = lazy(() => import('@/app/panel-control/view/configuration/Niveles/ListNiveles'))


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
// COMPONENTES DEL PANEL DE CONTROL --------------------------
const AdminLayout   = lazy(() => import('@/app/panel-control/layouts/AdminLayout'))
const PublicLayout   = lazy(() => import('@/app/web/layouts/PublicLayout'))
// const SlidersPC   = lazy(() => import('@/app/panel-control/view/slider/ListSliders'))
const ServiciosPC   = lazy(() => import('@/app/panel-control/view/servicios/ListServicios'))
const ColaboradoresPC   = lazy(() => import('@/app/panel-control/view/colaborador/ListColaboradores'))
// CONFIGURACION DE RUTAS-------------
const dashboardRoutes: RouteObject[] = [
    { path: 'dashboard', element: <Dashboard/> },
    // { path: 'sliders', element: <SlidersPC/> },
    { path: 'servicios', element: <ServiciosPC/> },
    { path: 'colaboradores', element: <ColaboradoresPC/> },
    {
        path: 'configuracion',
        children: [
            { path: 'clientes', element: <ListClient /> },
            { path: 'niveles', element: <ListNiveles /> },
        ],
    },
]

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

    // GRUPO PANEL DE COPNTROL (Login + Dashboard)
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

    // RUTAS DE ERROR
    { path: '*', element: <Error404 /> },
];

const otherRoutes: RouteObject[] = [...errorRoutes]

export const routes: RouteObject[] = [...allRoutes, ...otherRoutes]
