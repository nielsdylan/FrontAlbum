
import Customizer from '@/app/qr-admin/layouts/components/customizer'
import Footer from '@/app/qr-admin/layouts/components/footer'
import Topbar from '@/app/qr-admin/layouts/components/topbar'
import type { ChildrenType } from '@/types'
import { Fragment } from 'react'
import ResponsiveNavbar from "@/app/qr-admin/layouts/components/responsive-navbar";


const HorizontalLayout = ({ children }: ChildrenType) => {
  return (
    <Fragment>
      <div className="wrapper">
        <Topbar />

        <ResponsiveNavbar />

        <div className="content-page">
          {children}

          <Footer />
        </div>
      </div>

      <Customizer />
    </Fragment>
  )
}

export default HorizontalLayout
