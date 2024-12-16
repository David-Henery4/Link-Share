import DragAndDropIcon from "../../icons/DragAndDropIcon";
import Button from "../../reusable/Button";

const LinkContainer = () => {
  return (
    <div className="w-full p-5 rounded-xl bg-lightGrey">

      <div className="w-full flex justify-between items-center">

        <div className="flex justify-start items-center gap-2 font-bold text-grey">
          <div className="hover:cursor-pointer">
            <DragAndDropIcon />
          </div>
          <h2>Link #1</h2>
        </div>

        <div>
          <Button
            buttonType="third"
            className="font-medium p-0 hover:text-darkGrey"
          >
            Remove
          </Button>
        </div>

      </div>

      <form>
        
        <div className="">
          <label htmlFor="platform">Platform</label>
          <select name="platform" id="platform">
            <option value="github"></option>
          </select>
        </div>

        <div className="">
          <label htmlFor="link">Link</label>
          <input type="text" name="link" id="link" />
        </div>

      </form>

    </div>
  );
};

export default LinkContainer;
