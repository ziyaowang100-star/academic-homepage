export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  volume?: string;
  pages?: string;
  status: "Published" | "Accepted";
  type: "Journal" | "Conference" | "Chinese Journal";
  tags: string[];
  doi: string;
  paperLink: string;
  codeLink: string;
  selected: boolean;
};

export const publications: Publication[] = [
  {
    title: "A Fast Calculation Method for Assessing Line Fault Outage Factor in Cascading Failures",
    authors: "Pengyi Fan, Tao Yu, Zhenning Pan, Ziyao Wang*, Yufeng Wu, Wencong Xiao",
    venue: "2026 IEEE PES International Meeting (PES IM), Hong Kong, Hong Kong",
    year: 2026,
    pages: "1-5",
    status: "Published",
    type: "Conference",
    tags: ["Cascading Failures", "Line Fault Outage Factor", "Fast Calculation", "Power Systems"],
    doi: "https://doi.org/10.1109/PESIM67009.2026.11438442",
    paperLink: "https://doi.org/10.1109/PESIM67009.2026.11438442",
    codeLink: "#",
    selected: true
  },
  {
    title: "Mechanism Design for Demand Response in Flexible Data Center Loads via Indifference Sets",
    authors: "Ziyao Wang, Minghao Wang*, Kashem M. Muttaqi, Chang Liu, Tao Yu",
    venue: "2026 IEEE Industry Application Society Annual Meeting (IAS), Vancouver, CA",
    year: 2026,
    status: "Accepted",
    type: "Conference",
    tags: ["Demand Response", "Flexible Data Center Loads", "Mechanism Design", "Indifference Sets"],
    doi: "#",
    paperLink: "#",
    codeLink: "#",
    selected: true
  },
  {
    title: "Reliability-driven SOP Siting and Sizing under Multi-line Failure Scenarios in Resource-complementary Island Microgrids",
    authors: "Ziyao Wang, Yingrui Zhao, Wei Chen, Yusi Cheng, Jimmy Chih-Hsien Peng",
    venue: "IEEE Transactions on Sustainable Computing",
    year: 2026,
    status: "Published",
    type: "Journal",
    tags: ["Reliability Assessment", "Island Microgrids", "Soft Open Point", "Optimization"],
    doi: "https://doi.org/10.1109/TSUSC.2026.3673142",
    paperLink: "https://doi.org/10.1109/TSUSC.2026.3673142",
    codeLink: "#",
    selected: true
  },
  {
    title: "Reliability-driven Optimal Deployment of Mobile Energy Storage for Coupled Transportation-Power Distribution Network",
    authors: "Yusi Cheng, Tao Yu, Ziyao Wang*, Zongyuan Chen, Wencong Xiao, Zhenning Pan",
    venue: "Applied Energy",
    year: 2026,
    volume: "413",
    pages: "127766",
    status: "Published",
    type: "Journal",
    tags: ["Reliability Assessment", "Mobile Energy Storage", "Distribution Network Planning"],
    doi: "https://doi.org/10.1016/j.apenergy.2026.127766",
    paperLink: "https://www.sciencedirect.com/science/article/pii/S0306261926004186",
    codeLink: "#",
    selected: true
  },
  {
    title: "Enhancing Resilient Distribution Networks through Proactive Topology Optimization and Robotaxi Dispatch Coordination",
    authors: "Yushen Gong, Tao Yu, Ziyao Wang*, Yufeng Wu, Zhenning Pan, Wencong Xiao",
    venue: "International Journal of Electrical Power & Energy Systems",
    year: 2026,
    volume: "176",
    pages: "111682",
    status: "Published",
    type: "Journal",
    tags: ["Resilience Assessment", "Distribution Network Planning", "Robotaxi Dispatch", "Topology Optimization"],
    doi: "https://doi.org/10.1016/j.ijepes.2026.111682",
    paperLink: "https://www.sciencedirect.com/science/article/pii/S0142061526001249",
    codeLink: "#",
    selected: true
  },
  {
    title: "Optimal Smart Switch Deployment with Tri-Layer Synergized Resilience Enhancement Considering Multiple Heterogeneous Faults",
    authors: "Ziyao Wang, Yu Tao, Fan Pengyi, et al.",
    venue: "IEEE Transactions on Smart Grid",
    year: 2025,
    volume: "16(5)",
    pages: "3601-3614",
    status: "Published",
    type: "Journal",
    tags: ["Resilience Assessment", "Smart Distribution Networks", "Switch Planning"],
    doi: "#",
    paperLink: "https://ieeexplore.ieee.org/document/11004034",
    codeLink: "#",
    selected: true
  },
  {
    title: "Topology-variable-based Reliability Modeling for Optimal Smart Switch Deployment in Flexible Distribution Networks with Scenario-Based Parallel Progressive Hedging Algorithm",
    authors: "Ziyao Wang, Tao Yu, Pengyi Fan, Minghao Wang",
    venue: "Energy Conversion and Management: X",
    year: 2026,
    volume: "30",
    pages: "101596",
    status: "Accepted",
    type: "Journal",
    tags: ["Reliability Assessment", "Optimization", "Distribution Network Planning"],
    doi: "#",
    paperLink: "https://www.sciencedirect.com/science/article/pii/S2590174526000796",
    codeLink: "#",
    selected: true
  },
  {
    title: "Optimal Double Q AC-DC Hybrid Distribution System Planning with Explicit Topology-variable-based Reliability Assessment",
    authors: "Ziyao Wang, Lipeng Zhong, Zhenning Pan, et al.",
    venue: "Applied Energy",
    year: 2022,
    volume: "322",
    pages: "119438",
    status: "Published",
    type: "Journal",
    tags: ["Reliability Assessment", "AC-DC Distribution Systems", "Power System Planning"],
    doi: "#",
    paperLink: "https://doi.org/10.1016/j.apenergy.2022.119438",
    codeLink: "#",
    selected: true
  },
  {
    title: "Explicit Reliability Incorporated Switches Planning of Smart Distribution System with High Flexibility",
    authors: "Ziyao Wang, Dan Lin, Tao Yu, et al.",
    venue: "International Journal of Electrical Power & Energy Systems",
    year: 2023,
    volume: "145",
    pages: "108629",
    status: "Published",
    type: "Journal",
    tags: ["Reliability Assessment", "Smart Distribution Networks", "Switch Planning"],
    doi: "#",
    paperLink: "https://doi.org/10.1016/j.ijepes.2022.108629",
    codeLink: "#",
    selected: true
  },
  {
    title: "Key Methods for Artificial Intelligence Recognition of Power Grid Substation Wiring Diagrams",
    authors: "Ziyao Wang, Qingquan Luo, Wencong Xiao, et al.",
    venue: "Automation of Electric Power Systems",
    year: 2023,
    volume: "47(2)",
    pages: "115-124",
    status: "Published",
    type: "Chinese Journal",
    tags: ["Artificial Intelligence for Power Systems", "Substation Diagrams"],
    doi: "#",
    paperLink: "https://www.aeps-info.com/aeps/article/abstract/20210621003",
    codeLink: "#",
    selected: false
  },
  {
    title: "Double Q Planning Model for Medium Voltage Distribution Network Based on Elite Ant-Q Algorithm",
    authors: "Ziyao Wang, Junbin Chen, Dan Lin, et al.",
    venue: "Electric Power Automation Equipment",
    year: 2020,
    status: "Published",
    type: "Chinese Journal",
    tags: ["Distribution Network Planning", "Artificial Intelligence for Power Systems"],
    doi: "#",
    paperLink: "https://www.epae.cn/dlzdhsb/article/abstract/202001005",
    codeLink: "#",
    selected: false
  },
  {
    title: "A Practical Large-Scale Distribution Network Planning Model Based on Elite Ant-Q",
    authors: "Ziyao Wang, Dan Lin, Guangxuan Zeng, Tao Yu",
    venue: "IEEE Access",
    year: 2020,
    volume: "8",
    pages: "58912-58922",
    status: "Published",
    type: "Journal",
    tags: ["Distribution Network Planning", "Optimization"],
    doi: "#",
    paperLink: "https://ieeexplore.ieee.org/document/9044517",
    codeLink: "#",
    selected: true
  },
  {
    title: "Key Technologies of Graph-Model-Data Fusion Supporting Digital Planning of New-Type Distribution Networks",
    authors: "Yu Tao, Ziyao Wang*, Wencong Xiao, Zhenning Pan, Yufeng Wu, Rongbin Wei, Jingwen Li",
    venue: "Automation of Electric Power Systems",
    year: 2024,
    volume: "48(6)",
    pages: "139-153",
    status: "Published",
    type: "Chinese Journal",
    tags: ["Digital Planning", "Distribution Network Planning", "Graph-Model-Data Fusion"],
    doi: "#",
    paperLink: "https://www.aeps-info.com/aeps/article/abstract/20230505002",
    codeLink: "#",
    selected: false
  },
  {
    title: "Optimal Deployment of Multi-type Switches in Flexible Distribution Network by Explicitly Integrating Reliability Expressions",
    authors: "Pengyi Fan, Tao Yu, Ziyao Wang*, Wencong Xiao, Zhengning Pan",
    venue: "Proceedings of the CSEE",
    year: 2025,
    volume: "45(18)",
    pages: "7087-7097",
    status: "Published",
    type: "Chinese Journal",
    tags: ["Reliability Assessment", "Switch Planning"],
    doi: "#",
    paperLink: "https://www.pcsee.org/CN/10.13334/j.0258-8013.pcsee.222512",
    codeLink: "#",
    selected: false
  },
  {
    title: "Optimal Capacity Configuration Method for Microgrids Considering Grid-connected and Islanded Frequency Constraints",
    authors: "Xingyu Qiu, Yufeng Wu, Ziyao Wang, Zhenning Pan",
    venue: "Power System Protection and Control",
    year: 2023,
    volume: "51(21)",
    pages: "166-177",
    status: "Published",
    type: "Chinese Journal",
    tags: ["Microgrids", "Capacity Configuration", "Frequency Constraints"],
    doi: "#",
    paperLink: "https://www.dlbh.net/dlbh/ch/reader/view_abstract.aspx?file_no=20232114&flag=1",
    codeLink: "#",
    selected: false
  },
  {
    title: "Two-stage Generalizable Approach for Electricity Theft Detection in New Regions",
    authors: "Yipeng Wang, Tao Yu, Qingquan Luo, Xipeng Liu, Ziyao Wang*, Yufeng Wu, Zhenning Pan",
    venue: "Applied Energy",
    year: 2024,
    volume: "365",
    pages: "123228",
    status: "Published",
    type: "Journal",
    tags: ["Artificial Intelligence for Power Systems", "Power Systems Analytics"],
    doi: "#",
    paperLink: "https://www.sciencedirect.com/science/article/pii/S0306261924006111",
    codeLink: "#",
    selected: false
  },
  {
    title: "Resilience-Oriented Soft Open Point Deployment with Topology-Variable-Based Frequency Stability Constraints for Distribution Networks",
    authors: "Pengyi Fan, Tao Yu, Ziyao Wang*, Zhenning Pan, Yufeng Wu",
    venue: "Applied Energy",
    year: 2025,
    volume: "394",
    pages: "126120",
    status: "Published",
    type: "Journal",
    tags: ["Resilience Assessment", "Smart Distribution Networks", "Soft Open Point"],
    doi: "#",
    paperLink: "https://www.sciencedirect.com/science/article/pii/S0306261925008505",
    codeLink: "#",
    selected: true
  },
  {
    title: "Coding Improvement and Application Algorithm for Rapid Distribution Network Fault Reconfiguration",
    authors: "Fengsheng Chen, Zhongan Yu, Ziyao Wang*, Yufeng Wu, Wencong Xiao, Zhenning Pan",
    venue: "Power System Protection and Control",
    year: 2025,
    status: "Published",
    type: "Chinese Journal",
    tags: ["Fault Reconfiguration", "Distribution Network Planning"],
    doi: "#",
    paperLink: "https://www.dlbh.net/dlbhen/ch/reader/view_abstract.aspx?file_no=20251511&flag=1",
    codeLink: "#",
    selected: false
  }
];
