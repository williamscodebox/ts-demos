import { useState } from "react";
import { FaCamera } from "react-icons/fa";

function Profile() {
  const [bannerUrl, setBannerUrl] = useState<string>(
    "https://placehold.co/1500x400"
  ); //https://example.com/banner.jpg

  const [profileUrl, setProfileUrl] = useState<string>(
    "https://placehold.co/150x150"
  ); //https://example.com/profile.jpg
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
            <FaCamera size={24} />
          </label>
        </button>
      </div>
    </div>
  );
}

export default Profile;
