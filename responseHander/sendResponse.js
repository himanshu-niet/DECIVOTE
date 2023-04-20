const onSuccessResponse = async (res, response) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

 return res.json(response);
};


const onErrorResponse = async (res, error) => {
    res.statusCode = 507;
    res.setHeader("Content-Type", "application/json");

    return res.json(error);
};


export{
    onErrorResponse,
    onSuccessResponse
}