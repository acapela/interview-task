import React, { ReactNode, useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  children: ReactNode;
  addedHeight: number;
  className?: string;
}

export function FeedItem({ children, className, addedHeight }: Props) {
  const [isExpaneded, setIsExpaneded] = useState(false);

  const addedHeightMultiplier = isExpaneded ? 2 : 1;
  return (
    <UIHolder
      onClick={() => setIsExpaneded(!isExpaneded)}
      style={{ minHeight: `${addedHeight * addedHeightMultiplier}px` }}
    >
      {children}
    </UIHolder>
  );
}

const rapidHoverTransition = css`
  transition: 0.5s background-color;

  &:hover {
    transition: 0.1s background-color;
  }
`;

const roundedCard = css`
  border-radius: 8px;
`;

const UIHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  font-size: 32px;
  background-color: #8881;

  ${rapidHoverTransition}
  ${roundedCard}

  &:hover {
    background-color: #8882;
  }
`;
