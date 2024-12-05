import { useState } from "react";
import Pagination from ".";
import './pagination.css';

function PaginationTest() {
    const dummyData = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
    }));

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
  
    function handlePageChange(currentPage){
      setCurrentPage(currentPage)
    }