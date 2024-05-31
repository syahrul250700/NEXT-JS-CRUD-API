import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data } = useSession();
  return (
    <Layout>
      <title>NASH | Profile</title>
      <div className="flex flex-col items-center h-screen">
        <h1>Profile Page</h1>
        <p>
          This is the profile page where users can view and edit your
          information.
        </p>
        <h2>{data && data.user.name}</h2>
      </div>
    </Layout>
  );
};
export default ProfilePage;
