const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error("Fetch request failed");
  }
};

export const fetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, {
    method: "GET",
    credentials: "include",
  });
  checkResponse(response);

  return response.json();
};
