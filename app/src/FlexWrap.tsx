export const FlexWrap = () => {
  return (
    <div>
      <h1 className="font-bold mt-10">Flex Wrap</h1>
      <div>
        <h2 className="font-semibold">flex-wrap its flex-nowrap</h2>
        <div className="flex flex-nowrap gap-10 w-40 border overflow-x-auto py-5 px-5">
          <div className="bg-red-300 w-24">01</div>
          <div className="bg-green-300 w-24">02</div>
          <div className="bg-blue-300 w-24">03</div>
          <div className="bg-blue-300 w-24">04</div>
        </div>
      </div>
      <div>
        <h2 className="font-semibold mt-5">flex-wrap its flex-wrap</h2>
        <div className="flex flex-wrap gap-10 w-50 border py-5 px-5">
          <div className="bg-red-300 w-4">01</div>
          <div className="bg-green-300 w-24">02</div>
          <div className="bg-blue-300 w-24">03</div>
          <div className="bg-blue-300 w-24">04</div>
        </div>
      </div>
      <div>
        <h2 className="font-semibold mt-5">
          flex-wrap-reverse its flex-wrap-reverse
        </h2>
        <div className="flex flex-wrap-reverse gap-10 w-50 border py-5 px-5">
          <div className="bg-red-300 w-4">01</div>
          <div className="bg-green-300 w-24">02</div>
          <div className="bg-blue-300 w-24">03</div>
          <div className="bg-blue-300 w-24">04</div>
        </div>
      </div>
    </div>
  );
};
