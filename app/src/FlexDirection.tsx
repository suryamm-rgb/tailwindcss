export const FlexDirection = () => {
  return (
    <div>
      <h1 className="font-bold mt-10">Flex Direction</h1>
      <div>
        <h2>Row Direction flex-row</h2>
        <div className="flex flex-row gap-10 ">
          <div className="bg-green-400">01</div>
          <div className="bg-pink-500">02</div>
          <div className="bg-red-500">03</div>
        </div>
      </div>
      <div className="mt-10 font-bold">
        <h2>Row Direction flex-row-reverse</h2>
        <div className="flex flex-row-reverse gap-10 ">
          <div className="bg-green-400">01</div>
          <div className="bg-pink-500">02</div>
          <div className="bg-red-500">03</div>
        </div>
      </div>
      <div className="mt-10 font-bold">
        <h2>Col Direction flex-col</h2>
        <div className="flex flex-col gap-5 ">
          <div className="bg-green-400">01</div>
          <div className="bg-pink-500">02</div>
          <div className="bg-red-500">03</div>
        </div>
      </div>
      <div className="mt-10 font-bold">
        <h2>Col Direction flex-col-reverse</h2>
        <div className="flex flex-col-reverse gap-5 ">
          <div className="bg-green-400">01</div>
          <div className="bg-pink-500">02</div>
          <div className="bg-red-500">03</div>
        </div>
      </div>
    </div>
  );
};
