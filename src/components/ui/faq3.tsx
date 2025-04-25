import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Removed Avatar imports as the section is removed
import { Button } from "@/components/ui/button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading: string;
  description: string;
  items: FaqItem[]; // Made items required as it's core to the FAQ
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

// Renamed component to FAQSection
const FAQSection = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions. Can't find what you're looking for? Contact our support team.",
  items, // Removed default items, expecting them via props
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "#", // Default to #, will be overridden
}: FAQSectionProps) => {
  return (
    // Added bg-gray-900 to match the overall theme
    <section className="py-20 bg-gray-900">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          {/* Adjusted text colors for dark theme */}
          <h2 className="mb-3 text-3xl font-semibold text-white md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-gray-400 lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-gray-700">
              <AccordionTrigger className="text-white transition-opacity duration-200 hover:no-underline hover:opacity-80">
                {/* Adjusted text color and padding */}
                <div className="text-left font-medium sm:py-2 lg:py-3 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                {/* Adjusted text color */}
                <div className="text-gray-400 lg:text-base">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {/* Adjusted background and text colors for the support box */}
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-xl bg-gray-800 p-4 text-center md:p-6 lg:p-8">
          {/* Removed Avatar section */}
          <h3 className="mb-2 max-w-3xl font-semibold text-white text-xl lg:text-3xl">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-gray-400 lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            {/* Ensure button styles match the theme */}
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href={supportButtonUrl}>
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export renamed component
export { FAQSection }; 