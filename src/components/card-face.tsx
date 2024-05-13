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
          borderRadius: `${parameters.border.borderRadius}px`,
          height: `${parameters.cardLayout.cardSize.y}mm`,
          width: `${parameters.cardLayout.cardSize.x}mm`,
          margin: `${parameters.cardLayout.margins}px ${parameters.cardLayout.margins}px`,
          padding: `${parameters.cardLayout.padding}px ${parameters.cardLayout.padding}px`,
        }}
      >
        <h2>{parameters.spellName.text}</h2>
        <p>{parameters.spellDescription.text}</p>
      </div>
    </>
  );
};

export default CardFace;
