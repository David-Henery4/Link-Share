import {
  Navbar,
  LinksSection,
  // ProfileSection,
  // MobilePreviewContainer,
} from "@/components";
import Button from "@/components/reusable/Button";

export default function Home() {
  return (
    <div className="w-full min-h-[100svh]">
      <Navbar />
      <main className="w-full p-4 lgMob:p-6">
        <div className="w-full p-6 lgMob:p-10 bg-white">
          <LinksSection />
          {/* <ProfileSection/> */}
          <div className="w-full tablet:flex tablet:justify-end">
            <Button
              disabled={true}
              buttonType="primary"
              size="large"
              className="tablet:w-auto target:ml-auto"
            >
              Save
            </Button>
          </div>
        </div>

        {/* <div className="w-full bg-white">
        <MobilePreviewContainer/>
        </div> */}
      </main>
    </div>
  );
}
