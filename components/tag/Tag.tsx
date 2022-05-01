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
  display: inline-block;
  height: 17px;
  border-radius: 105px;
  background-color: #e0c8dd;
  padding: 2px 10px;
  font-size: 10px;
  font-weight: 400;
`;
