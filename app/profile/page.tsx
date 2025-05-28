"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ProfileComponent from "@components/Profile";

const Profile = () => {
  const { data: session }: any = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    if (session?.user?.id) fetchPosts();
  }, []);
  const handleEdit = () => {};
  const handleDelete = async () => {};
  const handleTagClick = async () => {};
  return (
    <ProfileComponent
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleTagClick={handleTagClick}
    />
  );
};

export default Profile;
