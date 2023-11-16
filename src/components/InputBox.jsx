import React,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const InputBox = ({ onLocationFetch }) => {
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.zippopotam.us/IN/${postalCode}`
      );
      // setError(null);
      onLocationFetch(response.data);
       toast.success("Good Job!", {
         icon: "👏",
         style: {
           // borderRadius: "10px",
           background: "#ff006e",
           color: "#fff",
         },
       });
    } catch (error) {
      // setError("Error fetching location information. Please try again.");
      toast.error("Error fetching location information. Please try again.");
      onLocationFetch(null);
    } finally {
      setLoading(false);
     
    }
  };

  return (
    <div className=" mt-8 mb-12 relative rounded-xl">
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={postalCode}
          onChange={handleInputChange}
          placeholder="Type Zip code..."
          className="w-full p-4 pl-10 text-lg rounded-xl outline-none "
        />
        <FaSearch className="absolute top-5 left-3 text-[20px] font-medium text-gray-500" />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-4 top-3 bg-[#3a86ff] px-3 py-1 text-lg text-white rounded-md font-medium"
        >
          {loading ? "Fetching..." : "Search"}
        </button>
        <button
          type="button"
          onClick={() => onLocationFetch(null)}
          className="float-right text-[#ff006e] font-medium text-medium my-3 mx-2 bg-white p-1 rounded-lg"
        >
          Clear
        </button>
      </form>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    </div>
  );
};

export default InputBox;
