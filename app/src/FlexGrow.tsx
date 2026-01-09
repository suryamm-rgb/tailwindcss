export const FlexGrow = () => {
  return (
    <div>
      <h1 className="font-bold mt-10">
        Flex Grow - Utilities for controlling how flex items grow.
      </h1>
      <div className="flex">
        <div className=" bg-red-500 flex-none">01</div>
        <div className="bg-yellow-400 grow">02</div>
        <div className="bg-pink-300 flex-none">03</div>
      </div>
      <p className="pt-10">
        Growing items based on factor Use grow-number utilities like grow-3 to
        make flex items grow proportionally based on their growth factor,
        allowing them to fill the available space relative to each other
      </p>
      <div className="flex">
        <div className=" bg-red-500 grow-3">01</div>
        <div className="bg-yellow-400 grow-7">02</div>
        <div className="bg-pink-300 grow-3">03</div>
      </div>
      <p className="mt-10">Use grow-0 to prevent a flex item from growing </p>
      <h1>size-14 grow</h1>
      <div className="flex">
        <div className=" bg-red-500 size-14 grow">01</div>
        <div className="bg-yellow-400 size-14 grow-0">02</div>
        <div className="bg-pink-300 size-14 grow">03</div>
      </div>
    </div>
  );
};
