import { BaseText } from "../../reusable/text";
import { UploadImageIcon } from "../../icons";

const ProfileImageUpload = () => {
  return (
    <div className="w-full">
      <BaseText size="medium">Profile Picture</BaseText>
      <div>
        <button className="px-[38px] py-[60px] rounded-xl bg-purpleLight text-purple font-semibold inline-flex flex-col justify-center items-center">
          <span>
            <UploadImageIcon />
          </span>
          + Upload Image
        </button>
        
      </div>
    </div>
  );
};

export default ProfileImageUpload;
