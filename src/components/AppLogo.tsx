
import {Link} from "react-router";

import logoDark from '@/assets/images/ETERNVM.jpg'
import logo from '@/assets/images/ETERNVM-SF.png'

const AppLogo = ({ height }: { height?: number }) => {
  return (
    <>
      <Link to="/" className="logo-dark">
        <img src={logoDark} alt="dark logo" height={height ?? 90} />
      </Link>
      <Link to="/" className="logo-light">
        <img src={logo} alt="logo" height={height ?? 90} />
      </Link>
    </>
  )
}

export default AppLogo
