import React from 'react'
import { Helmet } from 'react-helmet'

const metadata = ({title}) => {
  return (
    <Helmet>
        <title>{title}</title>
    </Helmet>
  )
}

export default metadata