import styled from "styled-components";
import {
  FaCheck,
  FaStar,
  FaGoogle,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaSnapchat,
} from "react-icons/fa";
import backgroundImageUrl from "../../global/images/unnamed.png";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  width: 40%;
  padding: 20px;
  /* background-color: #a744c8; */
  color: black;
  /* display: center; */
  /* margin-left: 20px; */
`;

export const Title = styled.h3`
  font-size: 16px;
  color: #a744c8;
`;

export const Subtitle = styled.p`
  font-size: 70px;
  font-weight: bold;
  display: center;
  margin-top: -10px;
`;

export const Description = styled.p`
  font-size: 16px;
  display: center;
  margin-top: -30px;
`;

export const Button = styled.button`
  background-color: #a744c8;
  color: white;
  font-size: 18px;
  padding: 20px 80px;
  border: 100ch;
  cursor: pointer;
  margin-left: 250px;
`;

export const RightContainer = styled.div`
  width: 60%;
  display: flex;
  margin-left: 300px;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StarsAndImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialMediaContainer = styled.div`
  width: 18%;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto the next line */
  justify-content: center; /* Align items in the center */
  margin-top: 50px;
  margin-right: 00px;
  margin-left: 200px;
`;

export const ServiceTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;
export const ImageHolder = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${backgroundImageUrl});
  background-size: contain;
  margin-right: 100px;
`;

export const ServiceItem = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 50px;
  margin-bottom: 15px;
  margin-left: -10px;
`;

export const IconBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const Icon = styled(FaCheck)`
  width: 50px;
  height: 50px;
  color: #a744c8; /* Set color to the specific color code */
`;

export const StarIcon = styled(FaStar)`
  width: 30px;
  height: 30px;
  color: #a744c8; /* Set color to the specific color code */
  margin-bottom: -100 px;
`;
export const SocialMediaRow = styled.div`
  display: flexbox;
  margin-top: 10px;
  display: center;
  /* margin-left: 100px; */
`;

export const GoogleIcon = styled(FaGoogle)`
  width: 50px;
  height: 50px;
  color: #db4437; /* Google Red */
`;

export const YoutubeIcon = styled(FaYoutube)`
  width: 50px;
  height: 50px;
  color: #ff0000; /* Youtube Red */
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 50px;
  height: 50px;
  color: #833ab4; /* Instagram Purple */
`;

export const FacebookIcon = styled(FaFacebook)`
  width: 50px;
  height: 50px;
  color: #1877f2; /* Facebook Blue */
`;

export const TiktokIcon = styled(FaTiktok)`
  width: 50px;
  height: 50px;
  color: #69c9d0; /* TikTok Blue */
`;

export const SnapchatIcon = styled(FaSnapchat)`
  width: 50px;
  height: 50px;

  color: #fffc00; /* Snapchat Yellow */
`;
