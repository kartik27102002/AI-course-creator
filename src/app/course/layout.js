import React from 'react'
import DashHeader from '../dashboard/_Components/DashHeader'

function layout({children}) {
  return (
    <div>
        <DashHeader/>
         <div className="mx-10 md:mx-36 lg:px-60 mt-10">
            {children}
         </div>
    </div>
  )
}

export default layout
