import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use for Spopeer Services</h1>
              <p className="text-gray-600 mb-8">
                Please read these terms of use carefully to ensure that you understand each provision of this agreement.
              </p>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Spopeer Services</h2>
                  <p>
                    Spopeer is a social network site for sports enthusiasts, including athletes, coaches, sports clubs and supportive professions. It provides a platform for individuals to promote their sports-related projects. Through the Spopeer website and social media channels, users can access various types of content, including articles, images, graphics, videos, audio clips, scripts, and software. Athletes, coaches, and sports clubs have the right to contribute content to the website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                  <p>
                    Your use of the Spopeer platform is contingent upon your acceptance of these terms, as well as our privacy policy. These terms apply to all Spopeer users. Some services may have additional terms, which you must accept according to our company policy. We reserve the right to update, revise, modify, or change these terms at any time, with the revised version available on the website. Continuing to use the service implies acceptance of the revised terms. Spopeer may, at its discretion, terminate, change, or suspend services without prior notice or explanation and may restrict user access to specific features.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Age Restriction</h2>
                  <p>
                    Users must be at least 18 years old to use Spopeer services. By accepting these terms, you confirm that you are of legal age to use Spopeer and that the information you provide is accurate. We reserve the right to request proof of age and may deny service or change registration criteria at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Rules for Using Services</h2>
                  <p>
                    By agreeing to these terms, you commit to using our services only for their intended purpose and within Spopeer's scope. Services are for registered users and not for commercial use. You are responsible for all activities under your account and may not share your account or content submission permissions with third parties. Additionally, you must not overload Spopeer's infrastructure, interfere with its services, bypass security measures, or engage in hacking, spamming, or any other malicious activities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration of Profiles</h2>
                  <p>
                    While browsing Spopeer is open to all, using our services and features requires registration. You must provide accurate and complete information during registration; failure to do so may result in account cancellation. Spopeer reserves the right to deny registration or cancel accounts that may cause harm or violate applicable laws. Users are responsible for their account activities and must not disclose login details. Notify our technical and customer support team immediately if you suspect security threats.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Categories</h2>
                  <p>Spopeer offers three account categories:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Athletes:</strong> For professional athletes to promote their projects, events, tips, and ideas.</li>
                    <li><strong>Coaches:</strong> For coaches who must provide information for authentication.</li>
                    <li><strong>Sports Clubs:</strong> For sports clubs to register, including providing club details and member information.</li>
                  </ul>
                  <p className="mt-4">
                    We may request IDs, sports certificates, or other proof of identity before granting registration.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Trademarks</h2>
                  <p>
                    Spopeer's trademarks, including "Spopeer" and "Spopeer.com," are protected and cannot be copied, imitated, or reproduced without prior permission. Using these marks without consent is prohibited. Additionally, all Spopeer service materials, such as images, graphics, and icons, are subject to the same restrictions. Other Spopeer names, domains, and logos belong to their respective owners.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">License and Copyright</h2>
                  <p>
                    Spopeer holds copyrights for content on its website and services, including images, videos, audio, and graphics. Users are granted a license to access and view this material for informational purposes only. This license does not permit the material's use in marketing or resale. Users must not use framing techniques, publish Spopeer material elsewhere, or engage in data mining or extraction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">"Yes" and "No"</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">By agreeing to these terms:</h3>
                      <div className="bg-green-50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-green-800 mb-2">✓ Yes - You agree to:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-green-700">
                          <li>Comply with applicable laws</li>
                          <li>Maintain updated personal information</li>
                          <li>Use real names</li>
                          <li>Use Spopeer professionally</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">✗ No - You agree not to:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-red-700">
                          <li>Use Spopeer for objectionable purposes</li>
                          <li>Infringe on others' rights</li>
                          <li>Misuse Spopeer trademarks</li>
                          <li>Imitate or use Spopeer data</li>
                          <li>Engage in unauthorized activities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Payments and Charges</h2>
                  <p>
                    Joining Spopeer is free, but certain features may have associated fees. You accept responsibility for these fees and associated taxes. We will notify you of fee changes. Your use of paid services is governed by separate terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Law and Court</h2>
                  <p>
                    These terms are governed by Greek law. Any disputes related to these terms will be addressed by the relevant Greek court.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
                  <p>
                    We reserve the right to update these terms, with changes posted on our website. Your continued use implies acceptance of revisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                  <p>
                    Spopeer may terminate or restrict your access if you breach these terms. Fees paid are non-refundable. You can request account deletion at any time, as per our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                  <p>
                    Spopeer is not responsible for user actions, content, or their interpretation. We may modify, block, or reject content or campaigns without explanation. We do not guarantee content completeness, accuracy, or availability. Users access Spopeer at their own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">General Terms</h2>
                  <p>
                    Spopeer is not liable for events beyond our control. These terms are personal and non-transferable. We may change, revise, or modify them without notice. Notices will be in writing.
                  </p>
                </section>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  By using Spopeer, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService; 