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
// import "./DesinerCard2/deginer.css"
// import { Navbar } from "./DesinerCard2/navbar.jsx"
// import { Section } from "./DesinerCard2/section.jsx"
// import { Lover } from "./DesinerCard2/lover.jsx"
// function App() {


//   return (
//     <div >

//       <Navbar />
//       <div className="UpperDiv"></div>
//       <Section />
//       < Lover img={"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"} title={"Bitcoin ($btc)"} para={"a;kfjklagnkjhagkjhngdkjgk;"} address={"gkprgkrdrgjopgrjopjrgo[rhn90tu9reuy 9reuy"} />
//       < Lover img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DuUXG2ue_bB3rkt_3mFVm_ofkL1jyq_tRw&usqp=CAU"} title={"Bitcoin ($btc)"} para={"abcfjhkoriorjifj"} address={"rgjogjoerjgrojeroerjortjoertjoi"} />
//       < Lover img={"https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"} title={"Bitcoin ($btc)"} para={"abcfjhkoriorjifj"} address={"jdfjkhjkldfshkjdfh"} />

//     </div>
//   );
// }
import { Deginer, Skills } from "./Components/DeginerCard/DeginerCard"
import styles from "./Components/DeginerCard/DeginerCard.module.css"
function App() {
  const arr = ["UI/UX", "Front End Developement", "HTML", "CSS", "JavaScript", "React", "Node"]

  return (
    <div className={styles.MainDiv} >

      <Deginer img={"data:image/jpeg;base64,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"} name={"Ramlala Yadav"} city={"Valsad"} description={"User Interface designer and front-end developer"} />
      <Skills data={arr} />

    </div>
  );
}

export default App;
