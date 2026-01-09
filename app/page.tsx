import { FlexBasic } from "./src/FlexBasic";
import { FlexDirection } from "./src/FlexDirection";
import { FlexWrap } from "./src/FlexWrap";
import { Flex } from "./src/Flex";
import { FlexGrow } from "./src/FlexGrow";
import { Order } from "./src/Order";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Tailwind css Flex and Grid
      </h1>
      <FlexBasic />
      <FlexDirection />
      <FlexWrap />
      <Flex />
      <FlexGrow />
      <Order />
    </>
  );
}
