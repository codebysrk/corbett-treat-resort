import Image from "next/image";

interface Activity {
  id: number;
  label: string;
  title: string;
  desc: string;
  image: string;
}

export default function ExperienceActivities({ activities }: { activities: Activity[] }) {
  return (
    <section className="experience-list-section">
      <div className="experience-grid">
        {activities.map((act) => (
          <div className="experience-card" key={act.id}>
            <div className="experience-img-wrap">
              <Image
                src={act.image}
                alt={act.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <span className="experience-badge">{act.label}</span>
            </div>
            <div className="experience-card-body">
              <h3 className="experience-card-title">{act.title}</h3>
              <p className="experience-card-desc">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
