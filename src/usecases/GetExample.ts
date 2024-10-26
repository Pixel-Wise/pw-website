import { ExampleService } from '../domain/example/ExampleService';

export function getExamples() {
  const exampleService = new ExampleService();
  return exampleService.getExamples();
}
