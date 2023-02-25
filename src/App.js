import Routes from './pages/Routes'
import React from 'react'
import "./App.scss"
import './../node_modules/bootstrap/dist/js/bootstrap.bundle'
import AuthContextProvider from './context/AuthContext'

export default function App() {
  return (
   <AuthContextProvider>
    <Routes/>
   </AuthContextProvider>
  )
}
