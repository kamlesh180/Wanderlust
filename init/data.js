const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    
      image:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Romantic Paris Escape",
    description: "Enjoy the charm of Paris with stunning views of the Eiffel Tower and cozy cafés.",
    image: "https://images.unsplash.com/photo-1543340713-8c3d7c1f1c4b?auto=format&fit=crop&w=800&q=60",
    price: 1350,
    location: "Paris",
    country: "France"
  },
  {
    title: "Taj Mahal Heritage Stay",
    description: "Experience royal hospitality near the iconic Taj Mahal in a luxurious heritage hotel.",
    image: "https://images.unsplash.com/photo-1583241982061-3b7c1e4f1f4f?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Agra",
    country: "India"
  },
  {
    title: "Safari Adventure",
    description: "Explore the wild savannahs of Kenya with guided safaris and luxury tents.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Maasai Mara",
    country: "Kenya"
  },
  {
    title: "Beachfront Bliss",
    description: "Relax on white sandy beaches with crystal-clear waters and tropical vibes.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Tokyo Skyline Stay",
    description: "Stay in the heart of Tokyo with panoramic views and access to vibrant nightlife.",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Historic Rome Retreat",
    description: "Walk through ancient ruins and enjoy Italian cuisine in the Eternal City.",
    image: "https://images.unsplash.com/photo-1587486913049-4c1b4d4e9c4e?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Sydney Harbour View",
    description: "Wake up to the Opera House and Harbour Bridge from your waterfront suite.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Sydney",
    country: "Australia"
  },
    {
    title: "Santorini Cliffside Escape",
    description: "Bask in the beauty of whitewashed villas and blue domes overlooking the Aegean Sea.",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60",
    price: 1250,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Swiss Alps Chalet",
    description: "Cozy up in a wooden chalet surrounded by snow-capped peaks and alpine charm.",
    image: "https://images.unsplash.com/photo-1606788075761-5c3e2f3f3f3f?auto=format&fit=crop&w=800&q=60",
    price: 1450,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Icelandic Aurora Lodge",
    description: "Watch the Northern Lights from your glass-roofed lodge in the Icelandic wilderness.",
    image: "https://images.unsplash.com/photo-1606788075761-5c3e2f3f3f3f?auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Reykjavik",
    country: "Iceland"
  },
  {
    title: "Petra Desert Camp",
    description: "Sleep under the stars near the ancient city of Petra in a Bedouin-style camp.",
    image: "https://images.unsplash.com/photo-1606788075761-5c3e2f3f3f3f?auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Petra",
    country: "Jordan"
  },
  {
    title: "Bali Jungle Villa",
    description: "Immerse yourself in nature with a private villa surrounded by lush rainforest.",
    image: "https://images.unsplash.com/photo-1606788075761-5c3e2f3f3f3f?auto=format&fit=crop&w=800&q=60",
    price: 1150,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Cape Town Ocean View",
    description: "Enjoy panoramic ocean views and Table Mountain from your luxury suite.",
    image: "https://images.unsplash.com/photo-1606788075761-5c3e2f3f3f3f?auto=format&fit=crop&w=800&q=60",
    price: 1350,
    location: "Cape Town",
    country: "South Africa"
  } 
];

module.exports = { data:sampleListings };