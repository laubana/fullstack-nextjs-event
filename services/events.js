export const getAllEvents = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events`,
    {
      method: "GET",
    }
  );
  const json = await response.json();
  const data = json.data;

  return data;
};

export const getFeaturedEvents = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/featured-events`,
    {
      method: "GET",
    }
  );
  const json = await response.json();
  const data = json.data;

  return data;
};

export const getFilteredEvents = async ({ year, month }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/filtered-events/${year}/${month}`,
    {
      method: "GET",
    }
  );
  const json = await response.json();
  const data = json.data;

  return data;
};

export const getEvent = async (eventId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/event/${eventId}`,
    {
      method: "GET",
    }
  );
  const json = await response.json();
  const data = json.data;

  return data;
};
