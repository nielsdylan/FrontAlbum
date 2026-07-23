
import Customizer from '@/app/panel-control/layouts/components/customizer'
import Footer from '@/app/panel-control/layouts/components/footer'
import Topbar from '@/app/panel-control/layouts/components/topbar'
import type { ChildrenType } from '@/types'
import { Fragment } from 'react'
import ResponsiveNavbar from "@/app/panel-control/layouts/components/responsive-navbar";


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
