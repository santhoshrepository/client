import React, { useState, useEffect } from 'react';
import Layout from './../components/Layout/Layout';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart'; // Assuming the cart context is imported from the correct location
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast
import '../styles/ProductDetailsStyles.css';

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart(); // Accessing cart state from context

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
      setProduct(data?.product);
      getSimilarProduct(data?.product?._id, data?.product?.category?._id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`);
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(`${product.name} added to cart`); // Display a success message using toast
  };

  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width="350px"
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'INR',
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button className="btn btn-secondary ms-1" onClick={() => addToCart(product)}>
            ADD TO CART
          </button>
        </div>
      </div>
      <hr />
      <div className="row container similar-products">
        <h4>Similar Products ➡️</h4>
        {relatedProducts.length > 0 ? (
          <div className="d-flex flex-wrap">
            {relatedProducts.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'INR',
                    })}
                  </h5>
                  <button className="btn btn-info ms-1" onClick={() => navigate(`/product/${p.slug}`)}>
                    More Details
                  </button>
                  <button className="btn btn-dark ms-1" onClick={() => addToCart(p)}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No Similar Products found</p>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
