"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";

import type { GalleryImage } from "@/lib/content";

type GalleryProps = {
  images: readonly GalleryImage[];
};

export function Gallery({ images }: GalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  function openAt(index: number) {
    setActiveIndex(index);
    dialogRef.current?.showModal();
  }

  function showOffset(offset: number) {
    setActiveIndex((index) => (index + offset + images.length) % images.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowLeft") showOffset(-1);
    if (event.key === "ArrowRight") showOffset(1);
  }

  // A click on the dialog itself (outside its content) lands on the element, not on a child.
  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) event.currentTarget.close();
  }

  return (
    <>
      <ul className="gallery">
        {images.map((item, index) => (
          <li key={item.image.src}>
            <button type="button" className="gallery-item" onClick={() => openAt(index)}>
              <Image src={item.image} alt={item.alt} sizes="(min-width: 900px) 50vw, 100vw" />
              <span className="gallery-caption">{item.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClick={handleDialogClick}
        onKeyDown={handleKeyDown}
      >
        <figure className="lightbox-frame">
          <Image
            src={activeImage.image}
            alt={activeImage.alt}
            sizes="(min-width: 1100px) 1000px, 92vw"
            className="lightbox-image"
          />
          <figcaption className="lightbox-caption">{activeImage.caption}</figcaption>
        </figure>
        <button
          type="button"
          className="lightbox-button lightbox-close"
          onClick={() => dialogRef.current?.close()}
          aria-label="Kapat"
        >
          ×
        </button>
        <button
          type="button"
          className="lightbox-button lightbox-prev"
          onClick={() => showOffset(-1)}
          aria-label="Önceki görsel"
        >
          ‹
        </button>
        <button
          type="button"
          className="lightbox-button lightbox-next"
          onClick={() => showOffset(1)}
          aria-label="Sonraki görsel"
        >
          ›
        </button>
      </dialog>
    </>
  );
}
