import {
  Navbar,
  LinksSection,
  ProfileSection,
  MobilePreviewSection,
  SaveButton
} from "@/components";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-[100svh]">
      <Navbar />
      <main className="w-full flex flex-row-reverse gap-6 flex-grow-[1] p-4 lgMob:p-6">
        {/* Shadow is temp for development */}
        <div className="w-full flex flex-col justify-start items-start max-w-[800px] mx-auto flex-[2] rounded-xl bg-white shadow-2xl laptop:max-w-none laptop:m-0">
          {/* <LinksSection /> */}
          <ProfileSection/>
          <SaveButton/>
        </div>

        {/* Shadow is temp for development */}
        <MobilePreviewSection/>
      </main>
    </div>
  );
}
