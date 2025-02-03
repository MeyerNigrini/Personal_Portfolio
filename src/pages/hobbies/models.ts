import { KeyValuePair } from "../../models";

export interface HobbyData {
  karate: { title: string; paragraph: string; details: KeyValuePair[] };
  gaming: { title: string; paragraph: string; details: KeyValuePair[] };
}