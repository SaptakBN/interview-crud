import { useQuery } from "@apollo/client";
import { MeDocument, MeQuery, MeQueryVariables } from "@/GraphQL/generated/graphql";

export const Header = () => {
  const { data, error } = useQuery<MeQuery, MeQueryVariables>(MeDocument);

  if (error || !data) return <>{error?.message}</>;
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">GraphQL CRUD</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">
            <strong>{data.me.name}</strong>
          </span>
        </div>
      </div>
    </header>
  );
};
