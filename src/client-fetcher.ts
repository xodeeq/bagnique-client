"use client";

// function updateOptions(options: any) {
//   const update = { ...options };
//   if (localStorage.jwt) {
//     update.headers = {
//       ...update.headers,
//       Authorization: `Bearer ${localStorage.jwt}`,
//     };
//   }
//   return update;
// }

export default function clientFetcher(
  url: string,
  method: string = "GET",
  data: object | null = null
) {
  return fetch(process.env.NEXT_PUBLIC_SERVER_BASE_URL + url, {
    method: method.toUpperCase(),
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Client-Api-Key": process.env.NEXT_PUBLIC_CLIENT_API_KEY || "",
    },
    body: data ? JSON.stringify(data) : null,
  });
}
