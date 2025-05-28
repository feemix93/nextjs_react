import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  await connectToDB();
  const newPrompt = new Prompt({
    creator: userId,
    tag,
    prompt,
  });
  console.log("first4", newPrompt);
  try {
    await newPrompt.save();
    return new Response(
      JSON.stringify(newPrompt, {
        status: 201,
      })
    );
  } catch (e) {
    console.log("Error", e);
    return new Response("Failed to create new Prompt", {
      status: 201,
    });
  }
};
