import { useEffect, useRef } from "react";
import useSpellCardStore from "../store/spellcard";
import { Pane } from "tweakpane";

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
      title: "Parameters",
    });
    paneRef.current.appendChild(pane.element);

    // Add tabs for categories
    const tabs = pane.addTab({
      pages: [
        { title: "Border" },
        { title: "Background" },
        { title: "Card Layout" },
        { title: "Icons/Graphics" },
        { title: "Export Options" },
        { title: "Spell Details" },
      ],
    });

    // Border category
    // Border Width
    tabs.pages[0]
      .addBinding(parameters.border, "borderWidth", {
        step: 1,
        min: 0,
        max: 100,
      })
      .on("change", (v) => {
        setParameters({
          ...parameters,
          border: { ...parameters.border, borderWidth: v.value },
        });
      });

    // Border Color
    tabs.pages[0]
      .addBinding(parameters.border, "borderColor")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          border: { ...parameters.border, borderColor: v.value },
        });
      });

    // Background category
    // Background Color
    tabs.pages[1]
      .addBinding(parameters.background, "backgroundColor")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          background: { ...parameters.background, backgroundColor: v.value },
        });
      });

    // Background Image
    tabs.pages[1]
      .addBinding(parameters.background, "backgroundImage")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          background: { ...parameters.background, backgroundImage: v.value },
        });
      });

    // Card Layout category
    // Card Size
    tabs.pages[2]
      .addBinding(parameters.cardLayout, "cardSize")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          cardLayout: { ...parameters.cardLayout, cardSize: v.value },
        });
      });

    // Card Orientation
    tabs.pages[2]
      .addBinding(parameters.cardLayout, "cardOrientation")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          cardLayout: { ...parameters.cardLayout, cardOrientation: v.value },
        });
      });

    // Margins
    tabs.pages[2]
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
    tabs.pages[2]
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
    tabs.pages[3]
      .addBinding(parameters.iconsGraphics, "spellIcon")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          iconsGraphics: { ...parameters.iconsGraphics, spellIcon: v.value },
        });
      });

    // Export Options category
    // Output Format
    tabs.pages[4].addBinding(parameters, "outputFormat").on("change", (v) => {
      setParameters({
        ...parameters,
        outputFormat: v.value,
      });
    });

    // Save as PDF
    tabs.pages[4]
      .addBinding(parameters.exportOptions, "saveAsPDF")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          exportOptions: { ...parameters.exportOptions, saveAsPDF: v.value },
        });
      });

    // Save as Image
    tabs.pages[4]
      .addBinding(parameters.exportOptions, "saveAsImage")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          exportOptions: { ...parameters.exportOptions, saveAsImage: v.value },
        });
      });

    // Spell Details tabs
    const folderGeneralStyle = tabs.pages[5].addFolder({
      title: "General",
    });
    const folderSpellName = tabs.pages[5].addFolder({ title: "Spell Name" });
    const folderSpellLevel = tabs.pages[5].addFolder({
      title: "Spell Level",
      expanded: false,
    });
    const folderSchoolOfMagic = tabs.pages[5].addFolder({
      title: "School of Magic",
      expanded: false,
    });
    const folderCastingTime = tabs.pages[5].addFolder({
      title: "Casting Time",
      expanded: false,
    });
    const folderRange = tabs.pages[5].addFolder({
      title: "Range",
      expanded: false,
    });
    const folderComponents = tabs.pages[5].addFolder({
      title: "Components",
      expanded: false,
    });
    const folderDuration = tabs.pages[5].addFolder({
      title: "Duration",
      expanded: false,
    });
    const folderSpellDescription = tabs.pages[5].addFolder({
      title: "Spell Description",
      expanded: false,
    });
    const folderAdditionalNotes = tabs.pages[5].addFolder({
      title: "Additional Notes",
      expanded: false,
    });

    // General Spell Style
    // ####################################################################################################################
    folderGeneralStyle
      .addBinding(parameters.spellName, "fontStyle")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, fontStyle: v.value },
        });
      });
    folderGeneralStyle
      .addBinding(parameters.spellName, "fontSize")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, fontSize: v.value },
        });
      });
    folderGeneralStyle
      .addBinding(parameters.spellName, "color")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, color: v.value },
        });
      });
    folderGeneralStyle
      .addBinding(parameters.spellName, "alignment")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, alignment: v.value },
        });
      });
    folderGeneralStyle
      .addBinding(parameters.spellName, "textShadow")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, textShadow: v.value },
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
      .addBinding(parameters.spellName, "fontSize")
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
      .addBinding(parameters.spellName, "alignment")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, alignment: v.value },
        });
      });
    subfolderSpellName
      .addBinding(parameters.spellName, "textShadow")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellName: { ...parameters.spellName, textShadow: v.value },
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
      .addBinding(parameters.spellLevel, "fontSize")
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
      .addBinding(parameters.spellLevel, "alignment")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellLevel: { ...parameters.spellLevel, alignment: v.value },
        });
      });
    subfolderSpellLevel
      .addBinding(parameters.spellLevel, "textShadow")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellLevel: { ...parameters.spellLevel, textShadow: v.value },
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
      .addBinding(parameters.schoolOfMagic, "fontSize")
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
      .addBinding(parameters.schoolOfMagic, "alignment")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          schoolOfMagic: { ...parameters.schoolOfMagic, alignment: v.value },
        });
      });
    subfolderSchoolOfMagic
      .addBinding(parameters.schoolOfMagic, "textShadow")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          schoolOfMagic: { ...parameters.schoolOfMagic, textShadow: v.value },
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
      .addBinding(parameters.castingTime, "fontSize")
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
      .addBinding(parameters.castingTime, "alignment")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          castingTime: { ...parameters.castingTime, alignment: v.value },
        });
      });
    subfolderCastingTime
      .addBinding(parameters.castingTime, "textShadow")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          castingTime: { ...parameters.castingTime, textShadow: v.value },
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
      .addBinding(parameters.range, "fontSize")
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
      .addBinding(parameters.range, "alignment")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          range: { ...parameters.range, alignment: v.value },
        });
      });
    subfolderRange
      .addBinding(parameters.range, "textShadow")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          range: { ...parameters.range, textShadow: v.value },
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
      .addBinding(parameters.components, "fontSize")
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
      .addBinding(parameters.components, "alignment")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          components: { ...parameters.components, alignment: v.value },
        });
      });
    subfolderComponents
      .addBinding(parameters.components, "textShadow")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          components: { ...parameters.components, textShadow: v.value },
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
      .addBinding(parameters.duration, "fontSize")
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
      .addBinding(parameters.duration, "alignment")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          duration: { ...parameters.duration, alignment: v.value },
        });
      });
    subfolderDuration
      .addBinding(parameters.duration, "textShadow")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          duration: { ...parameters.duration, textShadow: v.value },
        });
      });

    // Spell Description
    // ####################################################################################################################

    folderSpellDescription
      .addBinding(parameters.spellDescription, "text")
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
      .addBinding(parameters.spellDescription, "fontSize")
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
      .addBinding(parameters.spellDescription, "alignment")
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
      .addBinding(parameters.spellDescription, "textShadow")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          spellDescription: {
            ...parameters.spellDescription,
            textShadow: v.value,
          },
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
      .addBinding(parameters.additionalNotes, "fontSize")
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
      .addBinding(parameters.additionalNotes, "textShadow")
      .on("change", (v) => {
        setParameters({
          ...parameters,
          additionalNotes: {
            ...parameters.additionalNotes,
            textShadow: v.value,
          },
        });
      });
  }, []);

  return <div ref={paneRef}></div>;
}
