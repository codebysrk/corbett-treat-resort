import React from 'react';
import Image from 'next/image';
import './DiningSection.css';

const DiningSection = () => {
  const diningOptions = [
    {
      id: 1,
      title: "Our In-House Restaurant",
      subtitle: "Fresh, Local & Delicious",
      description: "Enjoy mouth-watering meals without stepping out of the resort. Our very own in-house restaurant serves freshly prepared Kumaoni delicacies and global cuisines, crafted daily by our expert chefs.",
      image: "/assets/images/restaurant_food.png",
      features: ["In-House Dining", "Fresh Local Ingredients", "Multi-Cuisine Menu"]
    },
    {
      id: 2,
      title: "Al-Fresco Dining",
      subtitle: "Under the Starry Canopy",
      description: "Enjoy a romantic dinner or a family gathering out on our manicured lawns with soft music, bonfires, and a curated barbeque menu.",
      image: "/assets/images/fine_dining.png",
      features: ["Bonfire Barbeques", "Private Canopy Setups", "Forest-Edge Ambiance"]
    }
  ];

  return (
    <section className="dining-section">
      <div className="dining-container">
        
        <div className="dining-header">
          <span className="dining-subtitle">Culinary Delights</span>
          <h2 className="dining-title">Gourmet Experiences</h2>
          <p className="dining-desc">
            Indulge in flavors as rich as the wilderness surrounding you. Our chefs combine fresh local ingredients with global techniques.
          </p>
        </div>

        <div className="dining-grid">
          {diningOptions.map((option) => (
            <div className="dining-card" key={option.id}>
              <div className="dining-img-wrapper">
                <Image 
                  src={option.image} 
                  alt={option.title} 
                  fill 
                  className="dining-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="dining-content">
                <span className="dining-card-sub">{option.subtitle}</span>
                <h3 className="dining-card-title">{option.title}</h3>
                <p className="dining-card-desc">{option.description}</p>
                <ul className="dining-features">
                  {option.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiningSection;
