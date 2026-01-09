export const Flex = () => {
  return (
    <div>
      <h1 className="font-semibold mt-10">Flex</h1>

      <h2 className="font-semibold mt-5">
        flex-number utilities (flex-1) allow items to grow and shrink, ignoring
        their initial width
      </h2>

      <div className="flex flex-wrap gap-6 border p-5">
        {/* Fixed item */}
        <div className="bg-red-300 w-14 flex-none text-center">01</div>

        {/* Flexible items */}
        <div className="bg-green-300 w-64 flex-1 text-center">02</div>
        <div className="bg-blue-300 w-32 flex-1 text-center">03</div>
      </div>
      <h2 className="font-semibold mt-5">
        Use flex-initial to allow a flex item to shrink but not grow, taking
        into account its initial size:
      </h2>
      <div className="flex flex-wrap gap-6 border p-5">
        <div className="bg-red-300 w-14 flex-none text-center">01</div>
        <div className="bg-green-300 w-64 flex-initial  text-center">02</div>
        <div className="bg-blue-300 w-32 flex-initial  text-center">03</div>
      </div>
      <h2 className="font-semibold mt-5">
        Use flex-auto to allow a flex item to grow and shrink, taking into
        account its initial size
      </h2>
      <div className="flex flex-wrap gap-6 border p-5">
        <div className="bg-red-300 w-14 flex-none text-center">01</div>
        <div className="bg-green-300 w-64 flex-auto  text-center">02</div>
        <div className="bg-blue-300 w-32 flex-auto  text-center">03</div>
      </div>
      <h2 className="font-semibold mt-5">
        Use flex-none to prevent a flex item from growing or shrinking:
      </h2>
      <div className="flex flex-wrap gap-6 border p-5">
        <div className="bg-red-300 w-14 flex-none text-center">01</div>
        <div className="bg-green-300  flex-none  text-center">02</div>
        {/* //w-64 */}
        <div className="bg-blue-300 w-32 flex-1  text-center">03</div>
      </div>
    </div>
  );
};
