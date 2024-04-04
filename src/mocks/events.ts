import { v4 as uuid } from "uuid";
import { CalendarEvent } from "./../Calendar/Types";

const generateRandomInteger = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const eventFactory = () => {
  const type = types[generateRandomInteger(0, 2)];
  return {
    ...type,
    id: uuid(),
    rounds: 5,
    timeControl: "various",
    startDate: `${new Date().getFullYear()}-${generateRandomInteger(
      new Date().getMonth() + 1,
      new Date().getMonth() + 4
    )}-${generateRandomInteger(0, 30)}`,
    endDate: null,
    entryCount: 1,
    complete: false,
    cancelled: false,
    isLive: false,
    active: "yes",
    type: type,
    isFull: false,
  };
};

// {
//   eventType: "junior-club",
//   time: "6:00pm onwards",
//   description: "Tailored chess coaching sessions",
//   id: "fc884491-e010-40bd-9323-022dd19fbd0e",
//   name: "Junior Club",
//   eventTypeId: "2545c7e7-4cc8-474c-8a9d-c9bb6bfcb1b3",
//   cancelled: false,
//   complete: false,
//   endDate: null,
//   startDate: "2022-07-26",
//   isLive: false
//   },

const types = [
  {
    id: uuid(),
    name: "Open Rapidplay",
    description: "FIDE Rated 25min per player events.",
    url: "/events/rapidplay",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    textColor: "text-pink-700 font-medium",
    maxEntries: 50,
    timeControl: "25 mins",
    eventType: "rapidplay",
    defaultPrice: "20",
    canRegister: true,
  },
  {
    id: uuid(),
    name: "Open Blitz",
    description: "Unrated 3+2 Blitz Chess event.",
    url: "/events/blitz",
    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    textColor: "text-blue-500 font-medium",
    maxEntries: 18,
    timeControl: "3 min + 2 sec increment",
    eventType: "blitz",
    defaultPrice: "15",
    canRegister: true,
  },
  {
    id: uuid(),
    name: "Open Congress",
    description: "FIDE Rated Longplay Congress",
    url: "/events/congress",
    color: "bg-gradient-to-r from-green-500 to-cyan-500",
    textColor: "text-cyan-500 font-medium",
    maxEntries: 100,
    timeControl: "60 mins",
    eventType: "congress",
    defaultPrice: "20",
    canRegister: true,
  },
];

export const events: CalendarEvent[] = [...new Array(100)].map((_) =>
  eventFactory()
);
