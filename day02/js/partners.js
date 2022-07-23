const renderItems = function(data) {
  data.forEach(element => {
    console.log(JSON.stringify(element));
  });
}
fetch("https://pool-food-delivery-default-rtdb.firebaseio.com/db/partners.json")
  .then((response) => response.json())
  .then((value) => { 
    renderItems(value);
  })
  .catch((error) => {
    console.log(error);
  });