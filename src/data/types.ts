// Auto-generated type definitions for dialogue frontmatter
export interface DialogueFrontmatter {
  title: string;
  day: number;
  dialogueId: string;
  universe: string;
  participants: string[];
  firstUtterance: {
    speaker: string;
    words: string;
  };
  filePath: string;
}

export interface DialoguesData {
  dialogues: DialogueFrontmatter[];
}
