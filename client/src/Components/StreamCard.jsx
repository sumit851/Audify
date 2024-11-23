import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
// import { Favourite } from "@mui/icons-material";
// import { Description } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 45%;
  right: 10%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px #9000ff50 !important;
`;
const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.Card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
    filter: brightness(1.3);
  }
  &:hover ${PlayIcon} {
    display: flex;
  }
`;
const Favourite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.text_secondary};
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
`;
const CardImage = styled.img`
object-fit: cover;
width:220px;
height:140px;
border-radius:6px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
&:hover {
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  
`;
const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;
const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`;
const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
`;
const CreatersInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
`;
const Creator = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const CreatorName = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
`;
const Views = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  width: max-content;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;
const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;

const PlayArrowIcon = styled(IconButton)``;
const HeadPhoneIcon = styled(IconButton)``;
const StreamCard = () => {
  return (
    <Card>
      <div>
        <Top>
          <Favourite>
            <FavoriteIcon style={{ width: "16px", height: "16px" }} />
          </Favourite>

          <CardImage src="https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </Top>
        <CardInformation>
          <MainInfo>
            <Title>The Mark Felix Show</Title>
            <Description>
              {""}
              Mark Felix, the career and self-growth writer and motivator, has
              made significant contributions in inspiring individuals to achieve
              their goals and overcome obstacles. His work focuses on personal
              development, resilience, and achieving success. Through his books,
              articles, and motivational talks, Mark encourages people to
              embrace challenges, cultivate a growth mindset, and take proactive
              steps toward their aspirations. His insights resonate with many,
              providing practical advice and strategies for self-improvement.
              Whether it’s overcoming setbacks, enhancing productivity, or
              finding purpose, Mark Felix’s wisdom empowers others on their
              journey to success. 🌟📚🌱 Mark Felix, the career and self-growth
              writer and motivator, has made significant contributions...
            </Description>
            <CreatersInfo>
              <Creator>
                <Avatar style={{ width: "26px", height: "26px" }}>M</Avatar>
                <CreatorName>Mark Felix</CreatorName>
              </Creator>
              <Views>15 views</Views>
            </CreatersInfo>
          </MainInfo>
        </CardInformation>
      </div>
      <PlayIcon>
        {"video" === "video" ? (
          <PlayArrowIcon style={{ width: "28px", height: "28px" }} />
        ) : (
          <HeadPhoneIcon style={{ width: "28px", height: "28px" }} />
        )}
      </PlayIcon>
    </Card>
  );
};

export default StreamCard;
