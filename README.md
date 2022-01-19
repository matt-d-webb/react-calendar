<p align="center">
  <img src="assets/tailwind-react.jpeg" width="300" />
  <h1 align="center">React Calendar</h1>
  <h3 align="center">with Tailwind CSS</h3>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/matt-d-webb/react-calendar)

<p align="center">
  <img src="assets/list-view-example.png" width="600" />
</p>

## Uses

- React v17+
- TailwindCSS v3

```ts
import { Event } from "./Types";

export default function App(): ReactComponent {

  const events: Event[] = useEventList(); 

  return (<Calendar data={events}></Calendar>)
}
```

## Event Props

| Name         | Type         | Required | Default | Description                                                 | 
|----          |----          |----      |----     |----                                                         |
| id           | `string`     | required | null    | unique identifier                                           |
| name         | `string`     | optional | null    | overrides 'EventType' name                                  |
| description  | `string`     | optional | ""      | overrides 'EventType' description                           |
| rounds       | `number`     | optional | 0       | events can have "rounds" like in a competition              |
| time         | `string`     | optional | null    | when the event starts, allows for "arrival time" type input |
| startDate    | `Date`       | required | today() | when the event takes place                                  |
| endDate      | `Date`       | optional | null    | when the event finishes                                     |
| maxEntries   | `number`     | optional | null    | overrides `EventType` maxEntries                            |
| entryCount   | `number`     | optional | null    | current entries associated to event instance                | 
| complete     | `boolean`    | optional | false   | when had finsihed                                           |
| cancellelled | `boolean`    | optional | false   | event no longer taking place                                |
| isLive       | `boolean`    | optional | false   | event is in progress (streaming)                            |
| active       | `boolean`    | optional | true    | event is available to query                                 |
| type         | `eventType`  | optional | general | blueprint event type                                        |
| color        | `string`     | optional | teal    | overrides `EventType` color                                 |
| textColor    | `string`     | optional | teal    | overrides `EventType` textColor                             |
| url          | `string`     | optional | null    | redirect url for a landing page or sign up                  |
| isFull       | `boolean`    | optional | false   | no more entries to this event allowed                       |

### Event Type Props

| Name         | Type         | Required | Default       |  Description                   | 
|----          |----          |----      |----           |----                            |
| id           | `string`     | required | null          | unique identifier              |
| name         | `string`     | required | "Title"       |                                |
| description  | `string`     | required | "Description" |                                |
| time         | `string`     | optional | null          |                                |
| maxEntries   | `number`     | optional | null          |                                |
| color        | `string`     | optional | teal          |                                |
| textColor    | `string`     | optional | teal          |                                |
| url          | `string`     | optional | null          |                                |
| defaultPrice | `string`     | optional | null          |                                |
| canRegister  | `string`     | optional | false         |                                |
| eventType    | `string`     | required | "general"     |                                |





