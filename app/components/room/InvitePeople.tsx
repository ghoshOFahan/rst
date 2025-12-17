"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function InvitePeople({
  onInviteFound,
}: {
  onInviteFound: (roomId: string) => void;
}) {
  const searchParams = useSearchParams();
  const inviteRoomId = searchParams.get("room");

  useEffect(() => {
    if (inviteRoomId) {
      onInviteFound(inviteRoomId);
    }
  }, [inviteRoomId, onInviteFound]);
  return null;
}
