import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          OSC - Ovichat Secret Communication @ 2024
        </p>
      </div>

      <div className={styles.center}>
        <Image
          src="/logo.png"
          alt="Next.js Logo"
          width={440}
          height={360}
          priority
        />
      </div>
      <div className={styles.grid}>
        <Link
          href="/image-comm"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Image Steganography{" "}
          </h2>
          <p>Encode & Decode messages using .PNG files for secret communication.</p>
        </Link>

        <Link
          href="/audio-comm"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Audio Steganography{" "}
          </h2>
          <p>Encode & Decode messages using .WAV files for secret communication.</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Video Steganography{" "}
          </h2>
          <p>Work in progress...</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Text Steganography{" "}
          </h2>
          <p>
            Work in progress...
          </p>
        </Link>
      </div>
    </main>
  );
}
