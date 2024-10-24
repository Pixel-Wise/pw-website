import { createContext, useState, ReactNode } from 'react';
import { Example } from './Example';

type ExampleContextProps = {
    examples: Example[];
    addExample: (name: string) => void;
};

export const ExampleContext = createContext<ExampleContextProps | undefined>(undefined);

export const ExampleProvider = ({ children }: { children: ReactNode }) => {
    const [examples, setExamples] = useState<Example[]>([]);

    const addExample = (name: string) => {
        const newExample = new Example(examples.length + 1, name);
        setExamples([...examples, newExample]);
    };

    return (
        <ExampleContext.Provider value={{ examples, addExample }}>
            {children}
        </ExampleContext.Provider>
    );
};
