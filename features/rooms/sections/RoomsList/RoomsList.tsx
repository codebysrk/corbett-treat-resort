import RoomCard from "@/app/rooms/RoomCard";

import { Room } from "@/lib/types";
export default function RoomsList({ rooms }: { rooms: Room[] }) {
  return (
    <section className="rooms-list-section">
      <div className="rooms-list-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}
