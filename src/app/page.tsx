"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, CheckCircle, DollarSign, HelpCircle, Rocket, Star, Zap, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const handleContactSubmit = (email: string) => {
    console.log('Contact form submitted with email:', email);
    // Add your form submission logic here
  };

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSmallSizeMediumTitles"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="TropismLabs"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Pricing", id: "pricing" },
            { name: "Why Us", id: "why-us" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Grow Your Business With Smart Automation"
          description="At TropismLabs, we help businesses attract more customers, respond to leads faster, and build stronger online reputations. From high-converting websites to automated follow-ups and review systems, we create tools that work for your business 24/7. Turn missed opportunities into loyal customers."
          buttons={[
            { text: "Start Your Growth Journey", href: "#contact" },
            { text: "Learn More", href: "#services" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/business-concept-with-progress-close-up_23-2149151161.jpg"
          imageAlt="TropismLabs automation dashboard"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="Why Choose TropismLabs?"
          description="We built TropismLabs to provide simple systems that actually help businesses grow. Our tools are proven, affordable, and designed for real results—not marketing fluff."
          tag="Our Promise"
          tagIcon={CheckCircle}
          tagAnimation="blur-reveal"
          metrics={[
            { value: "24/7", title: "Automated Service" },
            { value: "100%", title: "No Contracts" },
            { value: "Proven", title: "Real Results" }
          ]}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-digital-tablet-with-bar-graph_1098-3523.jpg"
          imageAlt="Business growth visualization"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardTwo
          title="Our Services"
          description="Complete automation solutions to help your business grow and scale efficiently."
          tag="Service Suite"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "websites",              brand: "Core",              name: "Functional Websites",              price: "$500",              rating: 5,
              reviewCount: "One-time",              imageSrc: "http://img.b2bpic.net/free-vector/landing-page-business-work-solutions_23-2148355901.jpg",              imageAlt: "Website development service",              onProductClick: () => {
                window.location.href = '#contact';
              }
            },
            {
              id: "review-funnel",              brand: "Growth",              name: "5-Star Review Funnel",              price: "Included",              rating: 5,
              reviewCount: "Growth plans",              imageSrc: "http://img.b2bpic.net/free-photo/businessman-doing-phone-call-looking-charts_23-2148017122.jpg",              imageAlt: "Review management automation",              onProductClick: () => {
                window.location.href = '#contact';
              }
            },
            {
              id: "missed-calls",              brand: "Engagement",              name: "Missed Call Text Back",              price: "$97",              rating: 5,
              reviewCount: "One-time",              imageSrc: "http://img.b2bpic.net/free-vector/isometric-view-mobile-phone-with-instagram-post_23-2147822982.jpg",              imageAlt: "Automated messaging system",              onProductClick: () => {
                window.location.href = '#contact';
              }
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentySix
          title="Service Highlights"
          description="Each service is designed to solve specific business challenges and drive real growth."
          tag="Key Features"
          tagIcon={Star}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Functional Websites",              description: "Fast, mobile-friendly websites designed to convert visitors into customers. Includes lead capture forms, review showcases, and local Google optimization.",              buttonIcon: ArrowRight,
              buttonHref: "#contact"
            },
            {
              title: "5-Star Magic Review Funnel",              description: "Automated system that gently reminds customers until they leave feedback, helping you consistently collect more 5-star reviews.",              buttonIcon: ArrowRight,
              buttonHref: "#contact"
            },
            {
              title: "Missed Call Text Back",              description: "Instantly sends text messages when you miss calls, letting customers know you received their call and will respond soon. Never lose a lead.",              buttonIcon: ArrowRight,
              buttonHref: "#contact"
            },
            {
              title: "Local SEO Optimization",              description: "Optimize your website so customers find you on Google. Includes keyword research, website optimization, and ongoing improvements.",              buttonIcon: ArrowRight,
              buttonHref: "#contact"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Simple, Affordable Pricing"
          description="We keep our pricing straightforward because our goal is long-term partnerships, not quick sales."
          tag="Fair Pricing"
          tagIcon={DollarSign}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "website",              title: "Website Development",              price: "$500",              period: "One-time",              features: [
                "Custom functional website",                "Mobile-friendly design",                "On-site SEO setup",                "Contact and lead capture forms",                "Secure hosting setup",                "Review showcase integration"
              ],
              button: { text: "Get Website", href: "#contact" }
            },
            {
              id: "starter",              title: "Starter Automation",              price: "$97",              period: "",              features: [
                "Missed Call Text Back",                "Basic Lead Follow-Up",                "Customer Messaging",                "Perfect for first-time users",                "No contract required",                "Cancel anytime"
              ],
              button: { text: "Start Free Trial", href: "#contact" }
            },
            {
              id: "growth",              title: "Growth Automation",              price: "$197",              period: "",              features: [
                "Everything in Starter",                "5-Star Review Funnel",                "Automated Review Reminders",                "Reputation Management",                "Build trust and reviews",                "Most popular choice"
              ],
              button: { text: "Start Growth", href: "#contact" }
            },
            {
              id: "pro",              title: "Pro Automation",              price: "$297",              period: "",              features: [
                "Everything in Growth",                "Advanced lead automation",                "Customer re-engagement campaigns",                "Ongoing improvements",                "Priority support",                "Maximum growth potential"
              ],
              button: { text: "Go Pro", href: "#contact" }
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="Why Businesses Choose TropismLabs"
          description="Our core values drive everything we build. Simple systems, affordable pricing, no contracts, and proven results."
          tag="Our Advantages"
          tagIcon={Award}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "simple",              value: "Simple",              title: "Easy To Use",              description: "Everything is designed to be straightforward, so you can focus on running your business, not learning complicated software.",              videoSrc: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc2MobXA0MikuaGVhZGVyKWFiY3RbaHQtc1oy?_wi=1"
            },
            {
              id: "affordable",              value: "Fair",              title: "Affordable Pricing",              description: "Our goal is long-term partnerships. We keep prices reasonable so you stay with us for years, not weeks.",              videoSrc: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc2MobXA0MikuaGVhZGVyKWFiY3RbaHQtc1oy?_wi=2"
            },
            {
              id: "flexible",              value: "Flexible",              title: "No Contracts",              description: "Stay because you love the service, not because you're locked in. Cancel anytime with zero penalties or complications.",              videoSrc: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc2MobXA0MikuaGVhZGVyKWFiY3RbaHQtc1oy?_wi=3"
            },
            {
              id: "honest",              value: "Real",              title: "No Bullsh*t",              description: "We focus on genuine results instead of marketing fluff. Our systems are proven and designed for real business growth.",              videoSrc: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc2MobXA0MikuaGVhZGVyKWFiY3RbaHQtc1oy?_wi=4"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Get answers to common questions about TropismLabs services and pricing."
          tag="FAQ"
          tagIcon={HelpCircle}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "faq-1",              title: "When will I start seeing results?",              content: "Results depend on your marketing efforts, how long you've been in business, and how actively you use the system. TropismLabs provides a strong foundation for long-term growth, but it works best when combined with other advertising methods. Most clients see lead improvements within 30-60 days of active use."
            },
            {
              id: "faq-2",              title: "Can people find my website on Google?",              content: "Yes. Every TropismLabs website is built using SEO best practices including keyword research, proper page structure, optimized speed, and secure setup. Your ranking will depend on factors like local competition and your Google reviews, but your website will be fully optimized for search engines."
            },
            {
              id: "faq-3",              title: "Why is your pricing so affordable?",              content: "Our goal is long-term partnerships. By pricing our services fairly and providing strong value, businesses stay with us for many years. We'd rather have 100 happy, affordable customers than 10 expensive ones."
            },
            {
              id: "faq-4",              title: "What happens if I cancel?",              content: "If you cancel your membership, the automation tools and services we provide will no longer be active. However, you can cancel anytime since we do not require contracts. Your website will remain live unless you request otherwise."
            },
            {
              id: "faq-5",              title: "Do I need any technical skills?",              content: "No. TropismLabs is designed to be simple and easy to use. We handle all the technical setup, and you can manage everything through our intuitive dashboard. We also provide support to help you get started."
            },
            {
              id: "faq-6",              title: "Can I upgrade or downgrade my plan?",              content: "Yes. You can upgrade to a higher tier anytime to access more features, or downgrade if you want to reduce costs. Changes take effect immediately on your next billing cycle."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-vector/tropical-foliage-log-landing-page_52683-23871.jpg?_wi=1"
          imageAlt="FAQ and support resources"
          mediaPosition="right"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Ready To Grow?"
          title="Get Started With TropismLabs"
          description="Ready to grow your business with smart automation? Let's talk. Email us and we'll get back to you as soon as possible to discuss your needs and help you get started."
          tagIcon={Rocket}
          tagAnimation="blur-reveal"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-vector/tropical-foliage-log-landing-page_52683-23871.jpg?_wi=2"
          imageAlt="Get started with TropismLabs"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Started"
          termsText="By signing up, you agree to receive updates about TropismLabs services. We respect your privacy and will never spam."
          onSubmit={handleContactSubmit}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Website Development", href: "#services" },
                { label: "Review Automation", href: "#services" },
                { label: "Missed Call System", href: "#services" },
                { label: "Local SEO", href: "#services" }
              ]
            },
            {
              title: "Pricing",              items: [
                { label: "Website ($500)", href: "#pricing" },
                { label: "Starter ($97)", href: "#pricing" },
                { label: "Growth ($197)", href: "#pricing" },
                { label: "Pro ($297)", href: "#pricing" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About TropismLabs", href: "#about" },
                { label: "Why Us", href: "#why-us" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Email: tropisimm@gmail.com", href: "mailto:tropisimm@gmail.com" },
                { label: "Get Support", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 TropismLabs. All rights reserved. Helping businesses grow with smart automation."
        />
      </div>
    </ThemeProvider>
  );
}