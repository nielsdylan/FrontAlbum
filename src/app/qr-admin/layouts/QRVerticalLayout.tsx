import Customizer from '@/app/qr-admin/layouts/components/customizer'
import Footer from '@/app/qr-admin/layouts/components/footer'
import Sidenav from '@/app/qr-admin/layouts/components/sidenav'
import Topbar from '@/app/qr-admin/layouts/components/topbar'
import { Fragment } from 'react'

import type { ChildrenType } from '@/types'

const VerticalLayout = ({ children }: ChildrenType) => {
  return (
    <Fragment>
      <div className="wrapper">
        <Sidenav />

        <Topbar />

        <div className="content-page">
          {children}

          <Footer />
        </div>
      </div>

      <Customizer />
    </Fragment>
  )
}

export default VerticalLayout
