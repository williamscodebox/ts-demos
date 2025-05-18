import { useState } from "react";
import { FaCamera, FaPlus } from "react-icons/fa";
import Tabs from "./Tabs";

function Profile() {
  const [bannerUrl, setBannerUrl] = useState<string>(
    "https://placehold.co/1500x400"
  ); //https://example.com/banner.jpg

  const [profileUrl, setProfileUrl] = useState<string>(
    "https://placehold.co/150x150"
  ); //https://example.com/profile.jpg

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setBannerUrl(reader.result as string);
      // };
      // reader.readAsDataURL(file);
      console.log(URL.createObjectURL(file));
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setProfileUrl(reader.result as string);
      // };
      // reader.readAsDataURL(file);
      console.log(URL.createObjectURL(file));
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Profile banner"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={20} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>
      {/* Profile Picture */}
      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />{" "}
        <button className="absolute ml-[3.9rem] mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={16} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>
        {/* Profile Details */}
        <div className="ml-4">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-gray-600">Software Engineer</p>
          <p className="text-gray-600">Location: San Francisco, CA</p>
          <button className="flex gap-1 mt-4 bg-blue-600 text-white font-bold py-1 px-3 pt-0.5 pl-2 rounded hover:bg-blue-700">
            <FaPlus className="mt-1" />
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default Profile;
