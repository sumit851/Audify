import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StreamCard from "../Components/StreamCard";
const DashBoardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;

  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`;
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @maedia (max-width: 768px) {
    font-size: 18px;
  }
`;
const Stream = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  //center the items if only one item present
  @media (max-width: 550px) {
    justify-content: center;
  }
`;
const Span = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  color: ${({ theme }) => theme.primary};
  &:hover {
    transition: 0.2s ease-in-out;
  }
`;
const Streamcard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;
const Dashboard = () => {
  return (
    <DashBoardMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <Link to={`/display/mostpopular`} style={{ textDecoration: "none" }}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Streamcard>
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
        </Streamcard>
      </FilterContainer>
      <FilterContainer>
        <Topic>
          Comedy
          <Link to={`/display/comedy`} style={{ textDecoration: "none" }}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Streamcard>
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
        </Streamcard>
      </FilterContainer>
    </DashBoardMain>
  );
};

export default Dashboard;
