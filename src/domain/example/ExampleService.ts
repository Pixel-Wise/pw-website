import { Example } from './Example'

export class ExampleService {
  private examples: Example[] = []

  addExample(name: string): Example {
    const newExample = new Example(this.examples.length + 1, name)
    this.examples.push(newExample)
    return newExample
  }

  getExamples(): Example[] {
    return this.examples
  }
}
