// import "./Components/payment.css"
// import { Date, CaseStudy, AmazonGift, Pay, Desktop } from "./Components/payment"
// function App() {


//   return (
//     <div className="Container">
//       <Date date={"28 / 10 / 2012"} />
//       <CaseStudy study={"Case Study"} />
//       <AmazonGift gift={"Amazon Gift"} />
//       <Pay pay={"Pay"} />
//       <Desktop desktop={"Desktop"} mobile={"mobile"} />
//     </div>
//   );
// }
import "./DesinerCard2/deginer.css"
import { Navbar } from "./DesinerCard2/navbar.jsx"
import { Section } from "./DesinerCard2/section.jsx"
import { Lover } from "./DesinerCard2/lover.jsx"
function App() {


  return (
    <div >

      <Navbar />
      <div className="UpperDiv"></div>
      <Section />
      < Lover img={"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"} title={"Bitcoin ($btc)"} para={"a;kfjklagnkjhagkjhngdkjgk;"} address={"gkprgkrdrgjopgrjopjrgo[rhn90tu9reuy 9reuy"} />
      < Lover img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DuUXG2ue_bB3rkt_3mFVm_ofkL1jyq_tRw&usqp=CAU"} title={"Bitcoin ($btc)"} para={"abcfjhkoriorjifj"} address={"rgjogjoerjgrojeroerjortjoertjoi"} />
      < Lover img={"https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"} title={"Bitcoin ($btc)"} para={"abcfjhkoriorjifj"} address={"jdfjkhjkldfshkjdfh"} />

    </div>
  );
}

export default App;
