import React from 'react';
import Layout from './../components/Layout/Layout';
import { useSearch } from '../context/search';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/cart';
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const location = useLocation(); // Access location object from React Router
  const [cart, setCart] = useCart();

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`); // Show success message with react-hot-toast
  };

  return (
    <Layout title={'Search results'}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? 'No Products Found'
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: '18rem' }} key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> ₹ {p.price}</p>
                  <button
                    className="btn btn-primary ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => addToCart(p)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

