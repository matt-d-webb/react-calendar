  // {
  //   id: "fe5c4c47-60d9-483c-a731-4759a18ed24c",
  //   name: "Open Congress Test",
  //   description: "ECF Graded Long Play matches.",
  //   rounds: 5,
  //   time: "various",
  //   startDate: "2022-01-22",
  //   endDate: "2022-01-23",
  //   maxEntries: 18,
  //   entryCount: 1,
  //   complete: false,
  //   cancelled: false,
  //   isLive: false,
  //   active: "yes",
  //   createdAt: "2021-12-27T20:36:53.423Z",
  //   updatedAt: "2022-01-04T22:09:28.006Z",
  //   type: {
  //     id: "369e355b-de47-447d-bbe5-9a2fdc3095f7",
  //     name: "Open Congress",
  //     description: "ECF Graded Long Play matches.",
  //     url: "/events/congress",
  //     color: "bg-blue-700",
  //     time: null,
  //     maxEntries: 18,
  //     timeControl: "60 mins",
  //     eventType: "congress",
  //     defaultPrice: "20",
  //     canRegister: true,
  //   },
  //   color: "bg-blue-700",
  //   url: "/events/congress",
  //   isFull: false,
  // },



const generateRandomInteger = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const eventFactory = () => {
  const type = types[generateRandomInteger(0, 2)];
  return {
    ...type,
    id: "fe5c4c47-60d9-483c-a731-4759a18ed24c",
    rounds: 5,
    time: "various",
    startDate: `2022-0${generateRandomInteger(1, 4)}-${generateRandomInteger(
      0,
      30
    )}`,
    maxEntries: 18,
    entryCount: 1,
    complete: false,
    cancelled: false,
    isLive: false,
    active: "yes",
    createdAt: "2021-12-27T20:36:53.423Z",
    updatedAt: "2022-01-04T22:09:28.006Z",
    type,
    isFull: false,
  };
};

const types = [
  {
    id: "9f8655a6-5f50-4081-b15d-817e8838a7fd",
    name: "Open Rapidplay",
    description: "ECF Graded 25min per player events.",
    url: "/events/rapidplay",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    textColor: "text-pink-700 font-medium",
    time: null,
    maxEntries: 18,
    timeControl: "25 mins",
    eventType: "rapidplay",
    defaultPrice: "20",
    canRegister: true,
  },
  {
    id: "2abdb018-8964-4693-ae04-8a496f599991",
    name: "Open Blitz",
    description: "Unrated 3+2 Blitz Chess event.",
    url: "/events/blitz",
    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    textColor: "text-blue-500 font-medium",
    time: null,
    maxEntries: 18,
    timeControl: "3 min + 2 sec increment",
    eventType: "blitz",
    defaultPrice: "15",
    canRegister: true,
  },
  {
    id: "369e355b-de47-447d-bbe5-9a2fdc3095f7",
    name: "Open Congress",
    description: "ECF Graded Long Play matches.",
    url: "/events/congress",
    color: "bg-gradient-to-r from-green-500 to-cyan-500",
    textColor: "text-cyan-500 font-medium",
    time: null,
    maxEntries: 18,
    timeControl: "60 mins",
    eventType: "congress",
    defaultPrice: "20",
    canRegister: true,
  },
];

export const events = [...new Array(20)].map((_) => eventFactory());
