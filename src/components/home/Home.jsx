

import Header from "../../components/home/Header/Header";
import Clock from "../../components/home/Clock/Clock";
import CountDown from "../../components/home/CountDown/CountDown";
import StopWatch from "../../components/home/StopWatch/StopWatch";
import { Link } from "react-router-dom";
import * as S from './styles';

export default function Home(name) {
   name = 'madrid'
  return (
    <div>
 
      <Header />
      <Link to={`/Weather/${name}`}>
      <S.divButton>
      <S.weatherButton>Check Weather </S.weatherButton>
      </S.divButton>
    </Link>
    
      <Clock />
      <StopWatch />
      <CountDown />
    </div>
  );
}
