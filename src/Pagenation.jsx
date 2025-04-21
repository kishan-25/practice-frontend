import { useEffect, useState } from "react";

export default function App() {
  const [product, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const Page_size = 10;

  const totalProducts = product.length;
  const noOfPages = Math.ceil(totalProducts / Page_size);
  const start = currentPage * Page_size;
  const end = start + Page_size;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  }

  return (
    <div className="" id="main-container">
      <h1>List of products</h1>

        <div className="flex flex-wrap gap-3 mb-6 text-black bg-yellow-500 p-4 rounded">
         <button>
            back
         </button>
          {[...Array(noOfPages).keys()].map((n) => (
              <button key={n} 
                className="text-white bg-black px-3 py-1 rounded shadow"
                onClick={() => handlePageChange(n)}>
                  {n}
              </button>
            ))}
         <button>
          forward
         </button>
        </div>

        <div className="grid grid-cols-2">
          {product.slice(start,end).map((val) => (
            <div key={val.id} className="flex flex-row">
              <h1 className="bg-slate-400"> {val.title}</h1>
              <img src={val.thumbnail} alt={val.title} />
            </div>
          ))}
        </div>
      
    </div>
  );
}
