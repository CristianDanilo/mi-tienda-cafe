import { useEffect, useState } from 'react';
import mainApi from './api/mainApi';
import ProductCard from './components/ProductCard';

function App() {
  const [productos, setProductos] = useState([]);

  // Este efecto se ejecuta apenas carga la página
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await mainApi.get('/products');
        setProductos(respuesta.data);
      } catch (error) {
        console.error('Error al traer los productos:', error);
      }
    };
    obtenerProductos();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 min-w-screen'>
      {/* Navbar con estilo Café */}
      <nav className='bg-orange-900 text-white p-6 shadow-xl'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-3xl font-black tracking-tighter'>CAFÉ LA VICENTA</h1>
          <ul className='flex gap-6 font-medium'>
            <li className='hover:text-orange-300 cursor-pointer'>Catálogo</li>
            <li className='hover:text-orange-300 cursor-pointer'>Nosotros</li>
          </ul>
        </div>
      </nav>

      <main className='container mx-auto px-4 py-12'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-4xl font-bold text-gray-800 border-l-8 border-orange-600 pl-4'>Nuestra Cosecha</h2>
          <span className='bg-orange-200 text-orange-800 px-4 py-1 rounded-full text-sm font-bold'>
            {productos.length} Variedades disponibles
          </span>
        </div>

        {/* Grid de productos */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {productos.length > 0 ? (
            productos.map((prod) => <ProductCard key={prod._id} producto={prod} />)
          ) : (
            <p className='text-gray-500 text-xl italic'>Aún no hay cafés registrados en la bodega...</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
