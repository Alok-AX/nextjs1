import { signIn } from "./auth";

export const addPost = async (formData) =>{
    "use server";

    // const title = formData.get("title");
    // const desc = formData.get("description");
    // const slug = formData.get("slug");

    // destructuring data
    const { title, description ,slug,userId} =Object.fromEntries(formData)



    console.log(title,description,slug,userId);

    
}


export const handleGithubLogin = async () =>{
    "use server";
     await signIn("github");
  }

