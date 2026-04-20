export const sendLead = async (payload: any) => {
  return fetch("/api/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};
