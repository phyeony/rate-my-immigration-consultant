import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { City } from "@/types/City";

export interface CanadaCity {
  city: string;
  province_id: string;
  province_name: string;
}

export function getCanadaCities(): City[] {
  const csvPath = path.join(process.cwd(), "data/canada_cities.csv");
  const csvString = fs.readFileSync(csvPath, "utf8");
  const { data } = Papa.parse<CanadaCity>(csvString, {
    header: true,
    skipEmptyLines: true,
  });
  // console.log("DATA", data)
  const reformatted: City[] = data.map(d=> ({
    value: d.city,
    label: d.city,
    province: d.province_name,
    provinceId: d.province_id
  }))
  return reformatted;
}