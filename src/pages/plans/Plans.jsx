import "./plans.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";

const Plans = () => {
  return (
    <div>
      <Header title="Membership Plans" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem odio praesentium iure rerum ipsam aut hic soluta magnam sapiente.
      </Header>

      <section className="plans">
       <div className="container plans__container">
       {
         plans.map(({id, name, desc, price, features})=>{
          return <Card key={id} className='plan'>
          <h3>{name}</h3>
          <small>{desc}</small>
          <h1>{`${price}`}</h1><h2>/mo</h2>
          <h4>Features</h4>
          {
            features.map(({feature,available},index)=>{
              return<p key={index} className={!available ? 'disable' : ''}>{feature}</p>
            } )
          }
          <button className="btn lg">Choose Plan</button>
          </Card>
         })
       }
       
       </div>
      </section>
    </div>
  );
};

export default Plans;
