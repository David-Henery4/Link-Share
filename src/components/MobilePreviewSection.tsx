import MobilePreviewContainer from "./MobilePreviewContainer";

const MobilePreviewSection = () => {
  return (
    // Shadow is temp for development
    <div className="w-full p-6 place-items-center flex-[1] rounded-xl bg-red shadow-2xl hidden laptop:grid">
      <MobilePreviewContainer />
    </div>
  );
}

export default MobilePreviewSection