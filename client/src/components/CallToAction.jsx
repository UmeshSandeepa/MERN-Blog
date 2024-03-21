import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to buy new Huawei p60 pro ?</h2>
        <p className="text-gray-500 my-2">
          Lorem ipsum dolor amet consectetur adipisicing elit.
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://consumer.huawei.com/en/phones/p60-pro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now p60 Pro
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://www.androidauthority.com/wp-content/uploads/2023/05/Huawei-P60-Pro-back-standing-on-table.jpg" />
      </div>
    </div>
  );
}
