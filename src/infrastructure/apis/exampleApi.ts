import { Example } from '../../domain/example/Example'

export async function fetchExamples(): Promise<Example[]> {
  const response = await fetch('/api/examples')
  return response.json()
}

export async function postExample(name: string): Promise<Example> {
  const response = await fetch('/api/examples', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  })
  return response.json()
}
