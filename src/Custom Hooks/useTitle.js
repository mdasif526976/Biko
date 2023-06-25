import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Biko`;
  }, [title]);
};

export default useTitle;
