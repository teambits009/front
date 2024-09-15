import { Input } from "antd";
import React from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

class StoreSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  render() {
    const { country, region } = this.state;
    return (
      <div>
        <div className="bg-white p-[25px]  grid gap-[10px] mb-[50px] shadow-custom rounded-xl">
          <p className="uppercase text-[24=0px] font-semibold">
            store information
          </p>
          <label>Store Name</label>
          <Input required type="text" placeholder="Enter store name" />
          <label>Store Description</label>
          <Input required type="text" placeholder="Enter store description" />
          <hr />
          <p className="uppercase text-[24=0px] font-semibold">
            Contact Information
          </p>
          <div className="flex gap-[10px]">
            <div>
              <label>Store Phone Number</label>
              <Input
                required
                type="number"
                min="8"
                placeholder="Store Phone Number"
              />
            </div>
            <div>
              <label>Store Email</label>
              <Input required type="email" placeholder="Store Email" />
            </div>
          </div>
          <hr />
          <p className="uppercase text-[24=0px] font-semibold">Address</p>
          <label>Country</label>
          <div>
            <CountryDropdown
              classes="country"
              value={country}
              onChange={(val) => this.selectCountry(val)}
            />
          </div>
          <label>Address</label>
          <Input type="text" placeholder="Store Address" required />
          <div className="md:flex grid gap-[10px]">
            <div className="grid w-[100%]">
              <label>City</label>
              <Input type="text" placeholder="City" required />
            </div>
            <div className="grid w-[100%]">
              <label>Region</label>
              <RegionDropdown
                classes="county"
                country={country}
                value={region}
                onChange={(val) => this.selectRegion(val)}
              />
            </div>
            <div className="grid w-[100%]">
              <label>Postal Code</label>
              <Input type="text" placeholder="Postal Code" required />
            </div>
          </div>
          <div className="flex justify-between">
            <button className="text-white font-semibold bg-red-500 px-[20px] py-[5px] rounded-lg">
              Cancel
            </button>
            <button className="border-2 font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreSettings;
