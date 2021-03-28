// res, status, message, data, isSuccess
const ResponseHelper = (
  res: any,
  status: any,
  message: string,
  data: any,
  isSuccess: boolean,
  error: any = null
) => {
  const result = { message, data, isSuccess, error };
  return res.status(status).json(result);
};

export default ResponseHelper;
