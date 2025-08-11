import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileSpreadsheet, FolderArchive } from "lucide-react";

const tasks = [
  { Stage: "Vision & Planning", Task: "Define vision, mission, core values", Description: "Clarify the unique purpose of the school", Status: "" },
  { Stage: "Vision & Planning", Task: "Choose school type & curriculum", Description: "e.g. CBC Primary Day School", Status: "" },
  { Stage: "Vision & Planning", Task: "Select school name, motto, logo", Description: "Begin branding process", Status: "" },
  { Stage: "Vision & Planning", Task: "Draft simple business plan", Description: "Include market analysis and cost estimates", Status: "" },
  { Stage: "Vision & Planning", Task: "Project timeline & milestones", Description: "Set weekly goals from land to launch", Status: "" },
  { Stage: "Land, Structure & Approvals", Task: "Secure land (buy/lease)", Description: "Accessible & zoned for education use", Status: "" },
  { Stage: "Land, Structure & Approvals", Task: "Architectural drawings", Description: "Comply with MoE standards", Status: "" },
  { Stage: "Land, Structure & Approvals", Task: "Apply for construction permits", Description: "NEMA, public health, fire approvals", Status: "" },
  { Stage: "Land, Structure & Approvals", Task: "Begin construction", Description: "Classrooms, admin block, sanitation", Status: "" },
  { Stage: "Land, Structure & Approvals", Task: "Install utilities & security", Description: "Water, electricity, perimeter fencing", Status: "" },
  { Stage: "Legal Registration & Compliance", Task: "Register business entity", Description: "Company, trust or NGO", Status: "" },
  { Stage: "Legal Registration & Compliance", Task: "Apply for MoE registration", Description: "Obtain provisional certificate", Status: "" },
  { Stage: "Legal Registration & Compliance", Task: "Apply for NEMIS number", Description: "For Kenyan data tracking", Status: "" },
  { Stage: "Legal Registration & Compliance", Task: "Fire & health certification", Description: "Pass county inspections", Status: "" },
  { Stage: "Legal Registration & Compliance", Task: "Register for taxes (KRA PIN)", Description: "Ensure tax compliance", Status: "" },
  { Stage: "Academics & Staffing", Task: "Hire headteacher & teachers", Description: "Qualified, TSC-registered staff", Status: "" },
  { Stage: "Academics & Staffing", Task: "Recruit support staff", Description: "Secretary, cleaners, nurse, guards", Status: "" },
  { Stage: "Academics & Staffing", Task: "Acquire textbooks & materials", Description: "CBC-approved books + digital content", Status: "" },
  { Stage: "Academics & Staffing", Task: "Prepare schemes of work", Description: "Align lessons with curriculum", Status: "" },
  { Stage: "Academics & Staffing", Task: "Set up assessment system", Description: "Exams, report cards, analytics", Status: "" },
  { Stage: "Digital Systems & Website", Task: "Develop school website", Description: "Admissions, about, news, contact", Status: "" },
  { Stage: "Digital Systems & Website", Task: "Create online registration form", Description: "Collect student data & docs", Status: "" },
  { Stage: "Digital Systems & Website", Task: "Integrate M-Pesa payments", Description: "Paybill or STK Push API", Status: "" },
  { Stage: "Digital Systems & Website", Task: "Implement parent/student portal", Description: "Attendance, grades, notices", Status: "" },
  { Stage: "Digital Systems & Website", Task: "Set up report-card generator", Description: "Auto-generate PDF reports", Status: "" },
  { Stage: "Branding & Enrollment", Task: "Design & order uniforms", Description: "Affordable & durable", Status: "" },
  { Stage: "Branding & Enrollment", Task: "Produce marketing collateral", Description: "Brochures, posters, banners", Status: "" },
  { Stage: "Branding & Enrollment", Task: "Launch social media pages", Description: "Facebook, Instagram, TikTok", Status: "" },
  { Stage: "Branding & Enrollment", Task: "Host open day / tours", Description: "Invite parents & community", Status: "" },
  { Stage: "Branding & Enrollment", Task: "Start enrollment drive", Description: "Both online & offline", Status: "" },
  { Stage: "Financial Setup", Task: "Draft operational budget", Description: "Termly / annual projections", Status: "" },
  { Stage: "Financial Setup", Task: "Set fees & payment policies", Description: "Tuition, meals, transport", Status: "" },
  { Stage: "Financial Setup", Task: "Open bank accounts", Description: "Separate income & expenses", Status: "" },
  { Stage: "Financial Setup", Task: "Activate M-Pesa till/paybill", Description: "Easier digital collections", Status: "" },
  { Stage: "Financial Setup", Task: "Implement accounting system", Description: "Books or digital tool", Status: "" },
  { Stage: "Launch & Operations", Task: "Finalize classroom setup", Description: "Desks, chairs, boards installed", Status: "" },
  { Stage: "Launch & Operations", Task: "Staff induction & training", Description: "Systems, culture, safeguarding", Status: "" },
  { Stage: "Launch & Operations", Task: "Distribute starter packs", Description: "Books, timetable, IDs", Status: "" },
  { Stage: "Launch & Operations", Task: "Opening ceremony", Description: "Invite leaders, parents, media", Status: "" },
  { Stage: "Launch & Operations", Task: "Begin first term classes", Description: "Ensure compliance & readiness", Status: "" },
];

