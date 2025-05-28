"use client";
import { useState, useEffect, ChangeEvent } from "react";
import PromptCard from "./PromptCard";
type PromptCardProps = {
  data: any;
  handleTagClick: (e: any) => void;
  handleEdit: () => void;
  handleDelete: () => void;
};
type Prompt = {
  _id: string;
  prompt: string;
  tag: string;
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const PromptCardList = ({
    data,
    handleTagClick,
    handleEdit,
    handleDelete,
  }: PromptCardProps) => {
    return (
      <div className="mt-16 prompt_layout ">
        {data.map((post: Prompt) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    );
  };
  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch("api/prompt");
      const data = await res.json();
      setPosts(data);
    };
    fetchPrompts();
  }, []);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {};
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type={"text"}
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    </section>
  );
};

export default Feed;
