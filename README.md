<p align="center">
  <img src="assets/tailwind-react.jpeg" width="300" />
  <h1 align="center">React Calendar</h1>
  <h3 align="center">with Tailwind CSS</h3>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/matt-d-webb/react-calendar)

<p align="center">
  <img src="assets/list-view-example.png" width="600" />
</p>

- React v17+
- TailwindCSS v3

```js
export default function App() {
  return (
    <div>
        <Calendar data={[...]}></Calendar>
    </div>
  )
}
```

```ts
interface Event {
  id: string,
  name: string | null,
  description: string | null,
  rounds: number | null,
  time: string | null,
  startDate: string,
  maxEntries: number,
  entryCount: number | null,
  complete: boolean,
  cancelled: boolean,
  isLive: boolean,
  active: string,
  type: EventType, // <-- inherts `EventType` props
  color: string | null,
  textColor: string | null,
  url: string,
  isFull: boolean
}
// Defaults - helpful for repeating types which still need unqiue values i.e date, capacity
interface EventType {
  id: string,
  name: string,
  description: string,
  url: string,
  color: string,
  textColor: string,
  time: string | null,
  maxEntries: number,
  timeControl: string,
  eventType: string,
  defaultPrice: string,
  canRegister: boolean
}
```



