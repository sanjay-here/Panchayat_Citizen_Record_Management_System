import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, BarChart3, Shield, Database, Search } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Citizen Registry",
      description: "Comprehensive database to maintain detailed citizen records with personal, family, and socioeconomic information."
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Village Management",
      description: "Organize and manage multiple villages with district-wise categorization and pincode tracking."
    },
    {
      icon: <Search className="h-8 w-8 text-purple-600" />,
      title: "Advanced Search & Filter",
      description: "Quickly find citizens by name or Aadhar number with powerful search and sorting capabilities."
    },
    {
      icon: <FileText className="h-8 w-8 text-red-600" />,
      title: "Data Validation",
      description: "Built-in validation for Aadhar numbers and other critical data to ensure accuracy."
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Secure Access",
      description: "Role-based authentication system to protect sensitive citizen information."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Santhapuram Panchayat</h1>
          </div>
          <Button onClick={() => navigate("/login")} size="lg">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Citizen Record Management System
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A comprehensive digital solution for Panchayat to efficiently track, manage, and analyze citizen records across multiple villages with advanced features and secure data handling.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => navigate("/login")} size="lg" className="text-lg px-8 py-6">
            Get Started
          </Button>
          <Button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h3>
          <p className="text-lg text-gray-600">Everything you need to manage citizen records efficiently</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Our System?</h3>
            <p className="text-lg text-blue-100">Built specifically for Panchayat administration needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Digital Records</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Fast</div>
              <div className="text-blue-100">Search & Retrieval</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Secure</div>
              <div className="text-blue-100">Data Protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
        <p className="text-lg text-gray-600 mb-8">
          Join modern Panchayats using digital citizen management
        </p>
        <Button onClick={() => navigate("/login")} size="lg" className="text-lg px-8 py-6">
          Access Dashboard
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Panchayat Citizen Record Management System
              </h3>
              <p className="text-gray-300">
                A comprehensive solution for managing citizen data
                for local governance.
              </p>
              <br></br>
              <p>Thanks to</p>
              <img
                src="src/SRM_logo.jpg"
                alt="Panchayat Logo"
                className="w-40 h-auto mb-0"
              />
            </div>
           <div>
              <h3 className="text-lg font-semibold mb-4">Developer</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  Developed by <span className="font-medium text-white">Sanjay A (RA2311008020159). <br></br> Student of SRMist Ramapuram, Chennai</span>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sanjay-a-749a90223/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sanjay2407san@gmail.com"
                    className="hover:text-white"
                  >
                    sanjay2407san@gmail.com
                  </a>
                </li>
                <li>
                  <span>+91 9943034411</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic text-gray-300">
                <p>Santhapuram Panchayat</p>
                <p>Phone: +91-9965879553</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Santhapuram Panchayat Database Management System. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
