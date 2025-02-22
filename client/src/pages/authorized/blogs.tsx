import { Header, BlogList } from "@/components";
import { PendingList } from "@/components/blogs/pending-list";
import { selectAuth, useAppSelector } from "@/redux";

const Blogs = () => {
  const { session } = useAppSelector(selectAuth);
  if (session)
    return (
      <main className="bg-gray-100 font-roboto h-screen">
        <Header session={session} />
        {session.user.role === "user" && <BlogList userId={session.user.id} />}
        {session.user.role === "admin" && <PendingList />}
      </main>
    );
};

export default Blogs;
