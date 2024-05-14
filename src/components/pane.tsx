import { useEffect, useRef } from "react";
import { Pane } from "tweakpane";
import useSpellCardStore from "../store/spellcard";
import * as TextareaPlugin from "@pangenerator/tweakpane-textarea-plugin";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";

export default function SpellCardPane() {
  const { parameters, setParameters } = useSpellCardStore();

  const subFolderName = "Advanced";

  const paneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!paneRef.current || paneRef.current.children.length > 0) {
      // If paneRef is not assigned or if it already contains children, return
      return;
    }

    const pane = new Pane({
      title: "Spell Card Parameters",
    });

    paneRef.current.appendChild(pane.element);

    pane.registerPlugin(EssentialsPlugin);
    pane.registerPlugin(TextareaPlugin);

    // Add tabs for categories
    const tabs = pane.addTab({
      pages: [
        { title: "Spell Details" },
        { title: "Face" },
        { title: "Border" },
        { title: "Background" },
        { title: "Card Layout" },
        { title: "Icons/Graphics" },
        { title: "Export Preset" },
      ],
    });

    const facePageOrder = 1;
    const borderPageOrder = 2;
    const backgroundPageOrder = 3;
    const cardLayoutPageOrder = 4;
    const graphicsPageOrder = 5;
    const exportPageOrder = 6;

    const faceFolderBorder = tabs.pages[facePageOrder].addFolder({
      title: "Border",
    });

    faceFolderBorder
      .addBinding(parameters.face, "borderColor")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          face: { ...parameters.face, borderColor: v.value },
        });
      });
    faceFolderBorder
      .addBinding(parameters.face, "borderRadius", {
        step: 1,
        min: 0,
        max: 100,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          face: { ...parameters.face, borderRadius: v.value },
        });
      });
    faceFolderBorder
      .addBinding(parameters.face, "borderWidth", {
        step: 1,
        min: 0,
        max: 100,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          face: {
            ...parameters.face,
            borderWidth: v.value,
          },
        });
      });
    tabs.pages[facePageOrder]
      .addBinding(parameters.face, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          face: { ...parameters.face, offset: v.value },
        });
      });
    tabs.pages[facePageOrder]
      .addBinding(parameters.face, "backgroundColor")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          face: {
            ...parameters.face,
            backgroundColor: v.value,
          },
        });
      });
    tabs.pages[facePageOrder]
      .addBinding(parameters.face, "size", {
        step: 0.2,
        y: { min: 0, max: parameters.cardLayout.cardSize.y },
        x: { min: 0, max: parameters.cardLayout.cardSize.x },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          face: { ...parameters.face, size: v.value },
        });
      });
    tabs.pages[facePageOrder]
      .addBinding(parameters.face, "padding", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          face: { ...parameters.face, padding: v.value },
        });
      });

    // Border category
    // Border Width
    tabs.pages[borderPageOrder]
      .addBinding(parameters.border, "borderWidth", {
        step: 1,
        min: 0,
        max: 100,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          border: {
            ...parameters.border,
            borderWidth: v.value,
            topBorderWidth: v.value,
            rightBorderWidth: v.value,
            bottomBorderWidth: v.value,
            leftBorderWidth: v.value,
          },
        });
      });

    // Border Color
    tabs.pages[borderPageOrder]
      .addBinding(parameters.border, "borderColor")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          border: { ...parameters.border, borderColor: v.value },
        });
      });

    // Border Radius
    tabs.pages[borderPageOrder]
      .addBinding(parameters.border, "borderRadius", {
        step: 1,
        min: 0,
        max: 100,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          border: { ...parameters.border, borderRadius: v.value },
        });
      });

    tabs.pages[borderPageOrder]
      .addBinding(parameters.border, "topBorderWidth", {
        step: 1,
        min: 0,
        max: 100,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          border: { ...parameters.border, topBorderWidth: v.value },
        });
      });
    tabs.pages[borderPageOrder]
      .addBinding(parameters.border, "leftBorderWidth", {
        step: 1,
        min: 0,
        max: 100,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          border: { ...parameters.border, leftBorderWidth: v.value },
        });
      });
    tabs.pages[borderPageOrder]
      .addBinding(parameters.border, "bottomBorderWidth", {
        step: 1,
        min: 0,
        max: 100,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          border: { ...parameters.border, bottomBorderWidth: v.value },
        });
      });
    tabs.pages[borderPageOrder]
      .addBinding(parameters.border, "rightBorderWidth", {
        step: 1,
        min: 0,
        max: 100,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          border: { ...parameters.border, rightBorderWidth: v.value },
        });
      });

    // Background category
    // Background Color

    tabs.pages[backgroundPageOrder]
      .addBinding(parameters.background, "backgroundColor")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          background: { ...parameters.background, backgroundColor: v.value },
        });
      });

    // Background Image
    tabs.pages[backgroundPageOrder]
      .addBinding(parameters.background, "backgroundImage")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          background: { ...parameters.background, backgroundImage: v.value },
        });
      });

    // Card Layout category
    // Card Size

    tabs.pages[cardLayoutPageOrder]
      .addBinding(parameters.cardLayout, "cardSize", {
        y: { min: 0, max: 210 },
        x: { min: 0, max: 210 },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          cardLayout: { ...parameters.cardLayout, cardSize: v.value },
        });
      });

    // Card Orientation
    tabs.pages[cardLayoutPageOrder]
      .addBinding(parameters.cardLayout, "cardOrientation", {
        options: {
          vertical: "vertical",
          horizontal: "horizonal",
        },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          cardLayout: { ...parameters.cardLayout, cardOrientation: v.value },
        });
      });

    // Margins
    tabs.pages[cardLayoutPageOrder]
      .addBinding(parameters.cardLayout, "margins", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          cardLayout: { ...parameters.cardLayout, margins: v.value },
        });
      });

    // Padding
    tabs.pages[cardLayoutPageOrder];

    // Icons/Graphics category

    // Spell Icons
    tabs.pages[graphicsPageOrder]
      .addBinding(parameters.iconsGraphics, "spellIcon")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          iconsGraphics: { ...parameters.iconsGraphics, spellIcon: v.value },
        });
      });

    // Export Preset category

    // Output Format

    const exportBtn = tabs.pages[exportPageOrder].addButton({
      title: "Export Preset to clipboard",
    });

    exportBtn.on("click", () => {
      const state = pane.exportState();
      console.log(state);
      navigator.clipboard.writeText(JSON.stringify(state));
    });

    // const importBtn = tabs.pages[exportPageOrder].addButton({
    //   title: "Import Preset",
    // });
    // importBtn.on("click", async () => {
    //   const state = await navigator.clipboard.readText();
    //   pane.importState(JSON.parse(state));
    // });

    // Spell Details tabs
    const spellDetailsPageOrder = 0;

    const folderSpellName = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Spell Name",
    });
    const folderSpellLevel = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Spell Level",
    });
    const folderSchoolOfMagic = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "School of Magic",
    });
    const folderCastingTime = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Casting Time",
    });
    const folderRange = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Range",
    });
    const folderComponents = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Components",
    });
    const folderDuration = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Duration",
    });
    const folderSpellDescription = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Spell Description",
    });
    const folderClass = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Class",
    });
    const folderAdditionalNotes = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "AdditionalNotes",
    });

    const allIdentifiers = [
      "spellName",
      "spellLevel",
      "schoolOfMagic",
      "castingTime",
      "range",
      "components",
      "duration",
      "spellDescription",
      "class",
      "additionalNotes",
    ] as const;

    const allSpellFolders = [
      folderSpellName,
      folderSpellLevel,
      folderSchoolOfMagic,
      folderCastingTime,
      folderRange,
      folderComponents,
      folderDuration,
      folderSpellDescription,
      folderClass,
      folderAdditionalNotes,
    ];

    const allFields = ["text", "fontSize", "color"] as const;

    const advancedFields = [
      "offset",
      "fontStyle",
      "underlineSize",
      "underlineStyle",
      "underlineColor",
    ] as const;

    const legendFields = [
      "legend",
      "legendPadding",
      "legendMargin",
      "legendColor",
      "legendWidth",
      "legendSize",
      "legendFontSize",
      "legendRadius",
    ] as const;

    allSpellFolders.forEach((folder, index) => {
      allFields.forEach((field) => {
        const identifier = allIdentifiers[index];

        folder
          .addBinding(parameters[identifier], field, {
            step: 1,
            min: 0,
            max: 100,
          })
          .on("change", (v) => {
            setParameters({
              ...parameters,
              [identifier]: { ...parameters[identifier], [field]: v.value },
            });
          });
      });

      const subfolder = folder.addFolder({
        title: subFolderName,
        expanded: false,
      });

      advancedFields.forEach((field) => {
        const advancedIdentifier = allIdentifiers[index];
        subfolder
          .addBinding(parameters[advancedIdentifier], field, {
            step: 1,
            min: 0,
            max: 100,
            x: { step: 1, min: -300, max: 300 },
            y: { step: 1, min: -300, max: 300 },
          })
          .on("change", (v) => {
            setParameters({
              ...parameters,
              [advancedIdentifier]: {
                ...parameters[advancedIdentifier],
                [field]: v.value,
              },
            });
          });
      });

      const legendFolder = subfolder.addFolder({
        title: "Legend",
        expanded: false,
      });

      legendFields.forEach((field) => {
        const advancedIdentifier = allIdentifiers[index];
        legendFolder
          .addBinding(parameters[advancedIdentifier], field, {
            step: 1,
            min: 0,
            max: 100,
          })
          .on("change", (v) => {
            setParameters({
              ...parameters,
              [advancedIdentifier]: {
                ...parameters[advancedIdentifier],
                [field]: v.value,
              },
            });
          });
      });
    });
  }, []);

  return <div className="spellcard-pane" ref={paneRef}></div>;
}
