import { ActionIcon, Group, Text } from "@mantine/core";
import { SocialLink } from "../models";
import getSocialIcon  from "../functions/getSocialIcon"; // Import function to get social media icons

interface SocialLinksProps {
    links: SocialLink[];
  }

const SocialLinks = ({ links }: SocialLinksProps) => (
    <Group style={{ padding: "15px 0" }}>
      {links.map((link) => (
        <div style={{ textAlign: "center" }} key={link.url}>
          <ActionIcon
            component="a"
            href={link.url}
            target="_blank"
            size="xl"
            variant="transparent"
            title={link.label}
          >
            {getSocialIcon(link.name, 100)}
          </ActionIcon>
          <Text>{link.label}</Text>
        </div>
      ))}
    </Group>
  );
 
  
export default SocialLinks;  