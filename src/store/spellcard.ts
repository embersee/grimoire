import { create } from "zustand";

// Define types for parameters
type Parameters = {
  border: {
    borderColor: string;
    borderStyle: string; // todo: later
    borderWidth: number;
    borderRadius: number;
  };
  background: {
    backgroundColor: string;
    backgroundImage: string; // maybe
    backgroundSize: string; // later
    backgroundPosition: string; // maybe
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
    textShadow: boolean;
    text: string;
  };
  spellLevel: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    textShadow: boolean;
    text: string;
  };
  schoolOfMagic: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    textShadow: boolean;
    text: string;
  };
  castingTime: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    textShadow: boolean;
    text: string;
  };
  range: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    textShadow: boolean;
    text: string;
  };
  components: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    textShadow: boolean;
    text: string;
  };
  duration: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    textShadow: boolean;
    text: string;
  };
  spellDescription: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    textShadow: boolean;
    text: string;
  };
  additionalNotes: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    textShadow: boolean;
    text: string;
  };
  generalSpellStyle: {
    fontStyle: string;
    fontSize: number;
    color: string;
    alignment: string;
    textShadow: boolean;
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
      borderWidth: 1,
      borderRadius: 0,
    },
    background: {
      backgroundColor: "#FFFFFF",
      backgroundImage: "",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
      fontSize: 16,
      color: "#000000",
      alignment: "left",
      textShadow: false,
      text: "Fireball",
    },
    spellLevel: {
      text: "example",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      alignment: "left",
      textShadow: false,
    },
    schoolOfMagic: {
      text: "example",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      alignment: "left",
      textShadow: false,
    },
    castingTime: {
      text: "example",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      alignment: "left",
      textShadow: false,
    },
    range: {
      text: "example",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      alignment: "left",
      textShadow: false,
    },
    components: {
      text: "example",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      alignment: "left",
      textShadow: false,
    },
    duration: {
      text: "example",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      alignment: "left",
      textShadow: false,
    },
    spellDescription: {
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      alignment: "left",
      textShadow: false,
      text: "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.",
    },
    additionalNotes: {
      text: "example",
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      alignment: "left",
      textShadow: false,
    },
    generalSpellStyle: {
      fontStyle: "normal",
      fontSize: 14,
      color: "#000000",
      alignment: "left",
      textShadow: false,
    },
  },
  setParameters: (newParameters: Partial<Parameters>) =>
    set((state) => ({ parameters: { ...state.parameters, ...newParameters } })),
}));

export default useSpellCardStore;
