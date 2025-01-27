import React from "react";
import { Title, Table } from "@mantine/core";
import { KeyValuePair } from "../models";

interface KeyValueTableProps {
  data: KeyValuePair[];
  title?: string;
  fontSize?: string;
}

const KeyValueTable: React.FC<KeyValueTableProps> = ({ data, title, fontSize = "16px" }) => (
  <div>
    {title && (
      <Title
        order={2}
        style={{ textDecoration: "underline", paddingBottom: "15px" }}
      >
        {title}
      </Title>
    )}
    <Table style={{ fontSize }}>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td style={{ fontWeight: "bold" }}>{row.key}</td>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default KeyValueTable;
