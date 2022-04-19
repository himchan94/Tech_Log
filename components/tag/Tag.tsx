import React from "react";
import styled from "styled-components";

interface TagProps {
  tagName: string;
}

const Tag: React.FC<TagProps> = ({ tagName }) => {
  return <TagWrapper>{tagName}</TagWrapper>;
};

export default Tag;

const TagWrapper = styled.div`
  height: 17px;
  border-radius: 105px;
`;
