import React, { useContext } from "react";
import { FamilyContext } from "../contexts/FamilyContext";

const Siblings = () => {
  // const family = useContext(FamilyContext)

  return (
    //Consumer is an older way to do Context API:
    <FamilyContext.Consumer>
      {
        (family) => {
          return (
            <section className="parents">
              {family.siblings.map((p) => (
                <div className="person" key={p.name}>
                  <img width="150" src={p.img} alt={p.name} />
                  <strong>{p.name}</strong>
                </div>
              ))}
            </section>
          )
        }
      }
    </FamilyContext.Consumer>
  );
};

export default Siblings;