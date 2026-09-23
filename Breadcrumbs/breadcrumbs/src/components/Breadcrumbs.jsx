import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {

    const {pathname} = useLocation();
    const pathnames = pathname.split('/').filter((x) => x);

    let breadcrumbsPath = ''

  return (
    <div className='breadcrumbs'>
      {pathnames.length > 0 && <Link to={'/'}>Home</Link>}
      {
        pathnames.map((name, index) => {
            breadcrumbsPath += `/${name}`;
            const isLast = index === pathnames.length-1

            return isLast? <span key={breadcrumbsPath}>/ {name}</span>:(
                <Link to={breadcrumbsPath}>{name}</Link>
            )
        })
      }
    </div>
  )
}

export default Breadcrumbs
