import { sleep } from "../helpers/date";

export const getAllEvents = async () => {
  const response = await fetch("http://localhost:5000/events");

  return await response.json();
};

export const getFeaturedEvents = async () => {
  const response = await fetch("http://localhost:5000/events");

  return (await response.json()).filter((event) => event.isFeatured === true);
};

export const getFilteredEvents = async ({ year, month }) => {
  const response = await fetch("http://localhost:5000/events");

  return (await response.json()).filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
};

export const getEventById = async (id) => {
  const response = await fetch("http://localhost:5000/events");

  return (await response.json()).find((event) => event.id === id);
};
