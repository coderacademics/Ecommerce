import React, { useState } from 'react';
import ItemCard from './ItemCard';
import '../../CSS/menhomepage.css'
import men_products_details from '../../Pictures/Men Section/product_details';
import Navbar from '../../Navbar';
function MenHomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('lowToHigh');
  const [filter, setFilter] = useState("none");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };
  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };
  let sortedProducts = [...men_products_details].sort((a, b) => {
    if (sortBy === 'lowToHigh') {
      return a.new_price - b.new_price;
    } else {
      return b.new_price - a.new_price;
    }
  });

  sortedProducts = [...sortedProducts].filter(product =>{
    if(filter === "none")
      return product;
    else if(product.category === filter && filter!= 'none')
      return product;
  })



  const itemsPerPage = 12;
  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = sortedProducts.slice(startIndex, endIndex);

  return (
    <>

      <Navbar />
      <div className='men_homepage_container'>
        <div className='dropdown-container'>
          <div className='dropdown'>
            <button className='dropdown-button' onClick={toggleSortDropdown}>
              Sort by
            </button>
            {isSortDropdownOpen && (
              <div>
                <select
                  className='dropdown-menu'
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    toggleSortDropdown(); // Close the dropdown after selecting an option
                  }}
                >
                  <option value='lowToHigh'>Price: Low to High</option>
                  <option value='highToLow'>Price: High to Low</option>
                </select>
              </div>
            )}
          </div>
          <div className='filter'>
            <button className='dropdown-button' onClick={toggleFilterDropdown}>Filter</button>
            {isFilterDropdownOpen && (
              <div>
                <select
                  className='dropdown-menu'
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value);
                    toggleFilterDropdown();
                  }}>
                  <option value='none'>All</option>
                  <option value='shirt'>Shirt</option>
                  <option value='t-shirt'>T-shirt</option>
                  <option value='jacket'>Jacket</option>
                </select>
              </div>
            )}
          </div>

        </div>
        <div className='products'>
          {productsToDisplay.map((product, index) => (
            <div key={product.id} className='product'>
              <ItemCard
                id={product.id}
                name={product.name}
                category={product.category}
                old_price={product.old_price}
                new_price={product.new_price}
                image={product.image}
              />
            </div>
          ))}
        </div>
        {/* Pagination controls */}
        <div className='pagination'>
          <button
            className='pagination_control_btns'
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{currentPage} of {totalPages}</span>
          <button
            className='pagination_control_btns'
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default MenHomePage;
