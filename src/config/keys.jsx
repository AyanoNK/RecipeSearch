const apicredentials = {
  api_id: "6c3098cf",
  api_key: "6afaaeaa7911740c990bfec9be283472",
};

const recipeAPI = (query) => {
  return (
    "https://api.edamam.com/search?q=" +
    query +
    "&app_id=" +
    apicredentials.api_id +
    "&app_key=" +
    apicredentials.api_key
  );
};

export default recipeAPI;
