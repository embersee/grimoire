import useSpellCardStore from "../store/spellcard";

const CardFace = () => {
  const { parameters } = useSpellCardStore();

  return (
    <>
      <div
        className="card-face"
        style={{
          border: `${parameters.border.borderWidth}px solid ${parameters.border.borderColor}`,
          background: parameters.background.backgroundColor,
        }}
      >
        <h2>{parameters.spellName.text}</h2>
        <p>{parameters.spellDescription.text}</p>
      </div>
    </>
  );
};

export default CardFace;
