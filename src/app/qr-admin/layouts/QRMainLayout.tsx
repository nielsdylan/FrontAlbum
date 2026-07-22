import Loader from '@/components/Loader'
import {useLayoutContext} from '@/context/useLayoutContext'
// import HorizontalLayout from '@/layouts/HorizontalLayout'
// import VerticalLayout from '@/layouts/VerticalLayout'
import {Fragment, useEffect, useState} from 'react'
import {Outlet} from "react-router";
import QRHorizontalLayout from '@/app/qr-admin/layouts/QRHorizontalLayout'
import QRVerticalLayout from '@/app/qr-admin/layouts/QRVerticalLayout'

const MainLayout = () => {
    const {orientation} = useLayoutContext()

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return <Loader height="100vh"/>

    return (
        <Fragment>
            {orientation === 'vertical' && <QRVerticalLayout> <Outlet/></QRVerticalLayout>}
            {orientation === 'horizontal' && <QRHorizontalLayout> <Outlet/></QRHorizontalLayout>}
        </Fragment>
    )
}

export default MainLayout
