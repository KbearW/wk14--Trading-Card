"use strict";
// const tradingCardData = [
//   {
//     name: 'Balloonicorn',
//     skill: 'video games',
//     imgUrl: '/static/img/balloonicorn.jpg'
//   }
// ]

const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill} </h2>
    </div>
  );
}


function TradingCardContainer(props) { 
  const info = [];

  for (const card of tradingCardData) {
    info.push(
      <li key={card.name}>
        <TradingCard
        name={card.name}
        skill={card.skill}
        imgUrl={card.imgUrl}
        />
     </li>
    );
  }

  return (
      <React.Fragment>
        {info}
      </React.Fragment>
  );
}

// const fruitListItems = []
// for (let fruit of fruits) {
//   fruitListItems.push(<li key={fruit.fruit_id}>{fruit.name}</li>)
// }

// function TradingCardContainer() {
//   const tradingCards = [];

//   for (const currentCard of tradingCardData) {
//     tradingCards.push(
//       // <li key={currentCard.name}>
//         <TradingCard
//           name={currentCard.name}
//           skill={currentCard.skill}
//           imageUrl={currentCard.imgUrl}
//         />
//       // </li>
//     );
//   }

//   return (
//     <React.Fragment>
//       {tradingCards}
//     </React.Fragment>
//   );
// }

ReactDOM.render(
  (
    <TradingCardContainer />
  ),
  document.getElementById('card')
);

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Balloonicorn"
//       skill="video games"
//       imgUrl="/static/img/balloonicorn.jpg"
//     />
//   ),
//   document.querySelector('#balloonicorn')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Float"
//       skill="baking pretzels"
//       imgUrl="/static/img/float.jpg"
//     />
//   ),
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Llambda"
//       skill="knitting scarves"
//       imgUrl="/static/img/llambda.jpg"
//     />
//   ),
//   document.querySelector('#llambda')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Polymorphism"
//       skill="Being polymorphism"
//       imgUrl="/static/img/polymorphism.jpg"
//     />
//   ),
//   document.querySelector('#polymorphism')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Seedpy"
//       skill="planting"
//       imgUrl="/static/img/seedpy.jpg"
//     />
//   ),
//   document.querySelector('#seedpy')
// );
