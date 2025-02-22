import { BlogList } from "@/components";
import { PendingList } from "@/components/blogs/pending-list";
import { LoginResponse } from "@/interfaces/login.interface";

const Blogs = ({ session }: { session: LoginResponse | null }) => {
  if (session)
    return (
      <>
        {session.user.role === "user" && <BlogList userId={session.user.id} />}
        {session.user.role === "admin" && <PendingList />}
      </>
    );
};

export default Blogs;
