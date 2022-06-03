import React, { useState } from "react";
import "./List.css";
import Header from "../../Component/Header/Header";
import Navbar from "../../Component/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
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
                  className={"date"}
                />
              )}
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
}

export default List;
