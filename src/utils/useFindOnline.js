import { useEffect, useState } from "react";

const useFindOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const offlineFunc = () => {
      setIsOnline(false);
    };

    const onLineFunc = () => {
      setIsOnline(true);
    };
    window.addEventListener("offline", offlineFunc);
    window.addEventListener("online", onLineFunc);

    return () => {
      window.removeEventListener("offline", offlineFunc);
      window.removeEventListener("online", onLineFunc);
    };
  }, []);
  return isOnline;
};

export default useFindOnline;
