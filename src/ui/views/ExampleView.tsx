import React, { useContext } from 'react'
import logo from '../assets/images/react.svg'
import { ExampleContext } from '../../domain/example/ExampleContext'
import ExampleForm from '../components/ExampleForm'

const ExampleView: React.FC = (): React.ReactElement | null => {
  const context = useContext(ExampleContext)

  if (!context) {
    return <p>Loading...</p>
  }

  const { examples } = context

  return (
    <div className="example-view-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">Welcome to Example View</h1>
      <h2>Example List</h2>
      <ExampleForm />
      <ul>
        {examples.map((example) => (
          <li key={example.id}>{example.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExampleView
