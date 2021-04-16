"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <p>Hi user! </p>
      <p><a href="/cards">Cards</a></p>
      <p><img src= '/static/img/balloonicorn.jpg'></img>
      </p>

    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
