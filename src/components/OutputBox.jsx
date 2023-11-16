import React from "react";

const OutputBox = ({ location }) => {

  if (!location) return null;


  const {
    "post code": postCode,
    country,
    "country abbreviation": countryAbbreviation,
    places,
  } = location;
  console.log(location);

  return (
    <section>
      <div>
        <div className="mx-auto md:w-[20%] w-[60%]">
          <h2 className="text-xl text-white font-medium">Postal Code: {postCode}</h2>
          <p className="text-xl text-white font-medium">
            Country: {country} ({countryAbbreviation})
          </p >
          <h3 className="text-xl text-white font-medium">Places:</h3>
        </div>
        <div className="flex flex-wrap justify-center max-w-[80%] items-center mx-auto">
          {places.map((place, index) => (
            <div
              key={index}
              className=" mx-5 p-5 my-5 bg-[#ffbe0b] text-white shadow-lg rounded-lg overflow-hidden"
            >
              <p className=" mb-2 p-1 text-2xl text-[#3a86ff] font-bold">
                {place["place name"]}
              </p>
              <p className="text-lg font-bold">
                State: {place.state} ({place["state abbreviation"]})
              </p>
              <p>Latitude: {place.latitude}</p>
              <p>Longitude: {place.longitude}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputBox;
