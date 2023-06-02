import React, { useRef, useEffect } from "react";
import useUserStore from "../../store/user";
const UserToken: React.FC = () => {
  const setToken = useUserStore((state) => state.setToken);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
  const handleSaveButtonClick = () => {
    setToken(ref.current?.value);
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
