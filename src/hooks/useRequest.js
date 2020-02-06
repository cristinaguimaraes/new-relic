import { useEffect, useState } from "react";

const useRequest = fn => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    let isSubscribed = true;
    try {
      const { data } = fn();
      if (isSubscribed) {
        setData(data);
      }
    } catch (e) {
      if (isSubscribed) {
        setError(error);
      }
      setError(e);
    } finally {
      if (isSubscribed) {
        setLoading(false);
      }
    }
    return () => (isSubscribed = false);
  }, [fn]);

  return { isLoading, error, data };
};

export { useRequest };
