import React from "react";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Layout } from "@/components/layout";
import { Home } from "@/pages/Home";
import { BookAppointment } from "@/pages/BookAppointment";
import { ServiceRequests } from "@/pages/ServiceRequests";

// Placeholder components for other routes
const Documents: React.FC = () => (
  <div className="max-w-7xl mx-auto">
    <h1 className="text-2xl font-semibold text-rak-primary">Documents</h1>
    <p className="text-gray-600 mt-4">
      Document management page coming soon...
    </p>
  </div>
);

const Properties: React.FC = () => (
  <div className="max-w-7xl mx-auto">
    <h1 className="text-2xl font-semibold text-rak-primary">Properties</h1>
    <p className="text-gray-600 mt-4">
      Property management page coming soon...
    </p>
  </div>
);

const Businesses: React.FC = () => (
  <div className="max-w-7xl mx-auto">
    <h1 className="text-2xl font-semibold text-rak-primary">Businesses</h1>
    <p className="text-gray-600 mt-4">Business services page coming soon...</p>
  </div>
);

const PersonalInformation: React.FC = () => (
  <div className="max-w-7xl mx-auto">
    <h1 className="text-2xl font-semibold text-rak-primary">
      Personal Information
    </h1>
    <p className="text-gray-600 mt-4">
      Personal information page coming soon...
    </p>
  </div>
);

const GovernmentServices: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 className="text-2xl font-semibold text-rak-primary">
      Government Services
    </h1>
    <p className="text-gray-600 mt-4">
      Government services directory coming soon...
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<BookAppointment />} />
          <Route path="/service-requests" element={<ServiceRequests />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route
            path="/personal-information"
            element={<PersonalInformation />}
          />
          <Route path="/government-services" element={<GovernmentServices />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
};

export default App;