const websiteIndex = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>New School - Home</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <header>\n    <h1>Welcome to Our New School</h1>\n    <nav>\n      <a href=\"#about\">About</a>\n      <a href=\"#admissions\">Admissions</a>\n      <a href=\"#contact\">Contact</a>\n    </nav>\n  </header>\n  <section id=\"about\">\n    <h2>About Us</h2>\n    <p>Insert your school vision, mission, and values here.</p>\n  </section>\n  <section id=\"admissions\">\n    <h2>Online Registration</h2>\n    <form id=\"regForm\">\n      <input type=\"text\" name=\"studentName\" placeholder=\"Student Name\" required />\n      <input type=\"email\" name=\"parentEmail\" placeholder=\"Parent Email\" required />\n      <button type=\"submit\">Register</button>\n    </form>\n  </section>\n  <section id=\"contact\">\n    <h2>Contact</h2>\n    <p>Email: info@yourschool.ac.ke | Phone: 07xx xxx xxx</p>\n  </section>\n  <script src=\"script.js\"></script>\n</body>\n</html>`;

const websiteStyle = `body { font-family: Arial, sans-serif; margin: 0; padding: 0; line-height: 1.6; }\nheader { background: #2196f3; color: white; padding: 1rem; text-align: center; }\nnav a { margin: 0 1rem; color: white; text-decoration: none; }\nsection { padding: 2rem; }\nform input, form button { padding: 0.5rem; margin: 0.25rem 0; }`;

const websiteScript = `// Placeholder for Firebase integration. Replace with your keys if you use Firebase.\nconsole.log('Starter website ready');`;

const packageJson = {
  name: "school-online-system",
  version: "1.0.0",
  private: true,
  dependencies: {
    react: "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.23.0",
    firebase: "^10.3.1",
    "html2pdf.js": "^0.10.1"
  },
  scripts: {
    start: "react-scripts start",
    build: "react-scripts build",
    deploy: "firebase deploy"
  }
};

const readme = `# School Online System (React + Firebase)\n\nFeatures:\n- Registration, portal, reports, Firebase-ready\n\nSetup:\n- npm install\n- Configure Firebase keys in src/firebase.js\n- npm start`;

const ResourcesDownloadsSection = () => {
  const downloadChecklist = useCallback(async () => {
    const XLSX = await import("xlsx");
    const ws = XLSX.utils.json_to_sheet(tasks);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Checklist");
    XLSX.writeFile(wb, "school_startup_checklist.xlsx");
  }, []);

  const downloadStarterZip = useCallback(async () => {
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();

    // Website template
    zip.folder("school_project/website_template")
      ?.file("index.html", websiteIndex)
      .file("style.css", websiteStyle)
      .file("script.js", websiteScript);

    // Online system skeleton
    zip.folder("school_project/online_system/src/pages")
      ?.file("Home.js", "export default function Home(){return <div className='p-8 text-center'><h2>Home Page</h2></div>}")
      .file("Register.js", "export default function Register(){return <div className='p-8 text-center'><h2>Register Page</h2></div>}")
      .file("Dashboard.js", "export default function Dashboard(){return <div className='p-8 text-center'><h2>Dashboard Page</h2></div>}");

    zip.folder("school_project/online_system/src")
      ?.file("App.js", "import React from 'react';import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';import Home from './pages/Home';import Register from './pages/Register';import Dashboard from './pages/Dashboard';export default function App(){return (<BrowserRouter><nav className='p-4 bg-blue-600 text-white'><Link to='/' className='mr-4'>Home</Link><Link to='/register' className='mr-4'>Register</Link><Link to='/dashboard'>Dashboard</Link></nav><Routes><Route path='/' element={<Home/>}/><Route path='/register' element={<Register/>}/><Route path='/dashboard' element={<Dashboard/>}/></Routes></BrowserRouter>);} ")
      .file("firebase.js", "import { initializeApp } from 'firebase/app';import { getAuth } from 'firebase/auth';import { getFirestore } from 'firebase/firestore';const firebaseConfig={ apiKey:'YOUR_API_KEY', authDomain:'YOUR_AUTH_DOMAIN', projectId:'YOUR_PROJECT_ID', storageBucket:'YOUR_STORAGE_BUCKET', messagingSenderId:'YOUR_MESSAGING_SENDER_ID', appId:'YOUR_APP_ID' };const app=initializeApp(firebaseConfig);export const auth=getAuth(app);export const db=getFirestore(app);");

    zip.folder("school_project/online_system")
      ?.file("package.json", JSON.stringify(packageJson, null, 2))
      .file("README.md", readme);

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "school_project_starter.zip";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, []);

  return (
    <section className="py-20 bg-background" id="resources">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Downloads & Starter Kit</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Export the full school startup checklist and grab a ready-to-customize starter project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FileSpreadsheet className="h-5 w-5" /> School Startup Checklist (Excel)
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-4">
              <p className="text-muted-foreground">Includes all 8 stages and tasks for launching the school.</p>
              <Button variant="secondary" onClick={downloadChecklist}>
                <Download className="h-4 w-4 mr-2" /> Download XLSX
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FolderArchive className="h-5 w-5" /> Starter Project (Zip)
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-4">
              <p className="text-muted-foreground">Website template + React/Firebase skeleton to get going fast.</p>
              <Button variant="secondary" onClick={downloadStarterZip}>
                <Download className="h-4 w-4 mr-2" /> Download ZIP
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesDownloadsSection;
