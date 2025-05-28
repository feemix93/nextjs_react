"use client";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const { data: session }: any = useSession();
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const router = useRouter();
  const createPrompt = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    try {
      const resp = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user?.id || "",
          tag: post.tag,
        }),
      });
      if (resp.ok) {
        router.push("/");
      }
    } catch (e) {
      console.log("Error", e);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
