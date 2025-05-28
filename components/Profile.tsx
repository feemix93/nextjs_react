"use client";
import PromptCard from "./PromptCard";
type ProfileProps = {
  name: string;
  desc: string;
  data: any[];
  handleTagClick: (e: any) => void;
  handleEdit: (e: any) => void;
  handleDelete: (e: any) => void;
};
type Prompt = {
  _id: string;
  prompt: string;
  tag: string;
};
const Profile = ({
  name,
  desc,
  data,
  handleTagClick,
  handleEdit,
  handleDelete,
}: ProfileProps) => {
  console.log("ffaklfaklfk", data);
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name}Profile</span>
      </h1>
      <p className="desc">{desc}</p>
      <div className="mt-10 prompt_layout ">
        {data.map((post: Prompt) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={() => {
              handleTagClick && handleTagClick(post);
            }}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
