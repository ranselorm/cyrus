import { Icon } from "@iconify/react/dist/iconify.cjs";

const TopBar = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-1 flex justify-between">
        <p>hello!</p>
        <div className="flex gap-4">
          <p className="flex items-center gap-2 text-sm">
            <Icon icon="ic:baseline-email" />
            info@cyrusmcs.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Icon icon="ic:baseline-phone" />
            +233 553 179 240
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
