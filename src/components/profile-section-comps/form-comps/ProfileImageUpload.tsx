import { UploadImageIcon } from "../../icons";

const ProfileImageUpload = () => {
  return (
    <div className="w-full">
      <label htmlFor="imageFile">Profile Picture</label>
      <div className="relative px-[38px] py-[60px] rounded-xl bg-purpleLight text-purple font-semibold inline-flex flex-col justify-center items-center">
        <span>
          <UploadImageIcon />
        </span>
        + Upload Image
        <input
          className="absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer"
          type="file"
          id="imageFile"
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default ProfileImageUpload;
