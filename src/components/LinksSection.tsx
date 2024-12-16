import Button from "./reusable/Button";
import HeaderSection from "./reusable/HeaderSection";
import { EmptyContainer,LinksList } from "./link-section-comps";


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
        {/* <EmptyContainer/> */}
        <LinksList/>
      </div>
    </section>
  );
};

export default LinksSection;
