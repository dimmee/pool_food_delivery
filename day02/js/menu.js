const restaurant = "tanuki";
const renderItems = function(data) {
  data.forEach(element => {
    console.log(JSON.stringify(element));
  });
}
fetch(`./db/${restaurant}.json`).
  then((response) => response.json()).
  then((value) => { 
    renderItems(value);
  })
  .catch((error) => {
    console.log(error);
  });