import { ExampleService } from '../domain/example/ExampleService';

export function addExample(name: string) {
    const exampleService = new ExampleService();
    return exampleService.addExample(name);
}