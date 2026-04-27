import { events } from "@/data/events";
import EventCard from "./EventCard";

export default function EventShowcase() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {events.map((event, i) => (
        <EventCard key={i} {...event} />
      ))}
    </div>
  );
}
