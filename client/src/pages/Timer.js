//Molly's Timer

  let time = 15;
  const Timer = () => {
    setInterval(function countdown() {
      time -= 1;
      if (time === 0) {
        //close out question
      }
    }, 1000);
  };
  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <button className="button">Category</button>
        <button className="button" data-toggle="modal">
          Category
        </button>
        <button className="button" data-toggle="modal">
          Category
        </button>
        <button className="button" data-toggle="modal">
          Category
        </button>
)