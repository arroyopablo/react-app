import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (element: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setiIndex] = useState(1);
  const handleClick = (i: number, element: string) => {
    setiIndex(i);
    onSelect?.(element);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
