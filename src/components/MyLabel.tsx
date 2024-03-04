import "./MyLabel.css";

interface Props {
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
}
export const MyLabel = ({
  label,
  size,
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  return (
    <span className={`${size} ${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
