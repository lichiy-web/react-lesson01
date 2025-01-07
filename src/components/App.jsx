// src/App.jsx

import Alert from './Alert';
import Form from './Form';
import MainWindow from './MainWindow';
import Product from './Product';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>
      <MainWindow />
      <Product />
      <Product />
      <Product />
      <Alert />
      <Alert />
      <Form />
    </div>
  );
}
