export const Pagination = ({ page, pages, changePage }) => {
  // console.log(page, pages);
  return (
    pages >= 1 && (
      <>
        <div className="pagination">
          <button
            className="prev_arrow"
            onClick={() => {
              changePage((page) => page - 1);
            }}
            disabled={page === 1}
          >
            &laquo;
          </button>
          <button
            className="next_arrow"
            onClick={() => {
              changePage((page) => page + 1);
            }}
            disabled={page === pages}
          >
            &raquo;
          </button>
        </div>
      </>
    )
  );
};
