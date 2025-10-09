import { useEffect, useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000";

interface Post {
  id?: string;
  content: string;
}

export default function CreatePost() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  

  const token = localStorage.getItem("token");

  

  const createPost = async () => {
    if (!content.trim()) return alert("Post cannot be empty");

    const res = await fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content }),
    });

    const newPost = await res.json();

    if (res.ok) {
      setPosts((prev) => [newPost, ...prev]);
      setContent("");
    } else {
      alert(newPost.msg || "Error creating post");
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-[10%]">
      <h1 className="text-2xl font-bold mb-10">POSTS</h1>
      <textarea
        name="content"
        placeholder="Write something..."
        className="border rounded p-2 w-[400px] h-24"
        value={content}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
      />
      <Button className="mt-10" onClick={createPost}>Submit</Button>

      <div className="mt-6 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Posts</h2>
        {posts.length === 0 ? (
          <p>No posts yet</p>
        ) : (
          posts.map((post, i) => (
            <div key={post.id || i} className="border rounded p-3 w-[400px]">
              {post.content}
            </div>
          ))
        )}
      </div>
    </div>
  );
}


/*
  useEffect(() => {
    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch(`${baseUrl}/posts`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setPosts(data);
  };
*/