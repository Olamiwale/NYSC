import React from "react";

export default function Post() {
  return (
    <div>
      <div className="w-full">
        <div className="flex justify-between p-4 mx-8 ">
          <div className="rounded-full bg-gray-600 w-12 h-12 flex items-center"></div>

          <input
            placeholder="talk.."
            className="p-1 border-1 w-[400px] rounded-full"
          />
        </div>

        <div className="p-4 mx-8">
          <div className="flex items-center gap-5 mb-4">
            <img src="" className="w-10 h-10 rounded-full bg-gray-600 " />
            <p className="font-bold">
              <span>Username</span> | <span>Lagos</span> | <span>Batch B2</span>
            </p>
          </div>

          <div>
            <p className="mb-4">
              This is a sample post description. It can be of any length and
              contain various types of content.
            </p>

            <img
              src="https://tse3.mm.bing.net/th/id/OIP.fxwj2e1PygHGYQDTyOQjVwHaE8?pid=Api&P=0&h=220"
              className="w-full h-96 bg-gray-600 mb-4"
            />
          </div>
        </div>
        <div className="p-4 mx-8">
          <div className="flex items-center gap-5 mb-4">
            <img src="" className="w-10 h-10 rounded-full bg-gray-600 " />
            <p className="font-bold">
              <span>Username</span> | <span>Lagos</span> | <span>Batch B2</span>
            </p>
          </div>

          <div>
            <p className="mb-4">
              This is a sample post description. It can be of any length and
              contain various types of content.
              This is a sample post description. It can be of any length and
              contain various types of content.
              This is a sample post description. It can be of any length and
              contain various types of content.
            </p>

            <img
              src="https://tse3.mm.bing.net/th/id/OIP.fxwj2e1PygHGYQDTyOQjVwHaE8?pid=Api&P=0&h=220"
              className="w-full h-96 bg-gray-600 mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
