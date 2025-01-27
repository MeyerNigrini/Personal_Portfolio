import { Image } from "@mantine/core";

interface ProfileImageProps {
    src: string;
    alt: string;
    maxWidth?: number;
    maxHeight?: number;
  }

const ProfileImage = ({ src, alt, maxWidth = 1000, maxHeight = 1000 }: ProfileImageProps) => (
    <Image
      src={src}
      alt={alt}
      radius="50%"
      style={{
        width: "100%",
        maxWidth,
        height: "100%",
        maxHeight,
      }}
    />
  );
  
export default ProfileImage