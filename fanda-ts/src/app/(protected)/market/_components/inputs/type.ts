export interface ImgInputProps {
  title: (text: string) => React.ReactNode;
  customState: string | null;
  customUseState: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ProductInputProps {
  title: (text: string) => React.ReactNode;
  customState: string;
  customUseState: React.Dispatch<React.SetStateAction<string>>;
}
export interface ProductTagsInputProps {
  title: (text: string) => React.ReactNode;
  customState: string[];
  customUseState: React.Dispatch<React.SetStateAction<string[]>>;
}
