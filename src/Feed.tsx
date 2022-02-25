import React from "react";
import styled from "styled-components";

import { range } from "lodash";
import { FeedItem } from "./FeedItem";

const items = range(0, 40);

function getItemAddedHeight(item: number) {
  // Let's ignore 0 index
  const itemNaturalIndex = item + 1;
  if (itemNaturalIndex % 7 === 0) return 450;
  if (itemNaturalIndex % 3 === 0) return 250;
  if (itemNaturalIndex % 2 === 0) return 150;

  return 50;
}

export function Feed() {
  return (
    <UIHolder>
      <UIContainer>
        {items.map((item) => {
          const addedHeight = getItemAddedHeight(item);
          return (
            <FeedItem key={item} addedHeight={addedHeight}>
              Item #{item}
            </FeedItem>
          );
        })}
      </UIContainer>
    </UIHolder>
  );
}

const UIHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;
  padding-bottom: 100vh;
`;

const UIContainer = styled.div`
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 960px;
  max-width: 100%;
`;
