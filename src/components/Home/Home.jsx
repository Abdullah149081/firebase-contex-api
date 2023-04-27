import { useContext } from "react";
import { userContext } from "../../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(userContext);
  console.log(user);
  return <div />;
};

export default Home;
