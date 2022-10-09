import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  console.log("session =>", session);

  return (
    <div>
      {session?.user ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn("google")}>Sign In</button>
      )}

      <p>{session?.user?.name}</p>
    </div>
  );
};

export default Home;
