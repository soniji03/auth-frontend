import React from 'react'
import AuthenticatedLayout from './layouts/AuthenticatedLayout'

function Home() {
  return (
    <AuthenticatedLayout>
<div className='min-h-screen flex items-center justify-center'>

<h1 className='font-bold text-3xl text-orange-300'>Hey, Now you are verified</h1>  

</div>
    </AuthenticatedLayout>
  )
}

export default Home