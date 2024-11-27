export interface City {
  id: number;
  name: string;
  country: string;
  longitude: number;
  latitude: number;
}

interface SearchResponse {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      address: {
        country: string;
      };
      place_id: number;
      name: string;
    };
  }[];
}

export const searchCity = async (city: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?city=${city}&format=geojson&addressdetails=1&layer=address`
  );

  const data: SearchResponse = await res.json();

  const cities: City[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      country: feature.properties.address.country,
      name: feature.properties.name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
    };
  });

  console.log(data);
  return cities;
};
