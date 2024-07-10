export const handleEvent = (setEvents, newEvent, maxEvents) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, newEvent];
      if (updatedEvents.length > maxEvents) {
        updatedEvents.shift();
      }
      return updatedEvents;
    });
  };