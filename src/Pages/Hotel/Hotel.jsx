import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../Component/Navbar/Navbar";
import Header from "../../Component/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../Component/MailList/MailList";
import Footer from "../../Component/Footer/Footer";

const photos = [
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348250017.jpg?k=8ad42f450fe90003683307814ab5eff8e6ff951c6bc7462d70cc8b51fd1ee33d&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348249882.jpg?k=837636858151f4b3ff48d60f9b2b130e7627128584b66ce1819ff74b6302a2d2&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348251294.jpg?k=ef8bf953d12d59c7314fc8f85ed9ce3ebd185b8d98cf38c249d8e5cdf08d5cbc&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348250017.jpg?k=8ad42f450fe90003683307814ab5eff8e6ff951c6bc7462d70cc8b51fd1ee33d&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348251616.jpg?k=16fe41940f5b102235066b36132f86fec7aea5043f2dd0c2d3146f4375efaa1e&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348250017.jpg?k=8ad42f450fe90003683307814ab5eff8e6ff951c6bc7462d70cc8b51fd1ee33d&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348250017.jpg?k=8ad42f450fe90003683307814ab5eff8e6ff951c6bc7462d70cc8b51fd1ee33d&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348250017.jpg?k=8ad42f450fe90003683307814ab5eff8e6ff951c6bc7462d70cc8b51fd1ee33d&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348250017.jpg?k=8ad42f450fe90003683307814ab5eff8e6ff951c6bc7462d70cc8b51fd1ee33d&o=&hp=1",
  },
];

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumberIndex;
    if (direction === "l") {
      newSlideNumberIndex = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumberIndex = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumberIndex);
  };

  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} className="sliderImg" alt="" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Mesin Hotel</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Mersin mahallesi Canan sokak No:12</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $110 at this property and get a free airport taxi{" "}
          </span>
          <div className="hotelImages">
            {photos.map((photos, index) => (
              <div className="hotelImageWrapper ">
                <img
                  onClick={() => handleOpen(index)}
                  src={photos.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotleTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores ea incidunt facilis vitae, obcaecati aliquid rerum
                cupiditate quibusdam eveniet eos, nulla, provident ut dolor? Quo
                quisquam, corrupti consequatur rem voluptatem amet mollitia,
                velit incidunt cumque quae vitae perspiciatis saepe. Voluptatem
                praesentium excepturi eveniet explicabo expedita tempora alias
                eius ratione dolore.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae, sunt.
              </span>
              <h2>
                <b>$110</b> (9 night)
              </h2>
              <button>Reserve or Book new!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
