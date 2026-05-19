export type Project = {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  selected: boolean;
};

export const projects: Project[] = [
  {
    title: "High-Reliability Coordination Planning of Distribution Networks",
    organization: "Guangdong Provincial Planning Center",
    period: "Sept. 2019-June 2022",
    description:
      "Developed intelligent distribution network planning models and integrated them into a digital power grid planning platform. The methods were successfully applied in practical planning areas.",
    tags: ["Reliability", "Digital Planning"],
    selected: true
  },
  {
    title: "Intelligent Network Problem Diagnosis and Planning Strategy Generation for Medium-Voltage Distribution Networks",
    organization: "China Southern Power Grid",
    period: "June 2022-Oct. 2023",
    description:
      "Developed a distribution network planning model considering road network constraints and CIM-based data interfaces. The method reduced planning time from manual multi-day processes to automated minute-level analysis.",
    tags: ["CIM", "Automation", "Planning Strategy"],
    selected: true
  },
  {
    title: "Distribution Network Planning Methods for High Penetration of Renewable Energy",
    organization: "Southern Power Grid Scientific Research Institute",
    period: "June 2022-Oct. 2023",
    description:
      "Developed renewable energy hosting capacity assessment tools for distribution networks. The program supports CIM file interfaces and has been applied in multiple provincial power grid planning practices.",
    tags: ["Renewable Energy", "Hosting Capacity"],
    selected: true
  },
  {
    title: "Graphic Conversion Technology for Distribution Network Planning",
    organization: "Dongguan Power Supply Bureau",
    period: "June 2022-Dec. 2023",
    description:
      "Developed intelligent mapping methods for electrical connection diagrams and supported digital system development for distribution network planning.",
    tags: ["Diagram Recognition", "Digital Planning"],
    selected: false
  }
];
