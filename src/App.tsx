import React from 'react'
import { ExampleProvider } from './domain/example/ExampleContext'
import ExampleView from './ui/views/ExampleView'

const App: React.FC = () => {
  return (
    <ExampleProvider>
      <ExampleView />
    </ExampleProvider>
  )
}

export default App
