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

const postJSON = (url, content) =>
  new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.headers)
      .then((headers) => resolve(headers))
      .catch((e) => reject(e));
  });

export const postDone = (content) => postJSON(`${"url"}`, content);

export const postDigisosDone = (content) => postJSON(`${"url"}`, content);
