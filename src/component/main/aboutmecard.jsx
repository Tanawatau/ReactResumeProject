import React from "react";
import { ArtStationIconLight, FacebookIconLight, IgIconLight } from "../common/svg";
import { ImageCard } from "../common/imagecard";

const AboutMeCard = () => {
  const cardInfomation = {
    firstName: "Tanawat",
    lastName: "Ausapimaskul",
    imgLink: 'https://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/443823550_10232546945560281_7182330679042599268_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHs8pJMsI69b7yZcFjStbOuMpMwAnwax6EykzACfBrHoX0PvJQH58nMp9J4_ND2j8nhmS7D19hdw5Lbrr8Crhb3&_nc_ohc=wUM1KrbVilYQ7kNvgGafuuH&_nc_ht=scontent.fbkk29-9.fna&oh=00_AYCjDc4QzDZVYeYvEfY7lDX8Q60PkR5wp61DzXoGoJPtTw&oe=664DCCFE',
    position: ["frontend developer", "3D Artist"],
    location: "Bangkok, Thailand",
    socialMediaLink: [
      {
        name: "Facebook",
        icon: <FacebookIconLight />,
        link: "https://www.facebook.com/profile.php?id=100002457690604",
      },
      {
        name: "IG",
        icon: <IgIconLight />,
        link: "https://www.instagram.com/ausapimaskul/",
      },
      {
        name: "ArtStation",
        icon: <ArtStationIconLight />,
        link: "https://www.artstation.com/tanawatausapimaskul",
      },
    ],
  };

  const { firstName, lastName, imgLink, position, location } = cardInfomation;

  return (
    <div className="w-[360px] items-center gap-6 px-8 py-4 border-2 rounded-3xl bg-[#1E1E1E] border-gray-100/10 flex flex-col">
      <div className="NameSection w-full">
        <div className="Icon"></div>
        <div className="FirstName text-2xl font-bold">{firstName}</div>
        <div className="LastName text-2xl font-bold">{lastName}</div>
      </div>
      <div className="ImageProfile size-full">
        <ImageCard link={imgLink} zoomHover={true}/>
      </div>
      <div className="Position text-sm w-full">
        Position<div className="text-lg">{position.join(", ")}</div>
      </div>
      <div className="Loaction text-sm w-full">
        Based in:<div className="text-lg">{location}</div>
      </div>
      <div className="ContactLink"></div>
      <div className="SkipToformButton"></div>
    </div>
  );
};

export default AboutMeCard;
