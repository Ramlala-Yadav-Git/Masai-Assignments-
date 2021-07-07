import "./Components/payment.css"
import { Date, CaseStudy, AmazonGift, Pay, Desktop } from "./Components/payment"
function App() {


  return (
    <div className="Container">
      <Date date={"28 / 10 / 2012"} />
      <CaseStudy study={"Case Study"} />
      <AmazonGift gift={"Amazon Gift"} />
      <Pay pay={"Pay"} />
      <Desktop desktop={"Desktop"} mobile={"mobile"} />
    </div>
  );
}

export default App;
