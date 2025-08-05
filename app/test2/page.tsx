import { MagicText } from "@/components/ui/magic-text";

const Demo = () => {
  return (
    <div className="h-screen">
      <div className="relative flex items-center justify-start pb-[30rem] mt-[70rem]">
        <MagicText
          text={
            "Hi there! I'm preet, creator of HextaUI. Thank you so much of all the support and love you've shown me. I hope you enjoy using HextaUI as much as I enjoyed creating it.Hi there! I'm preet, creator of HextaUI. Thank you so much of all the support and love you've shown me. I hope you enjoy using HextaUI as much as I enjoyed creating it."
          }
        />
        <div>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2">
            Scroll Down 👇
          </p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
