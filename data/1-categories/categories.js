const { getObjectId } = require("mongo-seeding");

const categories = [
  { name: "Cars & trucks", key: "car-truck" },
  { name: "Business equipment", key: "business-equipment" },
  { name: "Clothing & shoe", key: "clothing-shoes" },
  { name: "Exercise", key: "exercise" },
  { name: "Software", key: "software" },
  { name: "CDs & DVDs", key: "cds-dvds" },
  { name: "Appliances", key: "appliances" },
  { name: "Jewelry & accessories", key: "jewelry-accessories" },
  { name: "Boats & marine", key: "boats-marine" },
  { name: "Farming", key: "farming" },
  { name: "Photography", key: "photography" },
  { name: "Tickets", key: "tickets" },
  { name: "Bicycles", key: "bicycles" },
  { name: "Baby & kids", key: "baby-kids" },
  { name: "Auto parts	", key: "auto-parts" },
  { name: "Antiques", key: "antiques" },
  { name: "Audio equipment", key: "audio" },
  { name: "Home & garden", key: "home-garden" },
  { name: "Pet supplies", key: "pet-supplies" },
  { name: "Sports & outdoors", key: "sports-outdoors" },
  { name: "Motorcycles", key: "motorcycles" },
  { name: "Video equipment", key: "video-equipment" },
  { name: "Electronics", key: "electronics" },
  { name: "Furniture", key: "furniture" },
  { name: "Beauty & health", key: "beauty-health" },
  { name: "Campers & RVs", key: "campers-rvs" },
  { name: "Arts & crafts", key: "arts-crafts" },
  { name: "Musical instruments", key: "musical-instruments" },
  { name: "Books & magazines", key: "books-magazines" },
  { name: "Cell phones", key: "cell-phones" },
  { name: "Games & toys", key: "games-toys" },
  { name: "Computer equipment", key: "computer" },
  { name: "Collectibles", key: "collectibles" },
  { name: "Household", key: "household" },
  { name: "Free", key: "free" },
  { name: "General", key: "general" },
  { name: "Tools & machinery", key: "tools-machinery" },
];

const mapToEntities = (categories) => {
  return categories.map((category, index) => {
    const id = getObjectId("category-" + index);

    return {
      id: id,
      name: category.name,
      key: category.key,
    };
  });
};

module.exports = mapToEntities(categories);
