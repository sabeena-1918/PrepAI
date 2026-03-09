import { Cpu, Radio, Zap, Building2, Landmark, Shield, Train, Briefcase } from "lucide-react";

export const departments = [
  {
    id: "cse",
    title: "Computer Science (CSE)",
    description: "Software engineering, AI/ML, web development and more",
    icon: Cpu,
    to: "/department/cse",
    roles: 8,
  },
  {
    id: "ece",
    title: "Electronics & Communication (ECE)",
    description: "VLSI design, embedded systems, signal processing",
    icon: Radio,
    to: "/department/ece",
    roles: 6,
  },
  {
    id: "eee",
    title: "Electrical Engineering (EEE)",
    description: "Power systems, control systems, electrical machines",
    icon: Zap,
    to: "/department/eee",
    roles: 5,
  },
];

export const govtJobs = [
  {
    id: "psu",
    title: "PSU Job Interviews",
    description: "BHEL, IOCL, ONGC, NTPC and other PSU interviews",
    icon: Building2,
    to: "/department/psu",
    roles: 6,
  },
  {
    id: "bank",
    title: "Banking Exams & Interviews",
    description: "SBI PO, IBPS, RBI and banking sector preparations",
    icon: Landmark,
    to: "/department/bank",
    roles: 4,
  },
  {
    id: "ssc",
    title: "SSC & Defence",
    description: "SSC CGL, CHSL, NDA, CDS interview preparation",
    icon: Shield,
    to: "/department/ssc",
    roles: 4,
  },
  {
    id: "railway",
    title: "Railway Exams",
    description: "RRB NTPC, Group D, JE interview preparation",
    icon: Train,
    to: "/department/railway",
    roles: 3,
  },
  {
    id: "civil-services",
    title: "Civil Services (UPSC)",
    description: "IAS, IPS, IFS personality test preparation",
    icon: Briefcase,
    to: "/department/civil-services",
    roles: 3,
  },
];

export interface RoleInfo {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  questions: number;
}

export const departmentRoles: Record<string, { name: string; roles: RoleInfo[] }> = {
  cse: {
    name: "Computer Science (CSE)",
    roles: [
      { title: "Data Scientist", description: "ML models, data analysis, statistics & Python", difficulty: "Advanced", questions: 120 },
      { title: "Frontend Developer", description: "React, HTML/CSS, JavaScript, UI/UX", difficulty: "Intermediate", questions: 100 },
      { title: "Backend Developer", description: "APIs, databases, server architecture", difficulty: "Intermediate", questions: 110 },
      { title: "Full Stack Developer", description: "End-to-end web application development", difficulty: "Advanced", questions: 130 },
      { title: "DevOps Engineer", description: "CI/CD, cloud, Docker, Kubernetes", difficulty: "Advanced", questions: 80 },
      { title: "Mobile App Developer", description: "Android, iOS, React Native, Flutter", difficulty: "Intermediate", questions: 90 },
      { title: "Cybersecurity Analyst", description: "Network security, ethical hacking, SIEM", difficulty: "Advanced", questions: 75 },
      { title: "Software Tester (QA)", description: "Manual & automation testing, Selenium", difficulty: "Beginner", questions: 85 },
    ],
  },
  ece: {
    name: "Electronics & Communication (ECE)",
    roles: [
      { title: "VLSI Design Engineer", description: "Digital design, Verilog, ASIC/FPGA", difficulty: "Advanced", questions: 90 },
      { title: "Embedded Systems Engineer", description: "Microcontrollers, RTOS, firmware", difficulty: "Intermediate", questions: 85 },
      { title: "Signal Processing Engineer", description: "DSP, image processing, filters", difficulty: "Advanced", questions: 70 },
      { title: "IoT Developer", description: "Sensors, protocols, edge computing", difficulty: "Intermediate", questions: 65 },
      { title: "RF Engineer", description: "Antenna design, wireless communication", difficulty: "Advanced", questions: 60 },
      { title: "Network Engineer", description: "Routing, switching, network security", difficulty: "Intermediate", questions: 80 },
    ],
  },
  eee: {
    name: "Electrical Engineering (EEE)",
    roles: [
      { title: "Power Systems Engineer", description: "Generation, transmission, distribution", difficulty: "Advanced", questions: 80 },
      { title: "Control Systems Engineer", description: "PLC, SCADA, automation", difficulty: "Intermediate", questions: 75 },
      { title: "Electrical Design Engineer", description: "Circuit design, PCB, CAD tools", difficulty: "Intermediate", questions: 70 },
      { title: "Renewable Energy Engineer", description: "Solar, wind, energy storage systems", difficulty: "Beginner", questions: 60 },
      { title: "Instrumentation Engineer", description: "Sensors, calibration, measurement", difficulty: "Intermediate", questions: 65 },
    ],
  },
  psu: {
    name: "PSU Job Interviews",
    roles: [
      { title: "BHEL Engineer", description: "Technical & HR interview preparation", difficulty: "Intermediate", questions: 90 },
      { title: "IOCL Officer", description: "Technical aptitude and GD preparation", difficulty: "Intermediate", questions: 80 },
      { title: "ONGC Executive", description: "Domain knowledge & personality test", difficulty: "Advanced", questions: 85 },
      { title: "NTPC Engineer", description: "Power sector technical interview", difficulty: "Intermediate", questions: 75 },
      { title: "GAIL Executive", description: "Gas & petrochemical sector interviews", difficulty: "Intermediate", questions: 70 },
      { title: "SAIL Management Trainee", description: "Steel industry technical rounds", difficulty: "Beginner", questions: 65 },
    ],
  },
  bank: {
    name: "Banking Exams & Interviews",
    roles: [
      { title: "SBI PO Interview", description: "Current affairs, banking knowledge", difficulty: "Intermediate", questions: 100 },
      { title: "IBPS PO/Clerk", description: "Banking aptitude and personality", difficulty: "Beginner", questions: 90 },
      { title: "RBI Grade B", description: "Economics, finance, policy questions", difficulty: "Advanced", questions: 80 },
      { title: "Insurance (LIC/GIC)", description: "Insurance sector interview prep", difficulty: "Beginner", questions: 70 },
    ],
  },
  ssc: {
    name: "SSC & Defence",
    roles: [
      { title: "SSC CGL Interview", description: "General awareness & personality", difficulty: "Intermediate", questions: 80 },
      { title: "NDA/CDS SSB", description: "Services Selection Board preparation", difficulty: "Advanced", questions: 90 },
      { title: "CAPF Interview", description: "Central Armed Police Forces prep", difficulty: "Intermediate", questions: 70 },
      { title: "SSC CHSL", description: "Typing test & document verification", difficulty: "Beginner", questions: 60 },
    ],
  },
  railway: {
    name: "Railway Exams",
    roles: [
      { title: "RRB NTPC", description: "Non-technical popular categories", difficulty: "Beginner", questions: 85 },
      { title: "RRB JE", description: "Junior Engineer technical interview", difficulty: "Intermediate", questions: 75 },
      { title: "RRB Group D", description: "Physical & document verification", difficulty: "Beginner", questions: 60 },
    ],
  },
  "civil-services": {
    name: "Civil Services (UPSC)",
    roles: [
      { title: "IAS Personality Test", description: "UPSC CSE interview board preparation", difficulty: "Advanced", questions: 120 },
      { title: "IPS Interview", description: "Police service personality assessment", difficulty: "Advanced", questions: 100 },
      { title: "IFS Interview", description: "Foreign service interview preparation", difficulty: "Advanced", questions: 90 },
    ],
  },
};
