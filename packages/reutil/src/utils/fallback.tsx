import React from "react";
interface FallbackProps {
  primary: React.ReactNode;
  fallback: React.ReactNode;
}

export const Fallback: React.FC<FallbackProps> = ({ primary, fallback }) => {
  try {
    return <>{primary}</>;
  } catch {
    return <>{fallback}</>;
  }
};
