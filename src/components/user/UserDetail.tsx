import React, { useEffect } from "react";
import useUserStore from "../../store/user";
import { useQuery } from "@apollo/client";
import { GET_USER_DATA } from "../../apollo/repositories";

const UserDetail: React.FC = () => {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  const { loading, error, refetch } = useQuery(GET_USER_DATA());

  useEffect(() => {
    if (!user)
      refetch().then((response) => {
        setUser(response.data.viewer);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <div>User:{user?.name}</div>;
};

export default UserDetail;
