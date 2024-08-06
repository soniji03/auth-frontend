import React from 'react'
import { ProtectedRoute } from '../ProtectedRoute'
import Header from '../components/authenticatedbar/header'
import Footer from '../components/authenticatedbar/footer'
export default function AuthenticatedLayout({ children }) {
    return (
        <ProtectedRoute>
            <Header/>
            <div className='mt-16 min-h-[91vh]'>{children}</div>
            <Footer/>
        </ProtectedRoute>
    )
}