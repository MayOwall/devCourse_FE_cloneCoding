import { useState } from "react";
export default function Lec9Pagination({
  defaultPage,
  limit,
  total,
  onChange,
}) {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);
  const handleChangePage = (newPage) => {
    onChange(newPage);
    setPage(newPage);
  };
  return (
    <div>
      <button onClick={() => page !== 0 && handleChangePage(page - 1)}>
        이전
      </button>
      {Array.from(new Array(totalPage), (_, i) => i)
        .filter((i) => {
          if (page < 3) {
            return i < 5;
          } else if (page > totalPage - 3) {
            return i >= totalPage - 5;
          } else {
            return i >= page - 2 && i <= page + 2;
          }
        })
        .map((i) => (
          <button
            key={i}
            style={{ color: page === i ? "red" : "black" }}
            onClick={() => handleChangePage(i)}
          >
            {i + 1}
          </button>
        ))}
      <button
        onClick={() => page + 1 !== totalPage && handleChangePage(page + 1)}
      >
        다음
      </button>
    </div>
  );
}
