'use client';

/**
 * @editableContentMap
 * {
 *   "text-0": "logoText",
 *   "text-1": "companyDescription",
 *   "text-2": "contactEmail",
 *   "text-3": "contactPhone",
 *   "text-4": "contactAddress",
 *   "text-5": "newsletterTitle",
 *   "text-6": "newsletterDisclaimer",
 *   "text-7": "section1Title",
 *   "text-8": "section2Title",
 *   "text-9": "section3Title",
 *   "text-10": "section4Title",
 *   "text-11": "copyrightText",
 *   "text-12": "madeWithText",
 *   "text-13": "socialText",
 *   "link-0": "social1Href",
 *   "link-1": "social2Href",
 *   "link-2": "social3Href",
 *   "link-3": "social4Href",
 *   "link-4": "social5Href"
 * }
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

interface FooterProps {
  logoText?: string;
  companyDescription?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  newsletterTitle?: string;
  newsletterDisclaimer?: string;
  section1Title?: string;
  section2Title?: string;
  section3Title?: string;
  section4Title?: string;
  copyrightText?: string;
  madeWithText?: string;
  socialText?: string;
  social1Href?: string;
  social2Href?: string;
  social3Href?: string;
  social4Href?: string;
  social5Href?: string;
}

export default function Footer({
  logoText = 'In French A Cloison Installer',
  companyDescription = 'Spécialistes en installation de cloisons sèches et aménagement intérieur. Nous transformons vos espaces avec expertise et qualité professionnelle depuis plus de 15 ans.',
  contactEmail = 'contact@cloison-installer.fr',
  contactPhone = '+33 1 45 67 89 12',
  contactAddress = '15 Avenue des Artisans, 75011 Paris',
  newsletterTitle = 'Restez Informé',
  newsletterDisclaimer = 'Recevez nos dernières actualités et conseils. Pas de spam, désabonnement facile.',
  section1Title = 'Services',
  section2Title = 'Entreprise',
  section3Title = 'Ressources',
  section4Title = 'Légal',
  copyrightText = '© 2024 In French A Cloison Installer. Tous droits réservés.',
  madeWithText = 'par notre équipe',
  socialText = 'Suivez-nous :',
  social1Href = 'https://twitter.com/cloison-installer',
  social2Href = 'https://facebook.com/cloison-installer',
  social3Href = 'https://instagram.com/cloison-installer',
  social4Href = 'https://linkedin.com/company/cloison-installer',
  social5Href = 'https://github.com/cloison-installer',
}: FooterProps) {
  const footerSections = [
    {
      title: section1Title,
      links: [
        { name: 'Cloisons Sèches', href: '/services/cloisons-seches' },
        { name: 'Isolation Phonique', href: '/services/isolation-phonique' },
        { name: 'Aménagement Bureaux', href: '/services/amenagement-bureaux' },
        { name: 'Rénovation Intérieure', href: '/services/renovation' },
        { name: 'Devis Gratuit', href: '/devis' },
        { name: 'Maintenance', href: '/services/maintenance' },
      ],
    },
    {
      title: section2Title,
      links: [
        { name: 'À Propos', href: '/a-propos' },
        { name: 'Nos Réalisations', href: '/realisations' },
        { name: 'Équipe', href: '/equipe' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'Partenaires', href: '/partenaires' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: section3Title,
      links: [
        { name: 'Guide Cloisons', href: '/guide-cloisons' },
        { name: 'Conseils Techniques', href: '/conseils' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Matériaux', href: '/materiaux' },
        { name: 'Normes & Réglementations', href: '/normes' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: section4Title,
      links: [
        { name: 'Mentions Légales', href: '/mentions-legales' },
        { name: 'CGV', href: '/cgv' },
        { name: 'Politique de Confidentialité', href: '/confidentialite' },
        { name: 'RGPD', href: '/rgpd' },
        { name: 'Assurance', href: '/assurance' },
        { name: 'Garanties', href: '/garanties' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: social1Href },
    { name: 'Facebook', icon: Facebook, href: social2Href },
    { name: 'Instagram', icon: Instagram, href: social3Href },
    { name: 'LinkedIn', icon: Linkedin, href: social4Href },
    { name: 'GitHub', icon: Github, href: social5Href },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">{logoText.charAt(0)}</span>
                </div>
                <span className="font-bold text-xl" data-editable="logoText">
                  {logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                <span data-editable="companyDescription">{companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactEmail">
                  {contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactPhone">
                  {contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactAddress">
                  {contactAddress}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable="newsletterTitle">
                {newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable="newsletterDisclaimer">{newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => {
              const titleProps = {
                [`data-editable`]: `section${index + 1}Title`,
              };
              return (
                <div key={index} className="space-y-4">
                  <h4 className="font-semibold text-sm" {...titleProps}>
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable="copyrightText">{copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Fait avec <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable="madeWithText">{madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable="socialText">
                {socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const hrefProp = `social${index + 1}Href`;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    data-editable-href={hrefProp}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/plan-du-site"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Plan du Site
            </Link>
            <Link
              href="/accessibilite"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibilité
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Paramètres Cookies
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
