import { useEffect, useState } from "react";

const useRequest = fn => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    try {
      const { data } = fn();
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [fn]);

  return { isLoading, error, data };
};

export { useRequest };
