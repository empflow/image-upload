interface TProps {
  src: string | null;
}

export default function Img({ src }: TProps) {
  if (!src) return null;
  return <img src={src} alt="The image you have uploaded" />;
}
