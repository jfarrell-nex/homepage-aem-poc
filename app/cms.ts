import axios from "axios";

interface AEMResponse {
  properties: {
    elements: {
      promotionName: {
        value: string;
      };
      imageUrl: {
        value: string;
      };
    };
  };
}

export const fetchCMSData = async () => {
  const res = await axios.get<AEMResponse>(
    "http://localhost:4502/api/assets/cheap-flight-promotion.json",
    {
      auth: {
        username: process.env.aemUsername ?? "",
        password: process.env.aemPassword ?? "",
      },
    }
  );
  return res.data.properties.elements;
};

// const CMS_DATA: CMS_DATA = {
//   promotions: [
//     {
//       title: "Special offers",
//       image_url:
//         "https://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Cyprus/Generic/56221136_337x337.jpg",
//     },
//     {
//       title: "Cheap flights",
//       image_url:
//         "https://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Spain/Barcelona-BCN/683919172_337x337.jpg",
//     },
//     {
//       title: "All-inclusive",
//       image_url:
//         "https://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Maldives/590301647_1200x675.jpg",
//     },
//     {
//       title: "Summer holidays",
//       image_url:
//         "https://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Spain/Mallorca-PMI/37595633_1200x675.jpg",
//     },
//     {
//       title: "Last-minute",
//       image_url:
//         "https://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Spain/Ibiza-IBZ/691047117_480x270.jpg",
//     },
//     {
//       title: "City breaks",
//       image_url:
//         "https://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Netherlands/Amsterdam-AMS/824856792_600x337.jpg",
//     },
//     {
//       title: "Business class sale",
//       image_url:
//         "https://www.britishairways.com/assets/images/MediaHub/Media-Database/Rights-managed-RM/Cabins/Club-Suite/cw-woman-relaxing-in-club-suite_480x480.jpg",
//     },
//     {
//       title: "Sale now on",
//       image_url:
//         "https://www.britishairways.com/assets/images/MediaHub/Media-Database/Rights-managed-RM/artwork/Sale/ba-jan-sale-email-header-v2_337x337.jpg",
//     },
//   ],
//   somber_mode: false,
// };
