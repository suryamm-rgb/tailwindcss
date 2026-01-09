export const Order = () => {
  return (
    <div className="mt-10">
      <h1 className="font-bold">Order</h1>
      <p>Utilities for controlling the order of flex and grid items.</p>
      <div className="flex justify-between">
        <div className="order-1 bg-red-400 px-4 py-2">01</div>
        <div className="order-3 bg-green-400 px-4 py-2">02</div>
        <div className="order-2 bg-blue-400 px-4 py-2">03</div>
      </div>
      <h1 className="mt-5 ">Ordering items first or last</h1>
      <p>
        Use the order-first and order-last utilities to render flex and grid
        items first or last:
      </p>
      <div className="flex justify-between">
        <div className="order-last bg-red-400 px-4 py-2">01</div>
        <div className=" bg-green-400 px-4 py-2">02</div>
        <div className="order-first bg-blue-400 px-4 py-2">03</div>
      </div>

      <h2 className="font-semibold">Using negative order values</h2>
      <div className="flex gap-4">
        <div className="-order-1 bg-red-400 px-4 py-2">01 (-order-1)</div>
        <div className="order-0 bg-green-400 px-4 py-2">02 (order-0)</div>
        <div className="order-1 bg-blue-400 px-4 py-2">03 (order-1)</div>
      </div>
    </div>
  );
};
