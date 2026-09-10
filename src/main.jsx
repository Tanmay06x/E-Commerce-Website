import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ProductProvider from './components/Context/Context.jsx';
import Cart from './components/Context/CartCount.jsx';
import Input from './components/Context/Input.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ProductProvider>
    <Cart>
    <Input>
        <App />
    </Input>
    </Cart>
    </ProductProvider>
    </BrowserRouter>
)
