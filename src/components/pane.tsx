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
      .addBinding(parameters.face, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          face: {
            ...parameters.face,
            color: v.value,
          },
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
    tabs.pages[cardLayoutPageOrder]
      .addBinding(parameters.cardLayout, "padding", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          cardLayout: { ...parameters.cardLayout, padding: v.value },
        });
      });

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

    const folderGeneralStyle = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "General",
    });
    const folderSpellName = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Spell Name",
    });
    const folderSpellLevel = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Spell Level",
      expanded: false,
    });
    const folderSchoolOfMagic = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "School of Magic",
      expanded: false,
    });
    const folderCastingTime = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Casting Time",
      expanded: false,
    });
    const folderRange = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Range",
      expanded: false,
    });
    const folderComponents = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Components",
      expanded: false,
    });
    const folderDuration = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Duration",
      expanded: false,
    });
    const folderSpellDescription = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Spell Description",
      expanded: false,
    });
    const folderClass = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "Class",
      expanded: false,
    });
    const folderAdditionalNotes = tabs.pages[spellDetailsPageOrder].addFolder({
      title: "AdditionalNotes",
      expanded: false,
    });

    // General Spell Style
    // ####################################################################################################################
    folderGeneralStyle
      .addBinding(parameters.generalSpellStyle, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          generalSpellStyle: {
            ...parameters.generalSpellStyle,
            fontStyle: v.value,
          },
        });
      });
    folderGeneralStyle
      .addBinding(parameters.generalSpellStyle, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          generalSpellStyle: {
            ...parameters.generalSpellStyle,
            fontSize: v.value,
          },
        });
      });
    folderGeneralStyle
      .addBinding(parameters.generalSpellStyle, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          generalSpellStyle: {
            ...parameters.generalSpellStyle,
            color: v.value,
          },
        });
      });
    folderGeneralStyle
      .addBinding(parameters.generalSpellStyle, "alignment", {
        options: {
          none: "match-parent",
          left: "left",
          right: "right",
          center: "center",
        },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          generalSpellStyle: {
            ...parameters.generalSpellStyle,
            alignment: v.value,
          },
        });
      });

    // Spell Name
    // ####################################################################################################################
    folderSpellName
      .addBinding(parameters.spellName, "text")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, text: v.value },
        });
      });
    const subfolderSpellName = folderSpellName.addFolder({
      title: subFolderName,
      expanded: false,
    });
    subfolderSpellName
      .addBinding(parameters.spellName, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, fontStyle: v.value },
        });
      });
    subfolderSpellName
      .addBinding(parameters.spellName, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, fontSize: v.value },
        });
      });
    subfolderSpellName
      .addBinding(parameters.spellName, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, color: v.value },
        });
      });
    subfolderSpellName
      .addBinding(parameters.spellName, "alignment", {
        options: {
          none: "match-parent",
          left: "left",
          right: "right",
          center: "center",
        },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, alignment: v.value },
        });
      });
    subfolderSpellName
      .addBinding(parameters.spellName, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, offset: v.value },
        });
      });

    // Spell Level
    // ####################################################################################################################

    folderSpellLevel
      .addBinding(parameters.spellLevel, "text")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellLevel: { ...parameters.spellLevel, text: v.value },
        });
      });

    const subfolderSpellLevel = folderSpellLevel.addFolder({
      title: subFolderName,
      expanded: false,
    });

    subfolderSpellLevel
      .addBinding(parameters.spellLevel, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellLevel: { ...parameters.spellLevel, fontStyle: v.value },
        });
      });
    subfolderSpellLevel
      .addBinding(parameters.spellLevel, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellLevel: { ...parameters.spellLevel, fontSize: v.value },
        });
      });
    subfolderSpellLevel
      .addBinding(parameters.spellLevel, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellLevel: { ...parameters.spellLevel, color: v.value },
        });
      });
    subfolderSpellLevel
      .addBinding(parameters.spellLevel, "alignment", {
        options: {
          none: "match-parent",
          left: "left",
          right: "right",
          center: "center",
        },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellLevel: { ...parameters.spellLevel, alignment: v.value },
        });
      });
    subfolderSpellLevel
      .addBinding(parameters.spellLevel, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellLevel: { ...parameters.spellLevel, offset: v.value },
        });
      });

    // School of Magic
    // ####################################################################################################################

    folderSchoolOfMagic
      .addBinding(parameters.schoolOfMagic, "text")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          schoolOfMagic: { ...parameters.schoolOfMagic, text: v.value },
        });
      });

    const subfolderSchoolOfMagic = folderSchoolOfMagic.addFolder({
      title: subFolderName,
      expanded: false,
    });

    subfolderSchoolOfMagic
      .addBinding(parameters.schoolOfMagic, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          schoolOfMagic: { ...parameters.schoolOfMagic, fontStyle: v.value },
        });
      });
    subfolderSchoolOfMagic
      .addBinding(parameters.schoolOfMagic, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          schoolOfMagic: { ...parameters.schoolOfMagic, fontSize: v.value },
        });
      });
    subfolderSchoolOfMagic
      .addBinding(parameters.schoolOfMagic, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          schoolOfMagic: { ...parameters.schoolOfMagic, color: v.value },
        });
      });
    subfolderSchoolOfMagic
      .addBinding(parameters.schoolOfMagic, "alignment", {
        options: {
          none: "match-parent",
          left: "left",
          right: "right",
          center: "center",
        },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          schoolOfMagic: { ...parameters.schoolOfMagic, alignment: v.value },
        });
      });
    subfolderSchoolOfMagic
      .addBinding(parameters.schoolOfMagic, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          schoolOfMagic: { ...parameters.schoolOfMagic, offset: v.value },
        });
      });

    // School of Magic
    // ####################################################################################################################

    folderCastingTime
      .addBinding(parameters.castingTime, "text")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          castingTime: { ...parameters.castingTime, text: v.value },
        });
      });

    const subfolderCastingTime = folderCastingTime.addFolder({
      title: subFolderName,
      expanded: false,
    });

    subfolderCastingTime
      .addBinding(parameters.castingTime, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          castingTime: { ...parameters.castingTime, fontStyle: v.value },
        });
      });
    subfolderCastingTime
      .addBinding(parameters.castingTime, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          castingTime: { ...parameters.castingTime, fontSize: v.value },
        });
      });
    subfolderCastingTime
      .addBinding(parameters.castingTime, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          castingTime: { ...parameters.castingTime, color: v.value },
        });
      });
    subfolderCastingTime
      .addBinding(parameters.castingTime, "alignment", {
        options: {
          none: "match-parent",
          left: "left",
          right: "right",
          center: "center",
        },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          castingTime: { ...parameters.castingTime, alignment: v.value },
        });
      });
    subfolderCastingTime
      .addBinding(parameters.castingTime, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          castingTime: { ...parameters.castingTime, offset: v.value },
        });
      });

    // Range
    // ####################################################################################################################

    folderRange.addBinding(parameters.range, "text").on("change", (v) => {
      setParameters({
        ...parameters,
        range: { ...parameters.range, text: v.value },
      });
    });

    const subfolderRange = folderRange.addFolder({
      title: subFolderName,
      expanded: false,
    });

    subfolderRange
      .addBinding(parameters.range, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          range: { ...parameters.range, fontStyle: v.value },
        });
      });
    subfolderRange
      .addBinding(parameters.range, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          range: { ...parameters.range, fontSize: v.value },
        });
      });
    subfolderRange.addBinding(parameters.range, "color").on("change", (v) => {
      setParameters({
        ...parameters,
        range: { ...parameters.range, color: v.value },
      });
    });
    subfolderRange
      .addBinding(parameters.range, "alignment", {
        options: {
          none: "match-parent",
          left: "left",
          right: "right",
          center: "center",
        },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          range: { ...parameters.range, alignment: v.value },
        });
      });
    subfolderRange
      .addBinding(parameters.range, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          range: { ...parameters.range, offset: v.value },
        });
      });

    // Components
    // ####################################################################################################################

    folderComponents
      .addBinding(parameters.components, "text")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          components: { ...parameters.components, text: v.value },
        });
      });

    const subfolderComponents = folderComponents.addFolder({
      title: subFolderName,
      expanded: false,
    });

    subfolderComponents
      .addBinding(parameters.components, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          components: { ...parameters.components, fontStyle: v.value },
        });
      });
    subfolderComponents
      .addBinding(parameters.components, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          components: { ...parameters.components, fontSize: v.value },
        });
      });
    subfolderComponents
      .addBinding(parameters.components, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          components: { ...parameters.components, color: v.value },
        });
      });
    subfolderComponents
      .addBinding(parameters.components, "alignment", {
        options: {
          none: "match-parent",
          left: "left",
          right: "right",
          center: "center",
        },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          components: { ...parameters.components, alignment: v.value },
        });
      });
    subfolderComponents
      .addBinding(parameters.components, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          components: { ...parameters.components, offset: v.value },
        });
      });

    // Duration
    // ####################################################################################################################

    folderDuration.addBinding(parameters.duration, "text").on("change", (v) => {
      setParameters({
        ...parameters,
        duration: { ...parameters.duration, text: v.value },
      });
    });

    const subfolderDuration = folderDuration.addFolder({
      title: subFolderName,
      expanded: false,
    });

    subfolderDuration
      .addBinding(parameters.duration, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          duration: { ...parameters.duration, fontStyle: v.value },
        });
      });
    subfolderDuration
      .addBinding(parameters.duration, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          duration: { ...parameters.duration, fontSize: v.value },
        });
      });
    subfolderDuration
      .addBinding(parameters.duration, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          duration: { ...parameters.duration, color: v.value },
        });
      });
    subfolderDuration
      .addBinding(parameters.duration, "alignment", {
        options: {
          none: "match-parent",
          left: "left",
          right: "right",
          center: "center",
        },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          duration: { ...parameters.duration, alignment: v.value },
        });
      });

    subfolderDuration
      .addBinding(parameters.duration, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          duration: { ...parameters.duration, offset: v.value },
        });
      });

    // Spell Description
    // ####################################################################################################################

    folderSpellDescription
      .addBinding(parameters.spellDescription, "text", {
        view: "textarea",
        rows: 6,
        placeholder: "Type here...",
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellDescription: { ...parameters.spellDescription, text: v.value },
        });
      });

    const subfolderSpellDescription = folderSpellDescription.addFolder({
      title: subFolderName,
      expanded: false,
    });

    subfolderSpellDescription
      .addBinding(parameters.spellDescription, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellDescription: {
            ...parameters.spellDescription,
            fontStyle: v.value,
          },
        });
      });
    subfolderSpellDescription
      .addBinding(parameters.spellDescription, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellDescription: {
            ...parameters.spellDescription,
            fontSize: v.value,
          },
        });
      });
    subfolderSpellDescription
      .addBinding(parameters.spellDescription, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellDescription: { ...parameters.spellDescription, color: v.value },
        });
      });
    subfolderSpellDescription
      .addBinding(parameters.spellDescription, "alignment", {
        options: {
          none: "match-parent",
          left: "left",
          right: "right",
          center: "center",
        },
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellDescription: {
            ...parameters.spellDescription,
            alignment: v.value,
          },
        });
      });
    subfolderSpellDescription
      .addBinding(parameters.spellDescription, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellDescription: { ...parameters.spellDescription, offset: v.value },
        });
      });

    // Additional Notes
    // ####################################################################################################################

    folderAdditionalNotes
      .addBinding(parameters.additionalNotes, "text")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          additionalNotes: { ...parameters.additionalNotes, text: v.value },
        });
      });

    const subfolderAdditionalNotes = folderAdditionalNotes.addFolder({
      title: subFolderName,
      expanded: false,
    });

    subfolderAdditionalNotes
      .addBinding(parameters.additionalNotes, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          additionalNotes: {
            ...parameters.additionalNotes,
            fontStyle: v.value,
          },
        });
      });
    subfolderAdditionalNotes
      .addBinding(parameters.additionalNotes, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          additionalNotes: { ...parameters.additionalNotes, fontSize: v.value },
        });
      });
    subfolderAdditionalNotes
      .addBinding(parameters.additionalNotes, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          additionalNotes: { ...parameters.additionalNotes, color: v.value },
        });
      });
    subfolderAdditionalNotes
      .addBinding(parameters.additionalNotes, "alignment")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          additionalNotes: {
            ...parameters.additionalNotes,
            alignment: v.value,
          },
        });
      });
    subfolderAdditionalNotes
      .addBinding(parameters.additionalNotes, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          additionalNotes: { ...parameters.additionalNotes, offset: v.value },
        });
      });

    // Class
    // ####################################################################################################################

    folderClass.addBinding(parameters.class, "text").on("change", (v) => {
      setParameters({
        ...parameters,
        class: { ...parameters.class, text: v.value },
      });
    });

    const subfolderClass = folderClass.addFolder({
      title: subFolderName,
      expanded: false,
    });

    subfolderClass
      .addBinding(parameters.class, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          class: {
            ...parameters.class,
            fontStyle: v.value,
          },
        });
      });
    subfolderClass
      .addBinding(parameters.class, "fontSize", {
        step: 1,
        min: 0,
        max: 50,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          class: { ...parameters.class, fontSize: v.value },
        });
      });
    subfolderClass.addBinding(parameters.class, "color").on("change", (v) => {
      setParameters({
        ...parameters,
        class: { ...parameters.class, color: v.value },
      });
    });
    subfolderClass
      .addBinding(parameters.class, "alignment")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          class: {
            ...parameters.class,
            alignment: v.value,
          },
        });
      });
    subfolderClass
      .addBinding(parameters.class, "offset", {
        step: 1,
        min: -300,
        max: 300,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          class: { ...parameters.class, offset: v.value },
        });
      });
  }, []);

  return <div className="spellcard-pane" ref={paneRef}></div>;
}
