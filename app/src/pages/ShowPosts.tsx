import { Button } from "@/components/ui/button";

const baseUrl = "http://localhost:5000";

export default function ShowPosts() {
  const showPosts = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login first");

    const res = await fetch(`${baseUrl}/posts`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    console.log("My Posts:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex flex-col gap-4 items-start">
      <h1 className="text-2xl font-bold">SHOW POSTS</h1>
      <Button onClick={showPosts}>Show Posts</Button>
    </div>
  );
}
