import React, { useState } from "react";
import "./List.css";
import Header from "../../Component/Header/Header";
import Navbar from "../../Component/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Component/SearchItem/SearchItem";
function List() {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  const [openOption, setOpenOption] = useState(false);
  return (
    // 01:00:00

    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input
                type="text"
                placeholder={destination}
                className="lsInput"
              />
            </div>
            <div className="lsItem">
              <label htmlFor="" className="">
                Check-in Date
              </label>
              <span
                onClick={() => {
                  setOpenOption(!openOption);
                }}
              >
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )} `}
              </span>
              {openOption && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className=""
                />
              )}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
                <div className="lsItemOptionsItem">
                  <span className="lsOptionsText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" min={1} />
                </div>
                <div className="lsItemOptionsItem">
                  <span className="lsOptionsText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" min={1} />
                </div>
                <div className="lsItemOptionsItem">
                  <span className="lsOptionsText">Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={option.adult}
                    min={1}
                  />
                </div>
                <div className="lsItemOptionsItem">
                  <span className="lsOptionsText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={option.children}
                    min={0}
                  />
                </div>
                <div className="lsItemOptionsItem">
                  <span className="lsOptionsText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={option.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
