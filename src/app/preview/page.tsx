import Button from "@/components/reusable/Button";
import { Heading } from "@/components/reusable/text";

const PreviewPage = () => {
  return (
    <main className="w-full min-h-[100svh] max-w-maxBodyWidth mx-auto">
      <nav className="w-full px-4 py-6">
        <menu className="w-full flex justify-center items-center gap-4">
          <li>
            <Button
              className="block"
              buttonType="secondary"
              isLink={true}
              href="/"
            >
              Back to Edit
            </Button>
          </li>
          <li>
            <Button className="block" buttonType="primary">
              Share Link
            </Button>
          </li>
        </menu>
      </nav>

      <section className="w-full mt-16 grid place-items-center">
        {/* CARD */}
        <div className="">
          {/* CARD HEADER */}
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-28 h-28 bg-purpleLight rounded-full border-4 border-purple grid place-items-center">
              <p>BW</p>
            </div>

            <div>
              <Heading size="medium">Ben Wright</Heading>
            </div>
          </div>

          {/* CARD Links */}
          <div></div>
        </div>
        {/*****/}
      </section>
    </main>
  );
};

export default PreviewPage;
