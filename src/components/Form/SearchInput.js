import React from 'react';
import { useSearch } from '../../context/search';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate('/search');
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    // Reset search input value when navigating away from the search page
    setValues({ ...values, keyword: '' });
  }, [location.pathname]); // Watch for changes in the pathname to trigger the effect

  return (
    <div>
      <form className="d-flex search-form" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
