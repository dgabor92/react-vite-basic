import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import { useGetUserQuery } from "../lib/api";

const PrivateRoute: FC = () => {
  const navigate = useNavigate();
  const { data: user, isLoading, isError } = useGetUserQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !user) {
    navigate("/login");
    return null;
  }

  return <Dashboard />;
};

export default PrivateRoute;
