import { EVENTS } from "../const/events";

export function getAllEvents() {
  return EVENTS;
}

export function getFeaturedEvents() {
  return EVENTS.filter((event) => event.isFeatured);
}

export function getFilteredEvents(dateFilter) {
  console.log(dateFilter);
  const { year, month } = dateFilter;

  let filteredEvents = EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return EVENTS.find((event) => event.id === id);
}
