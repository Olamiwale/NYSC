import { Input } from "@/components/ui/input";

export default function Post() {


const posts = [
    {
      id: 1,
      username: "John Doe",
      location: "Lagos",
      batch: "Batch B2",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.fxwj2e1PygHGYQDTyOQjVwHaE8?pid=Api&P=0&h=220",
      content:
        "This is a sample post description. It can be of any length and contain various types of content.",
    },
    {
      id: 2,
      username: "Jane Smith",
      location: "Abuja",
      batch: "Batch A1",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.fxwj2e1PygHGYQDTyOQjVwHaE8?pid=Api&P=0&h=220",
      content:
        "This is another post with more detailed content and extra lines to show how the card scales beautifully.",
    },
  ];



  return (
    <div className="mt-10 mx-auto max-w-[600px] text-white flex flex-col justify-center p-4">

       
      <div className="flex items-center gap-4 border-gray-700 border p-3 w-full rounded-xl mb-5">
       <img src="" className="w-10 h-10 rounded-full bg-gray-600"        alt="avatar" />
        <input className="w-full focus:outline-none focus:ring-0 " placeholder="what's in your mind......" />
      </div>


       {posts.map((post) => (
        <div
          key={post.id}
          className="bg-gray-900 rounded-2xl p-5 mb-8">
          <div className="flex items-center gap-3 mb-4">

            <img src="" className="w-10 h-10 rounded-full bg-gray-600"        alt="avatar" />

            <div className="flex gap-2">
              <p className="font-semibold text-white text-sm"> {post.username}</p>
              <p className="font-semibold text-sm text-gray-400"> | {post.location} | {post.batch}</p>
            </div>

          </div>



          <p className="text-gray-200 text-sm mb-4 leading-relaxed">
            {post.content}
          </p>
          <img
            src={post.image}
            alt="post"
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
      ))}





     
    </div>
  );
}


