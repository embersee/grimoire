import useSpellCardStore from "../store/spellcard";
import Markdown from "react-markdown";

const CardFace = () => {
  const { parameters } = useSpellCardStore();

  const params = [
    { ...parameters.spellName, name: "Spell Name" },
    { ...parameters.castingTime, name: "Casting Time" },
    { ...parameters.range, name: "Range" },
    { ...parameters.components, name: "Components" },
    { ...parameters.duration, name: "Duration" },
    { ...parameters.spellDescription, name: "Spell Description" },
    { ...parameters.additionalNotes, name: "Additional Notes" },
    { ...parameters.spellLevel, name: "Spell Level" },
    { ...parameters.schoolOfMagic, name: "School of Magic" },
    { ...parameters.class, name: "Class" },
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
            borderStyle: "solid",
            borderColor: `${parameters.border.borderColor}`,
            borderWidth: `${topBorderWidth}px ${rightBorderWidth}px ${bottomBorderWidth}px ${leftBorderWidth}px`,
            background: parameters.background.backgroundColor,
            borderRadius: `${parameters.border.borderRadius}px`,
            height: `${parameters.cardLayout.cardSize.y}mm`,
            width: `${parameters.cardLayout.cardSize.x}mm`,
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
              padding: `${parameters.face.padding}px ${parameters.face.padding}px`,
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
                  translate:
                    `${param.offset.x}px ${param.offset.y}px` as "50% 50%",
                  borderBottom: `${param.underlineSize}px ${param.underlineStyle} ${param.underlineColor}`,
                }}
              >
                {param.legend ? (
                  <fieldset
                    style={{
                      border: `${param.legendWidth}px solid ${param.legendColor}`,
                      borderRadius: `${param.legendRadius}px`,
                      width: `${param.legendSize}%`,
                      padding: `0 ${param.legendPadding}px`,
                    }}
                  >
                    <legend
                      style={{
                        fontSize: `${param.legendFontSize}px`,
                        marginLeft: `${param.legendMargin}px`,
                        padding: `0 ${param.legendPadding}px`,
                      }}
                    >
                      <Markdown>{param.name}</Markdown>
                    </legend>
                    <label>
                      <Markdown>{param.text}</Markdown>
                    </label>
                  </fieldset>
                ) : (
                  <Markdown>{param.text}</Markdown>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFace;
