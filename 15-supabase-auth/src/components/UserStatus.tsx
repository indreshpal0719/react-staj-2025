import { useEffect } from "react";
import { supabase } from "../supabase";

type Props = {
  setSessionUserId: (sessionId: string | null) => void;
  sessionUserId: string | null;
};

const UserStatus = ({ setSessionUserId, sessionUserId }: Props) => {
  // uffs
  useEffect(() => {
    // Kullanıcı halihazırda giriş yapmışsa, sessionUserId'ye ata
    supabase.auth.getSession().then(({ data }) => {
      setSessionUserId(data.session?.user.id ?? null);
    });
    // Kullanıcının giriş-çıkış durumunu izlemek için
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSessionUserId(s?.user.id ?? null);
    });

    // Sayfadan ayrılırken izleme durumunu iptal etmek için
    return () => sub.subscription.unsubscribe();
  }, []);

  return <div>UserId: {sessionUserId}</div>;
};

export default UserStatus;
