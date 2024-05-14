import { create } from "zustand";

// Define types for parameters
type Parameters = {
  border: {
    borderColor: string;
    borderStyle: string; // todo: later
    borderWidth: number;
    borderRadius: number;
    topBorderWidth: number;
    rightBorderWidth: number;
    bottomBorderWidth: number;
    leftBorderWidth: number;
  };
  background: {
    backgroundColor: string;
    backgroundImage: string; // maybe
    backgroundSize: string; // later
    backgroundPosition: string; // maybe
  };
  face: {
    borderColor: string;
    borderStyle: string;
    borderWidth: number;
    borderRadius: number;
    size: { x: number; y: number };
    backgroundColor: string;
    color: string;
    offset: { x: number; y: number };
  };
  cardLayout: {
    cardSize: {
      x: number;
      y: number;
    };
    cardOrientation: string;
    margins: number;
    padding: number;
  };
  iconsGraphics: {
    spellIcon: string;
  };
  logoBrand: {
    logoImage: string;
  };
  watermarkOverlay: {
    watermarkImage: string;
    overlayImage: string;
  };
  outputFormat: string;
  exportOptions: {
    saveAsPDF: boolean;
    saveAsImage: boolean;
  };
  spellName: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    offset: { x: number; y: number };
    text: string;
  };
  spellLevel: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    offset: { x: number; y: number };
    text: string;
  };
  schoolOfMagic: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    offset: { x: number; y: number };
    text: string;
  };
  castingTime: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    offset: { x: number; y: number };
    text: string;
  };
  range: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    offset: { x: number; y: number };
    text: string;
  };
  components: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    offset: { x: number; y: number };
    text: string;
  };
  duration: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    offset: { x: number; y: number };
    text: string;
  };
  spellDescription: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    offset: { x: number; y: number };
    text: string;
  };
  additionalNotes: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    offset: { x: number; y: number };
    text: string;
  };
  class: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    offset: { x: number; y: number };
    text: string;
  };
  generalSpellStyle: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
  };
};

// Define state and actions
interface SpellCardState {
  parameters: Parameters;
  setParameters: (newParameters: Partial<Parameters>) => void;
}

// Create Zustand store
const useSpellCardStore = create<SpellCardState>((set) => ({
  parameters: {
    border: {
      borderColor: "#000000",
      borderStyle: "solid",
      borderWidth: 10,
      borderRadius: 8,
      topBorderWidth: 10,
      rightBorderWidth: 10,
      bottomBorderWidth: 26,
      leftBorderWidth: 10,
    },
    background: {
      backgroundColor: "#FFFFFF",
      backgroundImage: "",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    face: {
      backgroundColor: "#a09393",
      color: "#FFFFFF",
      borderColor: "#000000",
      borderStyle: "solid",
      borderWidth: 3,
      borderRadius: 4,
      size: { x: 57.75, y: 78.5 },
      offset: { x: 0, y: 0 },
    },
    cardLayout: {
      cardSize: { x: 63, y: 88 },
      cardOrientation: "portrait",
      margins: 10,
      padding: 5,
    },
    iconsGraphics: {
      spellIcon: "*",
    },
    logoBrand: {
      logoImage: "",
    },
    watermarkOverlay: {
      watermarkImage: "",
      overlayImage: "",
    },
    outputFormat: "pdf",
    exportOptions: {
      saveAsPDF: true,
      saveAsImage: true,
    },
    spellName: {
      fontStyle: "normal",
      fontSize: 18,
      color: "#000000",
      alignment: "left",
      offset: { x: 0, y: 0 },
      text: "__Fireball__",
    },
    spellLevel: {
      text: "Level",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      offset: { x: 0, y: 0 },
      alignment: "left",
    },
    schoolOfMagic: {
      text: "School of Magic",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      offset: { x: 0, y: 0 },
      alignment: "left",
    },
    castingTime: {
      text: "Casting Time",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      offset: { x: 0, y: 0 },
      alignment: "left",
    },
    range: {
      text: "Range",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      offset: { x: 0, y: 0 },
      alignment: "left",
    },
    components: {
      text: "V, S, M (components)",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      offset: { x: 0, y: 0 },
      alignment: "left",
    },
    duration: {
      text: "1 round (duration)",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      offset: { x: 0, y: 0 },
      alignment: "left",
    },
    spellDescription: {
      text: "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.",
      fontStyle: "normal",
      fontSize: 8,
      color: "#000000",
      offset: { x: 0, y: 0 },
      alignment: "left",
    },
    additionalNotes: {
      text: "__At Higher Levels:__ When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
      fontStyle: "normal",
      fontSize: 8,
      color: "#000000",
      offset: { x: 0, y: 0 },
      alignment: "left",
    },
    class: {
      text: "Wizard",
      fontStyle: "normal",
      fontSize: 8,
      color: "#000000",
      offset: { x: 0, y: 0 },
      alignment: "left",
    },
    generalSpellStyle: {
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      offset: { x: 0, y: 0 },
      alignment: "left",
    },
  },
  setParameters: (newParameters: Partial<Parameters>) =>
    set((state) => ({ parameters: { ...state.parameters, ...newParameters } })),
}));

export default useSpellCardStore;
