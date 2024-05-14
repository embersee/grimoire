import useSpellCardStore from "../store/spellcard";
import Markdown from "react-markdown";

const CardFace = () => {
  const { parameters } = useSpellCardStore();

  const params = [
    parameters.spellName,
    parameters.castingTime,
    parameters.range,
    parameters.components,
    parameters.duration,
    parameters.spellDescription,
    parameters.additionalNotes,
    parameters.spellLevel,
    parameters.schoolOfMagic,
    parameters.class,
  ];

  // Check if each border width is specified
  const topBorderWidth =
    parameters.border.topBorderWidth > parameters.border.borderWidth
      ? parameters.border.topBorderWidth
      : parameters.border.borderWidth;
  const rightBorderWidth =
    parameters.border.rightBorderWidth > parameters.border.borderWidth
      ? parameters.border.rightBorderWidth
      : parameters.border.borderWidth;
  const bottomBorderWidth =
    parameters.border.bottomBorderWidth > parameters.border.borderWidth
      ? parameters.border.bottomBorderWidth
      : parameters.border.borderWidth;
  const leftBorderWidth =
    parameters.border.leftBorderWidth > parameters.border.borderWidth
      ? parameters.border.leftBorderWidth
      : parameters.border.borderWidth;

  return (
    <>
      <div
        style={{
          overflow: "hidden",
          height: `${parameters.cardLayout.cardSize.y}mm`,
          width: `${parameters.cardLayout.cardSize.x}mm`,
          margin: `${parameters.cardLayout.margins}px ${parameters.cardLayout.margins}px`,
        }}
      >
        <div
          className="card-face"
          style={{
            // border: `${parameters.border.borderWidth}px solid ${parameters.border.borderColor}`,
            borderStyle: "solid",
            borderColor: `${parameters.border.borderColor}`,
            borderWidth: `${topBorderWidth}px ${rightBorderWidth}px ${bottomBorderWidth}px ${leftBorderWidth}px`,
            background: parameters.background.backgroundColor,
            borderRadius: `${parameters.border.borderRadius}px`,
            height: `${parameters.cardLayout.cardSize.y}mm`,
            width: `${parameters.cardLayout.cardSize.x}mm`,
            fontSize: `${parameters.generalSpellStyle.fontSize}px`,
            color: `${parameters.generalSpellStyle.color}`,
            textAlign: parameters.generalSpellStyle.alignment as "center",
          }}
        >
          <div
            className="h-full w-full"
            style={{
              height: `${parameters.face.size.y}mm`,
              width: `${parameters.face.size.x}mm`,
              outline: `${parameters.face.borderWidth}px ${parameters.face.borderStyle} ${parameters.face.borderColor}`,
              borderRadius: `${parameters.face.borderRadius}px`,
              background: parameters.face.backgroundColor,
              padding: `${parameters.cardLayout.padding}px ${parameters.cardLayout.padding}px`,
              translate:
                `${parameters.face.offset.x}px ${parameters.face.offset.y}px` as "50% 50%",
            }}
          >
            {params.map((param, i) => (
              <div
                key={i}
                style={{
                  fontSize: `${param.fontSize}px`,
                  color: `${param.color}`,
                  textAlign: param.alignment as "center",
                  translate:
                    `${param.offset.x}px ${param.offset.y}px` as "50% 50%",
                }}
              >
                <Markdown>{param.text}</Markdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFace;
