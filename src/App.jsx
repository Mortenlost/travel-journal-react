import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from "./data.js"


export default function App() {
  const cards = data.map((item) => {
    return (
      <Card 
         item={item}
      />
    )
  })

  return (
    <div>
      <Header />
      <section>
        {cards}
      </section>
    </div>
  )
}