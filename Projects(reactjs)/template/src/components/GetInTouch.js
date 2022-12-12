import React from 'react';
import Card from "./Card";

function GetInTouch() {
  return (
    <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">
        We love new friends!
      </h2>
      <div className="row">
        <div className="col-4">
          <Card
          title='card one'
          cardDesc='card one desc'
          btnText='card one btn'
          />
        </div>
        <div className="col-4">
        <Card
        title='card two'
        cardDesc='card two desc'
        btnText='card two btn'
        />
        </div>
        <div className="col-4">
        <Card
        title='card three'
        cardDesc='card three desc'
        btnText='card three btn'
        />
        </div>
      </div>
    </div>
  </section>
  )
}

export default GetInTouch;