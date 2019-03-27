import React from "react";
import "./styles.scss";

const HeroItem = props => {
    console.log("passei aqui");
    return (
        <div className="container-herois">
            {props.herois.length > 0
                ? props.herois.map(x => (
                      <div key={x.id}>
                          <div className="card">
                              <div className="card-image">
                                  <img
                                      src={`${
                                          x.thumbnail.path
                                      }/portrait_incredible.${
                                          x.thumbnail.extension
                                      }`}
                                      alt=""
                                  />
                              </div>
                              <div className="card-content">
                                  <p>{x.name}</p>
                              </div>
                          </div>
                      </div>
                  ))
                : ""}
        </div>
    );
};

export default HeroItem;
