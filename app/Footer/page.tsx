'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Doctor Consultation', href: '/services/consultation' },
      { name: 'Medicine Delivery', href: '/services/medicine' },
      { name: 'Lab Tests', href: '/services/lab-tests' },
      { name: 'Health Plans', href: '/services/health-plans' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookie' },
      { name: 'HIPAA Compliance', href: '/hipaa' },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com', name: 'Facebook' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', name: 'Twitter' },
  { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com', name: 'Instagram' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', name: 'LinkedIn' },
];

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, text: 'support@mujhw.com' },
  { icon: <Phone className="w-5 h-5" />, text: '+92 300 1234567' },
  { icon: <MapPin className="w-5 h-5" />, text: 'Health Street, Karachi, Pakistan' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container px-6 py-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 col-span-1 lg:col-span-2"
          >
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-white tracking-wide">Mujhw</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Pakistans most trusted digital healthcare platform, connecting patients with top doctors and healthcare services.
            </p>
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-base">Subscribe to our newsletter</h3>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus-visible:ring-[#00a79d]" 
                />
                <Button 
                  variant="secondary" 
                  className="bg-[#00a79d] hover:bg-[#008b7a] text-white focus-visible:ring-[#00a79d]"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-5"
            >
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-[#00a79d] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-[#00a79d] mt-0.5">{item.icon}</span>
                  <span className="text-gray-400 leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <h4 className="text-sm font-medium text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-[#00a79d] transition-colors duration-200"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <div>© {new Date().getFullYear()} Mujhw. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#00a79d] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#00a79d] transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie" className="hover:text-[#00a79d] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}