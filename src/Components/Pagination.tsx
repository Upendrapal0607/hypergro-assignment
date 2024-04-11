import React, { useState } from "react";
interface PaginationProps {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const generatePageButtons = () => {
    const buttonsToShow = 5;
    const totalPagesLeft = totalPages - currentPage;
    const startIndex = Math.max(1, currentPage - Math.floor(buttonsToShow / 2));
    let endIndex = Math.min(totalPages, startIndex + buttonsToShow - 1);

    if (totalPagesLeft < Math.floor(buttonsToShow / 2)) {
      endIndex = totalPages;
    }

    const pageButtons = [];
    for (let i = startIndex; i <= endIndex; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={
            i === currentPage
              ? "font-bold text-2xl rounded-x px-4 bg-blue-800 rounded-xl"
              : "font-semibold text-xl rounded-xl px-3  bg-blue-600"
          }
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination flex justify-center items-center gap-4 py-2 px-2 sm:w-[50%] w-[100%] m-auto">
      <button
        className="font-bold text-2xl"
        onClick={goToPrevPage}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <div className="page-buttons flex gap-4">{generatePageButtons()}</div>
      <button
        className="font-bold text-2xl"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
