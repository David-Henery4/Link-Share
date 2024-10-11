import Button from "./reusable/Button";

const SaveButton = () => {
  return (
    <div className="w-full mt-auto border-t border-border p-4 lgMob:py-6 lgMob:px-10 tablet:flex tablet:justify-end">
      <Button
        disabled={true} // temp obvs
        buttonType="primary"
        size="large"
        className="tablet:w-auto target:ml-auto"
      >
        Save
      </Button>
    </div>
  );
}

export default SaveButton