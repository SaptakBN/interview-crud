import { UserPostModel, PostsDocument, PostsQuery, PostsQueryVariables } from "@/GraphQL/generated/graphql";
import { HomeInputs, Loader, Post } from "@/components";
import { useQuery } from "@apollo/client";

export function PostList() {
  const { data, error, loading, refetch } = useQuery<PostsQuery, PostsQueryVariables>(PostsDocument);

  if (loading) return <Loader />;

  if (error || !data) return <>{error?.message}</>;

  return (
    <main className="container mx-auto mt-6 px-4">
      <HomeInputs refetch={refetch} />
      {loading && <Loader />}
      <div className="space-y-4">
        {data.posts.map((post: UserPostModel, i: number) => (
          <Post post={post} key={i} />
        ))}
      </div>
    </main>
  );
}
