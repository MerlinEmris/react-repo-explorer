import React, { useState } from "react";
import useRepositoryStore from "../../store/repository";

const Pagination: React.FC = () => {
  const repositoryCount = useRepositoryStore((state) => state.repositoryCount);
  const currentPageNumber = useRepositoryStore(
    (state) => state.currentPageNumber
  );
  const [active, setActive] = useState(currentPageNumber);
  const setCurrentPageNumber = useRepositoryStore(
    (state) => state.setCurrentPageNumber
  );

  const handlePaginationLink = (i: number) => {
    setActive(i);
    setCurrentPageNumber(i);
  };

  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        {Array.from(
          {
            length:
              repositoryCount < 99
                ? repositoryCount % 10 == 0
                  ? repositoryCount / 10
                  : Math.floor(repositoryCount / 10) + 1
                : 10,
          },
          (_, i) => (
            <button
              onClick={(e) => handlePaginationLink(i)}
              style={{ margin: "0 1em", padding: "4px 8px" }}
              className={`${active == i && "active"}`}
              key={i}
            >
              {i + 1}
            </button>
          )
        )}
      </ul>
    </div>
  );
};

export default Pagination;
