import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import guestsIcon from "./guests.svg";
import bedroomsIcon from "./bedrooms.svg";
import bedsIcon from "./beds.svg";
import bathsIcon from "./baths.svg";

export default function Details({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="details">
      <Heading border class="details__header">
        Деталі властивості:
      </Heading>

      <ul className="details__list">
        <ListItem imageSrc={guestsIcon}>
          <span>{guests}</span>
          <span>гості</span>
        </ListItem>
        <ListItem imageSrc={bedroomsIcon}>
          <span>{bedrooms}</span>
          <span>спальня</span>
        </ListItem>
        <ListItem imageSrc={bedsIcon}>
          <span>{beds}</span>
          <span>ліжко</span>
        </ListItem>
        <ListItem imageSrc={bathsIcon}>
          <span>{baths}</span>
          <span>ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
