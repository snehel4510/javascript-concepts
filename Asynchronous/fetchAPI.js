// it is an inbuilt method in javascript
// it takes the url endpoint as a parameter and returns a promise
// the response we get from the server itself isn't the actual. To the the actual data we need to do a JSON.parse() which is response.json() in this case which again returns a new promise
// that is why we use 2 .then() methods while fetching the data

fetch("server/ankurs.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
