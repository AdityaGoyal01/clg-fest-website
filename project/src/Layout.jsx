import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet, } from 'react-router-dom'

export default function Layout() {


  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
        <Header />
      </header>

     <main className="flex-grow mt-20 px-4 lg:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full max-w-9xl mx-auto bg-gray-800 text-white rounded-xl  text-center shadow-lg mt-10">
        <Footer />
      </footer>
    </div>
  );
}
