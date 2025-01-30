import React from "react";
import { motion } from "framer-motion";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import NewsLetter from "@/components/NewsLetter";

const ContactPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };
  return (
    <section>
      <HeroSection
        title="Get in touch with us!"
        description="We’ll gladly answer any of your questions."
        leftIcon="/images/loan3.png"
        rightIcon="/images/loan3.png"
      />

      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gray-200 w-full md:flex justify-between p-6 rounded-lg my-8 hidden ">
          <div className="flex items-center gap-3">
            <Icon
              icon="material-symbols-light:cloud-download"
              className="bg-white p-1 text-3xl text-gray-600 rounded"
            />
            <p className="text-sm flex flex-col gap-y-1 text-blu">
              Swift Processs
              <span className="text-gray-500">Quality assurance</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Icon
              icon="mdi:email-outline"
              className="bg-white p-1 text-3xl text-gray-600 rounded"
            />
            <p className="text-sm flex flex-col gap-y-1 text-blu">
              24/7 support
              <span className="text-gray-500">Round-the-clock assistance</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Icon
              icon="ri:refresh-line"
              className="bg-white p-1 text-3xl text-gray-600 rounded"
            />
            <p className="text-sm flex flex-col gap-y-1 text-blu">
              Quick loan guarantee
              <span className="text-gray-500">Disburse within 24 hours</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Contact Info (Takes 1/3 of the space) */}
          <div className="md:w-1/3 md:mt-0 mt-12">
            <h2 className="text-2xl md:text-4xl font-bold text-blu mb-4">
              Here to help
            </h2>
            <p className="text-gray-600 mb-6">
              Have inquiries? Reach out via message
            </p>

            <div className="space-y-4">
              <ContactCard
                icon="mdi:email-outline"
                title="Email us"
                details="info@cyrusmcs.com"
              />
              <ContactCard
                icon="mdi:phone-outline"
                title="Call us"
                details="+233 553 179 240"
              />
              <ContactCard
                icon="mdi:map-marker-outline"
                title="Visit us"
                details="Ground Floor, Leonardo Hotel Opposite Tema Newtown Post Office, P.O.Box rvt 636, Tema"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-blu mb-4">
              Leave us a message
            </h2>
            <p className="text-gray-600 mb-6">
              And we will get back to you as soon as possible
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
      <NewsLetter />
    </section>
  );
};

export default ContactPage;
