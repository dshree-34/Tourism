import React from 'react';
import FoodCard from './FoodCard'; 

const FoodandDrinks = () => {
  const locations = [
    {
      title: 'Street Food in Paris',
      description: 'Indulge in the exquisite street food offerings of Paris, from mouth-watering pastries to savory crepes.',
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/16/aa/d0/c8/cut-street-food.jpg',
    },
    {
      title: 'Dubai Delights',
      description: 'Experience the culinary wonders of Dubai, where traditional Middle Eastern flavors meet international cuisine.',
      imageUrl: 'https://www.notionsgroup.com/static/media/con_01.28ed74013ebe053a9fdb.webp',
    },
    {
        title: 'Bali Bliss',
        description: 'Discover the diverse and flavorful street food in Bali, from Balinese satay to delicious Nasi Goreng.',
        imageUrl: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/222731291.jpg?k=d2caaf3850c9b27215563c97ca3f23542082de3f51c531164bdc2a711fee054c&o=',
      },
      {
        title: 'Machu Picchu Magic',
        description: 'Explore the unique food offerings around Machu Picchu, with a mix of traditional Peruvian flavors and international influences.',
        imageUrl: 'https://i0.wp.com/machupicchurest.com/wp-content/uploads/2019/10/Machu-Pollo-1.jpeg?ssl=1',
      },
      {
        title: 'Sydney Savor',
        description: 'Savor the culinary delights of Sydney, from fresh seafood at the iconic Sydney Fish Market to delectable dishes in trendy neighborhoods.',
        imageUrl: 'https://asksydney.com.au/wp-content/uploads/buffet-315691_1280.jpg',
      },
      {
        title: 'Maldives Delicacies',
        description: 'Experience the gastronomic delights of the Maldives, where fresh seafood, coconut-infused dishes, and tropical fruits create a paradise for your taste buds.',
        imageUrl: 'https://www.fairmont.com/assets/0/104/2001/2006/4921/4929/f55ef85a-1bb4-4339-a38e-05e02dd4fa72.jpg',
      },
      {
        title: 'Rome`s Rich Flavors',
        description: 'Immerse yourself in the rich flavors of Rome, Italy, with classic pasta dishes, authentic pizzas, and delightful gelato on every corner.',
        imageUrl: 'https://resizer.otstatic.com/v2/photos/wide-huge/1/51080194.jpg',
      },
  ];

  return (
    <div>
      <h1>Food and Drinks</h1>
      <p>Dig into the best restaurants and bars, street food, and culinary hotspots around the world. Who's hungry?</p>
      <div className="cards-container">
        {locations.map((location, index) => (
          <FoodCard
            key={index}
            title={location.title}
            description={location.description}
            imageUrl={location.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodandDrinks;
