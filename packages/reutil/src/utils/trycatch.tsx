import React from "react";

interface ITryCatchProps {
  children: React.ReactNode;
}

export const TryCatch: React.FC<ITryCatchProps> = ({ children }) => {
  try {
    return <>{children}</>;
  } catch {
    return <div>Error</div>;
  }
};
