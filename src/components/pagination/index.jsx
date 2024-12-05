function Pagination({ currentPage, totalPages = 10, onPageChange }) {
    function generateNoOfPages() {
      const pages = [];
  
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
  
      return pages;
    }

    return (
        <div className="pagination">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="pagination-btn"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          )