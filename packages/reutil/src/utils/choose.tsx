import React from "react";

interface IChooseProps {
  children: React.ReactNode;
}

interface IWhenProps {
  condition: boolean;
  children: React.ReactNode;
}

export function Choose({ children }: IChooseProps) {
  return (
    React.Children.toArray(children).find(
      (child: any) => child.props.condition
    ) || null
  );
}

export function When({ condition, children }: IWhenProps) {
  return condition ? <>{children}</> : null;
}
