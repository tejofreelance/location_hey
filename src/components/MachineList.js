import React from "react";
import MachineCard from "./MachineCard";

export default function MachineList({ filteredCategories, filteredSearch }) {
  return (
    <>
      {filteredCategories.map((item) => (
        <ul>
          {/* Filter and map through the second level of API */}
          <div className="row">
            {item.location_details.filter(filteredSearch).map((subItem) => (
              <MachineCard
                // image={subItem.name_location}
                name_location={subItem.name_location}
                address={subItem.address}
                map={subItem.map}
              />
            ))}
          </div>
        </ul>
      ))}
    </>
  );
}
