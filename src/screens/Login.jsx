import Carousel from "../components/Carousel";
import Form from "../components/Form";

const Login = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-gunmetal-300 p-4 h-screen flex justify-between">
      <Carousel />
      <Form />
    </div>
  );
};

export default Login;
