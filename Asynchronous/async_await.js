const getUser = async (resource) => {
  const response = await fetch(resource);
  if (response.status !== 200) {
    throw new Error("error in fetching the data");
  }
  const data = await response.json();
  return data;
};

getUser("server/ankurs.json")
  .then((data) => console.log("resolved : ", data))
  .catch((err) => console.log("rejected : ", err.message));
