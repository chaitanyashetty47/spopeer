import { FAQSection } from "@/components/ui/faq3";

const spopeerFaqItems = [
  {
    id: "faq-1",
    question: "What is Spopeer, and how does it work?",
    answer:
      "Spopeer is a social networking platform designed specifically for the sports world. More than 1000 sports categories worldwide. It connects athletes, coaches, sports clubs, and supportive professions in one dynamic space. Users can create detailed profiles, share content, connect with others, join events, access resources, and promote their services or careers. Spopeer aims to empower the global sports community through visibility, collaboration, and opportunity.",
  },
  {
    id: "faq-2",
    question: "Who can join Spopeer, and is it open to all sports professionals?",
    answer:
      "Yes, Spopeer is open to everyone involved in the sports industry. The platform is designed for four main profile types: athletes, coaches, club managers, and supportive professionals. Supportive professionals include a wide range of roles such as agents, marketers, physiotherapists, and even dedicated sports fans. Whether you're just starting your journey or already established in your field, Spopeer offers personalized tools and features tailored to your role.",
  },
  {
    id: "faq-3",
    question: "Is Spopeer free, or are there premium features?",
    answer:
      "Spopeer offers free access to core features such as profile creation, content sharing, basic networking, and community participation. Premium features may include advanced analytics, enhanced visibility, exclusive events, and promotional tools for professionals and organizations. This model ensures everyone can join and benefit while offering additional perks for those seeking deeper engagement.",
  },
  {
    id: "faq-4",
    question: "How can athletes benefit from using Spopeer?",
    answer:
      "Athletes can build professional profiles to showcase their skills, achievements, and journeys. They can connect with coaches, clubs, fans, and sponsors while promoting their personal brand. Spopeer also offers access to training resources, event participation, and content creation tools to help athletes grow both on and off the field.",
  },
  {
    id: "faq-5",
    question: "What features does Spopeer offer for coaches?",
    answer:
      "Coaches can use Spopeer to promote their training programs, connect with athletes, and build their reputation. They can share videos, articles, and coaching philosophies, collaborate with peers, and even offer mentorship. The platform also supports certification, analytics, and access to coaching resources and trends.",
  },
  {
    id: "faq-6",
    question: "How can sports clubs use Spopeer to grow and connect?",
    answer:
      "Sports clubs can create official profiles to showcase their achievements, teams, facilities, and programs. They can attract new talent, engage with fans, and promote events or fundraising initiatives. Spopeer also enables collaboration with other clubs, access to a global network, and data tools for performance tracking.",
  },
  {
    id: "faq-7",
    question: "What opportunities does Spopeer provide for sports professionals?",
    answer:
      "Sports professionals—such as marketers, physiotherapists, and agents—can promote their services to a targeted audience. They can connect with athletes and clubs, grow their client base, and build credibility through verified profiles and shared content. The platform supports professional development through networking, resource sharing, and exclusive events.",
  },
  {
    id: "faq-8",
    question: "Can I find sponsorships and funding opportunities on Spopeer?",
    answer:
      "Yes, Spopeer helps users unlock sponsorships and fundraising opportunities by enhancing visibility and connecting them with interested brands or supporters. Athletes, clubs, and professionals can showcase their marketability, success stories, and causes. The platform also facilitates community fundraising and promotion of charitable projects.",
  },
  {
    id: "faq-9",
    question: "What makes Spopeer different from other sports networking platforms?",
    answer:
      "Spopeer is more than just a networking app—it's a full ecosystem for the sports community. It blends social media, talent discovery, education, promotion, and commerce in one platform. With dedicated features for different user types, verified accounts, and global reach, Spopeer is designed to help users thrive in all aspects of their sports journey.",
  },
  {
    id: "faq-10",
    question: "How does Spopeer verify users and maintain credibility?",
    answer:
      "Spopeer offers a verification process where users can apply for a badge to confirm their identity and credentials. This helps distinguish real athletes, coaches, clubs, and professionals from imposters. The platform also uses moderation tools and community reporting features to ensure a safe and trustworthy environment for all users.",
  },
  {
    id: "faq-11",
    question: "What types of content can users share on Spopeer?",
    answer:
      "Users can share a wide range of content including photos, videos, training clips, match highlights, articles, interviews, blog posts, and success stories. Whether you're an athlete sharing a recent achievement or a coach posting a training tip, Spopeer supports rich, engaging content. This helps users build their presence and connect meaningfully with the community.",
  },
  {
    id: "faq-12",
    question: "Does Spopeer support live streaming for events and training?",
    answer:
      "Yes, Spopeer plans to support live streaming features for events, matches, training sessions, and even live Q&As or workshops. This allows athletes, clubs, and professionals to engage audiences in real time and showcase their talents or expertise. Live content helps boost visibility and encourages real-time interaction.",
  },
  {
    id: "faq-13",
    question: "What is the Spopeer Marketplace, and how does it work?",
    answer:
      "The Spopeer Marketplace is a space where users can list and promote sports-related products and services. This includes coaching programs, sports equipment, training plans, event tickets, merchandise, and more. It connects buyers with sellers in the sports world, helping users expand their business or monetize their expertise.",
  },
  {
    id: "faq-14",
    question: "How does the Sports Stock Exchange feature benefit athletes and clubs?",
    answer:
      "The Sports Stock Exchange is a unique concept where athletes and clubs can be &quot;backed&quot; by fans or investors, almost like buying shares. This gamifies support, builds community investment, and provides an alternative fundraising model. It allows fans to support talent and potentially benefit as athletes or clubs grow in reputation and value.",
  },
  {
    id: "faq-15",
    question: "Can I organize and promote sports events through Spopeer?",
    answer:
      "Yes, Spopeer enables users—especially clubs, organizations, and event managers—to create, promote, and manage sports events. You can share event details, invite participants, track registrations, and even integrate ticketing. It's a great tool for organizing tournaments, showcases, workshops, and other sports activities.",
  },
  {
    id: "faq-16",
    question: "Does Spopeer provide analytics and performance tracking tools?",
    answer:
      "Spopeer offers analytics tools that allow users to track engagement, profile visits, content reach, and overall growth. For athletes and clubs, performance tracking can include stats, achievements, and progress over time. These insights help users refine their strategies and showcase their progress to potential sponsors or collaborators.",
  },
  {
    id: "faq-17",
    question: "Is there a mentorship program for athletes and coaches on Spopeer?",
    answer:
      "Yes, Spopeer encourages mentorship by allowing experienced coaches and professionals to connect with and guide up-and-coming athletes or fellow coaches. Users can offer or seek mentorship through their profiles and participate in knowledge-sharing activities. It's a space for learning, growth, and fostering talent.",
  },
  {
    id: "faq-18",
    question: "How does Spopeer ensure user data privacy and security?",
    answer:
      "Spopeer takes user privacy and data protection seriously. It uses secure encryption, regular system audits, and strict privacy policies to safeguard user information. Users have control over what they share and who sees their content, and Spopeer follows data regulations to maintain trust and compliance.",
  },
  {
    id: "faq-19",
    question: "What is the process for getting verified on Spopeer?",
    answer:
      "To get verified, users need to submit an application through their profile, providing identity documents or professional credentials. Spopeer reviews the application to confirm authenticity and relevance. Once approved, a verification badge is added to the profile to build trust and credibility within the community.",
  },
  {
    id: "faq-20",
    question: "Where can I find support if I have issues with my Spopeer account?",
    answer:
      "Spopeer provides a support center accessible from the platform, where users can browse FAQs or submit a help ticket. There's also in-app chat or email support for more personalized assistance. The support team is dedicated to resolving issues quickly and ensuring a smooth user experience.",
  },
];

export default function FAQ() {
  return (
    <FAQSection 
      heading="Frequently Asked Questions"
      description="Everything you need to know about Spopeer. Can't find the answer you're looking for? Feel free to contact our support team."
      items={spopeerFaqItems}
      supportHeading="Still have questions?"
      supportDescription="Can't find the answer you're looking for? Our support team is here to help with any technical questions or concerns."
      supportButtonText="Contact Us"
      supportButtonUrl="mailto:erditgr@yahoo.gr" // Link to the contact section
    />
  );
}
