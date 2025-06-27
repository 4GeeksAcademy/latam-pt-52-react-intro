import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Navbar from "./Navbar.jsx" // default

import { Footer } from "./Footer.jsx" // simple export
import ImageCarousel from './Carousel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <ImageCarousel
      images={[
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/id/238/200/300",
        "https://picsum.photos/id/239/200/300"
      ]}
    />
    <Footer/>
  </StrictMode>,
)
