import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("Noooo");
  }
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;

// const CardList = ({ robots }) => {
//   return (
//     <div>
//       <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//       <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//       <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//     </div>
//   );
// };

// export default CardList;
