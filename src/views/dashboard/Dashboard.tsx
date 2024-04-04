import Container from "../Container";
import image from "../../assets/image.png";

import Header from "../Header";
import Footer from "../Footer";
const Dashboard = () => {
  return (
    <section
      className="new-property h-[700px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <Header />
      </div>
      <div className="mt-[300px]">
        <Container />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Dashboard;
