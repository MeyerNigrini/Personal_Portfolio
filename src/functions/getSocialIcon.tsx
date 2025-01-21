import { IconBrandLinkedin, IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react';

function getSocialIcon(name: string, size: number = 20, color: string = 'black') {
  switch (name.toLowerCase()) {
    case 'linkedin':
      return <IconBrandLinkedin size={size} color={color} />;
    case 'facebook':
      return <IconBrandFacebook size={size} color={color} />;
    case 'github':
      return <IconBrandGithub size={size} color={color} />;
    default:
      return null; // Optionally return a default icon or null
  }
}

export default getSocialIcon;
