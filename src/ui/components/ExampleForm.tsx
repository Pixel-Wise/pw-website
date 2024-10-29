import React, { useContext, useState } from 'react';
import { ExampleContext } from '../../domain/example/ExampleContext';

const ExampleForm: React.FC = () => {
  const [name, setName] = useState('');
  const { addExample } = useContext(ExampleContext)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addExample(name);
    setName('');
  };
  // const ExampleForm = 'ExampleForm';

  return (
    <form onSubmit={handleSubmit} className="example-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Example Name:
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter example name"
          className="form-input"
          required
        />
      </div>
      <button type="submit" className="form-button">
        Add Example
      </button>
    </form>
  );
};

export default ExampleForm;
