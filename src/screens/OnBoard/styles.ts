import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px 30px;
  background: ${colors.red};
  position: relative;
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const HeroImage = styled.Image`
  position: absolute;
`;

export const Logo = styled.Image`
  margin-bottom: 50px;
`;

export const Description = styled.Text`
  font-size: 40px;
  color: ${colors.white};
  font-weight: bold;
`;

export const GoButton = styled.TouchableOpacity`
  height: 56px;
  width: 100%;
  background: ${colors.yellow};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const GoButtonText = styled.Text`
  font-size: 15px;
  color: #7a1818;
  font-weight: 600;
`;
