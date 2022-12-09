
import HomeBtn from "../../components/HomeBtn";
import GameBtns from "./GameBtns";
import Stage from "./Stage";

const AdvancedTicTacToe = () => {
  return (
    <div className="container d-flex flex-column justify-content-between align-items-center mt-1">
      <div className="position-fixed fixed-top">
        <HomeBtn />
      </div>
      <GameBtns />
      <Stage />
      <GameBtns btnClass="btn-warning" />
    </div>
  );
};

export default AdvancedTicTacToe;
