

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
    <div className="flex flex-col justify-center items-center gap-6 mt-10 px-6">

       
      <div className="flex items-center gap-4 bg-gray-800 p-3 rounded-xl shadow-md">
        <div className="rounded-full bg-green-600 w-12 h-12 flex items-center justify-center text-white font-bold">
          P
        </div>
        <input
          placeholder="What's on your mind?"
          className="flex-1 bg-gray-700 text-white placeholder-gray-400 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>


       {posts.map((post) => (
        <div
          key={post.id}
          className="bg-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-green-900/20 transition-all"
        >
          <div className="flex items-center gap-3 mb-3">
            <img
              src=""
              className="w-10 h-10 rounded-full bg-gray-600"
              alt="avatar"
            />
            <div>
              <p className="font-semibold text-white text-sm">
                {post.username}
              </p>
              <p className="text-xs text-gray-400">
                {post.location} • {post.batch}
              </p>
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


