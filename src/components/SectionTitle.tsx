import React from "react";
import { Title } from "@mantine/core";

const SectionTitle: React.FC<{title: string}> = ({title}) => (
  <div style={{ textAlign: "center", paddingBottom: "10px" }}>
    <Title order={2} style={{ textDecoration: "underline" }}>
      {title}                       
    </Title>
  </div>  
);

export default SectionTitle;