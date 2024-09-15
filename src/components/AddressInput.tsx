import React from "react";
import { MapPin } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AddressInputProps {
  address: string;
  setAddress: (address: string) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({ address, setAddress }) => {
  return (
    <div className="flex space-x-4">
      <Input
        type="text"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="flex-grow"
      />
      <Button variant="outline">
        <MapPin className="mr-2 h-4 w-4" /> Use Current Location
      </Button>
    </div>
  );
};

export default AddressInput;
