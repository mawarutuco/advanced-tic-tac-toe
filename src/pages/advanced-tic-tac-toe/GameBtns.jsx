import MyBtn from "../../components/Btn";
import { ButtonGroup } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";

const AdvancedTicTacToe = ({ gameBtns, blueTurn, stateObj, btnClass }) => {
  const { stage, setStage, piece } = stateObj;

  const pieceStr = (qty) => (
    <div style={{ rotate: btnClass === "btn-primary" && "180deg" }}>
      <FiCircle />
      <span
        className="fs-3 position-absolute"
        style={{ top: "15%", right: "15%" }}
      >
        {qty}
      </span>
    </div>
  );

  const selectPiece = (item) => {
    const { state } = item;
    judgeStage(state);
    piece.current = state;
  };

  const judgeStage = (item) => {
    const newStage = stage.map((n) => {
      if (n.state < item) n.disabled = false;
      else n.disabled = true;
      return n;
    });
    setStage(newStage);
  };

  const judgeDisabled = (turn, qty) => {
    if (qty < 1) return true;
    if (!turn) return true;
    return false;
  };

  return (
    <ButtonGroup className="w-100">
      {gameBtns.map((item, idx) => (
        <MyBtn
          key={idx}
          text={pieceStr(item.qty)}
          doClick={() => selectPiece(item)}
          btnClass={btnClass}
          textClass={
            item.state > 1 ? "piece2" : item.state  ? "piece1" : "piece0"
          }
          disabled={judgeDisabled(blueTurn, item.qty)}
        />
      ))}
    </ButtonGroup>
  );
};

export default AdvancedTicTacToe;
