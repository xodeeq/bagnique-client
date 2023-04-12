function updateOptions(options: any) {
  const update = { ...options };
  if (localStorage.jwt) {
    update.headers = {
      ...update.headers,
      Authorization: `Bearer ${localStorage.jwt}`,
    };
  }
  return update;
}

export default function fetcher(url: string, method = "GET") {
  return fetch(process.env.SERVER_BASE_URL + url, {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json",
      "Client-Api-Key": process.env.CLIENT_API_KEY || "",
    },
    next: { revalidate: 60 },
  });
}
