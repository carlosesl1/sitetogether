import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import styles from "./fractional-freight-sections.module.css";

export function FractionalFreightDecor({
  inverse = false,
  flip = false,
}: {
  readonly inverse?: boolean;
  readonly flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`${styles.decor} ${inverse ? styles.decorDark : ""} ${flip ? styles.decorFlipped : ""}`}
    >
      <PixelDecor
        placement="topRight"
        mask="topRight"
        opacity={inverse ? 0.24 : 0.2}
        className={styles.cornerPixels}
      />
      <PixelDecor
        placement="bottomLeft"
        mask="bottomLeft"
        opacity={inverse ? 0.14 : 0.1}
        className={styles.bottomPixels}
      />
    </div>
  );
}
