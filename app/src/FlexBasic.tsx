export const FlexBasic = () => {
  return (
    <>
      <h1>Using the spacing scale</h1>
      <div className="flex flex-row  gap-3 text-center">
        <div className="bg-red-500 basis-64">01</div>
        <div className="bg-yellow-500 basis-64">02</div>
        <div className="bg-green-500 basis-lg">04</div>
      </div>
      <div>
        <h1>Using the container scale</h1>
        <div className="flex flex-row">
          <div className="bg-red-500 basis-3xs">01</div>
          <div className="bg-yellow-500 basis-2xs">02</div>
          <div className="bg-green-500 basis-xs">03</div>
          <div className="bg-blue-500 basis-sm">04</div>
        </div>
      </div>
      <div>
        <h1>Using percentages</h1>
        <div className="flex flex-row">
          <div className=" bg-green-700 basis-1/3">01</div>
          <div className=" bg-red-700 basis-2/3">02</div>
        </div>
      </div>
      <div>
        <h1>Using percentages</h1>
        <div className="flex flex-row">
          <div className=" bg-green-700 basis-1/4">01</div>
          <div className=" bg-red-700 basis-2/4">02</div>
          <div className="bg-yellow-500 basis-1/4">02</div>
        </div>
      </div>
    </>
  );
};
