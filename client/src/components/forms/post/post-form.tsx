import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CreatePostDocument, CreatePostMutation, CreatePostMutationVariables } from "@/GraphQL/generated/graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostFormData, postValidator } from "@/validators/create-post.validator";

export const PostForm = ({ refetch, close }: { refetch: () => void; close: () => void }) => {
  const [create, { data, loading, error }] = useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument
  );

  const {
    register: registerInput,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<PostFormData>({
    resolver: zodResolver(postValidator),
  });

  async function handleCreate(value: PostFormData) {
    console.log(value);
    const response = await create({
      variables: {
        postArg: value,
      },
    });
    console.log({ response, data, loading, error });
    if (response.data) {
      console.log(response.data.createPost);
      refetch();
      close();
    }
  }

  return (
    <div className="">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleCreate)}>
        <input
          className="border-2 border-gray-300 rounded-md h-full px-4 py-2"
          type="text"
          placeholder="Title"
          {...registerInput("title")}
        />
        {errors.title && touchedFields.title && <p>{errors.title.message}</p>}
        <textarea
          rows={8}
          className="border-2 border-gray-300 rounded-md h-full px-4 py-2"
          placeholder="Content"
          {...registerInput("content")}
        />
        {errors.content && touchedFields.content && <p>{errors.content.message}</p>}
        <button className="bg-violet-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};
