import React, { ReactNode, useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  children: ReactNode;
  addedHeight: number;
  className?: string;
}

export function FeedItem({ children, className, addedHeight }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const addedHeightMultiplier = isExpanded ? 2 : 1;

  return (
    <UIHolder
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ minHeight: `${addedHeight * addedHeightMultiplier}px` }}
      className={className}
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
