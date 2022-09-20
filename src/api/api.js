import { postDigiSosDoneUrl, postDoneUrl } from "./urls";

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error("Fetch request failed");
  }
};

export const fetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, {
    method: "GET",
    credentials: "same-origin",
  });
  checkResponse(response);

  return response.json();
};

const postJSON = (url, content) =>
  new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      credentials: "same-origin",
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

export const postDone = (content) => postJSON(postDoneUrl, content);

export const postDigisosDone = (content) => postJSON(postDigiSosDoneUrl, content);
