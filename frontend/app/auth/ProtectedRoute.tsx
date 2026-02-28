"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "./authClient";
const { useSession } = authClient;
type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return <div className="p-10 text-white">Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return <>{children}</>;
}
