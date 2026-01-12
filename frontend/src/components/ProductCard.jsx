const ProductCard = ({ producto }) => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300'>
      <img
        className='w-full h-48 object-cover'
        src={producto.imagenUrl || 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=500'}
        alt={producto.nombre}
      />
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{producto.nombre}</h5>
        <p className='mb-3 font-normal text-gray-700'>{producto.descripcion}</p>
        <div className='flex justify-between items-center'>
          <span className='text-3xl font-bold text-orange-600'>${producto.precio.toLocaleString()}</span>
          <button className='px-3 py-2 text-sm font-medium text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300'>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
