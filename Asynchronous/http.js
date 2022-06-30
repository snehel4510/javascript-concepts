const getUser = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error in fetching the data");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

// callback hell
// getUser("server/ankur.json", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const user = JSON.parse(data);
//     console.log(user);
//     getUser("server/snehel.json", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const user = JSON.parse(data);
//         console.log(user);
//         getUser("server/ankur.json", (err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             const user = JSON.parse(data);
//             console.log(user);
//           }
//         });
//       }
//     });
//   }
// });

// promises chaining -> better way to fetch data from multiple sources
getUser("server/ankur.json")
  .then((data) => {
    console.log("Promise 1 resolved : ", data);
    return getUser("server/snehel.json");
  })
  .then((data) => {
    console.log("Promise 2 resolved : ", data);
    return getUser("server/srivastava.json");
  })
  .then((data) => {
    console.log("Promise 3 resolved : ", data);
  })
  .catch((err) => {
    console.log("Promise rejected : ", err);
  });
