import "./MyLabel.css";

export interface Props {
  /**
   * The text to display
   */
  label: string;

  /**
   * The size of the text
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalize the text
   */
  allCaps?: boolean;
  /** *
   * Label Color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Span font color
   */
  fontColor?: string;

  /**
   * Background color
   */
  backgroundColor?: string;
}
export const MyLabel = ({
  label,
  size,
  allCaps = false,
  color,
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
