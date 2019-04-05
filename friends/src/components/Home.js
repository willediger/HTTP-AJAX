import React from "react";

function Home(props) {
  const routeToList = event => {
    event.preventDefault();
    props.history.push("/friend-list");
  };

  return (
    <div>
      <button onClick={routeToList}>List Friends!</button>
    </div>
  );
}

export default Home;
