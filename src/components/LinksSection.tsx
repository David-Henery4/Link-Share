import Button from "./reusable/Button";
import HeaderSection from "./reusable/HeaderSection";
import { IllustrationEmpty } from "./icons";
import { BaseText } from "./reusable/text";

const LinksSection = () => {
  return (
    <section className="w-full p-6 lgMob:p-10">
      <HeaderSection
        description="Add/edit/remove links below and then share all your profiles with
            the world!"
        title="Customize your links"
      />
      <div className="w-full mt-10">
        <Button buttonType="secondary" size="large">
          + Add new link
        </Button>
        <div className="w-full my-6 py-5 text-center grid gap-6 smallTablet:py-20">
          {/* Illustration Container 250px max-width on tablet & above */}
          <div className="w-full max-w-32 mx-auto">
            <IllustrationEmpty />
          </div>
          <h2 className="font-bold text-2xl">Let’s get you started</h2>
          <BaseText className="max-w-[488px] mx-auto" size="medium">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </BaseText>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
