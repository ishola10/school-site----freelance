"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingIndicator from "./LoadingIndicator";

const PageLoaderProvider = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <LoadingIndicator /> : null;
};

export default PageLoaderProvider;
