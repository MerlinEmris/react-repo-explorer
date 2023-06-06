import React, { useRef, useEffect } from "react";
import useUserStore from "../../store/user";
import useFilterStore from "../../store/filter";
const UserToken: React.FC = () => {
  const setToken = useUserStore((state) => state.setToken);
  const ref = useRef<HTMLInputElement>(null);
  const setFilterValues = useFilterStore((state) => state.setOrAddFilterValue);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
  const handleSaveButtonClick = () => {
    setToken(ref.current?.value);
    setFilterValues({ name: "query", value: "user:@me" });
  };
  return (
    <div>
      <div>Token</div>
      <input ref={ref}></input>
      <button onClick={() => handleSaveButtonClick()}>Save</button>
    </div>
  );
};

export default UserToken;
