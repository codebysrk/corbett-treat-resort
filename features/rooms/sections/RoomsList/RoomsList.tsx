import RoomCard from "@/app/rooms/RoomCard";

interface Room {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  gallery: string[];
  bed: string;
  view: string;
  size: string;
  guests: string;
  amenities: string[];
}

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
