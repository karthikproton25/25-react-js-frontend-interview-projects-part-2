function Pagination({ currentPage, totalPages = 10, onPageChange }) {
    function generateNoOfPages() {
      const pages = [];
  
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
  
      return pages;
    }