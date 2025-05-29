import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy for Spopeer</h1>
              <p className="text-gray-600 mb-8">
                Welcome to Spopeer, the social network site for sports enthusiasts, operated by Sports For All. This privacy policy outlines how we handle your personal information.
              </p>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection</h2>
                  <p>
                    We collect and retain user information as long as you have an account with Spopeer. This includes essential details like your username, address, email, phone number, residence country, account login information, transaction history, communication with our support teams, and voluntarily submitted information on our website. We also gather analytical data to enhance our services and understand website traffic.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p>
                    We use your information to enhance your Spopeer experience, catering to athletes, coaches, and sports clubs. Your login details are vital for account security and personalization. We may employ your data for promotional campaigns, offer location-based services, address your feedback, and analyze our services' performance. Additional information collected during interactions will be disclosed to you at the time of collection.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Communications</h2>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800">
                      Upon registration, you'll receive welcome notifications and updates from us. We'll also keep you informed about service changes, user terms, and privacy policy updates. You have the option to customize your email preferences and unsubscribe from specific types of communications.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-center mb-2">
                      <span className="text-green-600 font-semibold text-lg">✓ Your Data is Protected</span>
                    </div>
                    <p className="text-green-800">
                      Rest assured, we never post on your behalf on third-party social media platforms without your explicit consent. We do not share your personal information with third parties.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Tracking User Information</h2>
                  <p>
                    We employ tracking technologies like cookies and cache to gather information about your interactions with Spopeer, including the pages you visit, your IP address, unique identifiers, and login details. We may also collect location data and use analytical tools to measure website traffic.
                  </p>
                  <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                    <p className="text-yellow-800 text-sm">
                      <strong>Note:</strong> We may not respond to the "do not track" option in your internet browser.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">User Disclosure of Information</h2>
                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                    <div className="flex items-center mb-2">
                      <span className="text-orange-600 font-semibold">⚠️ Important Warning</span>
                    </div>
                    <p className="text-orange-800">
                      Exercise caution when sharing personal information in public areas of Spopeer, as it becomes visible to all users and can be collected, reproduced, and shared by others.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">General Policy</h2>
                  <div className="space-y-4">
                    <p>
                      We reserve the right to disclose information as required by applicable laws and to protect Spopeer's rights. You can modify or delete your personal information in your account settings. We may retain information for legal and business purposes.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Your Rights:</h3>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Modify or delete your personal information in account settings</li>
                        <li>Request copies of your personal information (fees may apply)</li>
                        <li>Customize email preferences and unsubscribe options</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-800">
                        <strong>Age Requirement:</strong> Users under 18 should use Spopeer services under parental guidance.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                  <p>
                    This privacy policy is subject to change, and any updates will be available on our website. Your continued use of Spopeer signifies your agreement with the revised policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800">
                      Thank you for being part of the Spopeer community. We value your privacy and security. If you have any questions or concerns, please don't hesitate to contact us at <a href="mailto:erditgr@yahoo.gr" className="text-blue-600 hover:text-blue-800 underline">erditgr@yahoo.gr</a>.
                    </p>
                  </div>
                </section>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  By using Spopeer, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
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

export default PrivacyPolicy; 