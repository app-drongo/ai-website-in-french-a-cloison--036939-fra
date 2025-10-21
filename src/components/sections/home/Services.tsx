'use client'

/**
 * @editableContentMap
 * {
 *   "text-0": "badge",
 *   "text-1": "mainTitle",
 *   "text-2": "mainTitleHighlight",
 *   "text-3": "mainDescription",
 *   "text-4": "service1Title",
 *   "text-5": "service1Description",
 *   "text-6": "service1LongDescription",
 *   "text-7": "service1Badge",
 *   "text-8": "service1Pricing",
 *   "text-9": "service1Timeline",
 *   "text-10": "service1CTA",
 *   "link-0": "service1CTAHref",
 *   "text-11": "service2Title",
 *   "text-12": "service2Description",
 *   "text-13": "service2LongDescription",
 *   "text-14": "service2Pricing",
 *   "text-15": "service2Timeline",
 *   "text-16": "service2CTA",
 *   "link-1": "service2CTAHref",
 *   "text-17": "service3Title",
 *   "text-18": "service3Description",
 *   "text-19": "service3LongDescription",
 *   "text-20": "service3Pricing",
 *   "text-21": "service3Timeline",
 *   "text-22": "service3CTA",
 *   "link-2": "service3CTAHref",
 *   "text-23": "service4Title",
 *   "text-24": "service4Description",
 *   "text-25": "service4LongDescription",
 *   "text-26": "service4Badge",
 *   "text-27": "service4Pricing",
 *   "text-28": "service4Timeline",
 *   "text-29": "service4CTA",
 *   "link-3": "service4CTAHref",
 *   "text-30": "bottomTitle",
 *   "text-31": "bottomDescription",
 *   "text-32": "bottomCTA",
 *   "link-4": "bottomCTAHref"
 * }
 */

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Code2,
  Palette,
  BarChart3,
  Shield
} from "lucide-react"
import { useRouter } from "next/navigation"

interface ServicesListDescriptionsProps {
  badge?: string;
  mainTitle?: string;
  mainTitleHighlight?: string;
  mainDescription?: string;
  service1Title?: string;
  service1Description?: string;
  service1LongDescription?: string;
  service1Badge?: string;
  service1Pricing?: string;
  service1Timeline?: string;
  service1CTA?: string;
  service1CTAHref?: string;
  service2Title?: string;
  service2Description?: string;
  service2LongDescription?: string;
  service2Pricing?: string;
  service2Timeline?: string;
  service2CTA?: string;
  service2CTAHref?: string;
  service3Title?: string;
  service3Description?: string;
  service3LongDescription?: string;
  service3Pricing?: string;
  service3Timeline?: string;
  service3CTA?: string;
  service3CTAHref?: string;
  service4Title?: string;
  service4Description?: string;
  service4LongDescription?: string;
  service4Badge?: string;
  service4Pricing?: string;
  service4Timeline?: string;
  service4CTA?: string;
  service4CTAHref?: string;
  bottomTitle?: string;
  bottomDescription?: string;
  bottomCTA?: string;
  bottomCTAHref?: string;
}

export default function Services({
  badge = "Professional Services",
  mainTitle = "Solutions Tailored to",
  mainTitleHighlight = "Your Business Needs",
  mainDescription = "Detailed solutions designed to address your specific challenges and drive growth",
  service1Title = "Strategy Consulting",
  service1Description = "Transform your business with data-driven strategies",
  service1LongDescription = "Our strategy consulting service helps organizations navigate complex challenges and identify growth opportunities. We work closely with your team to develop actionable plans that drive measurable results.",
  service1Badge = "Most Popular",
  service1Pricing = "Starting at $5,000/month",
  service1Timeline = "3-6 months typical engagement",
  service1CTA = "Get Started",
  service1CTAHref = "/contact",
  service2Title = "Custom Software Development",
  service2Description = "Tailored solutions built with cutting-edge technology",
  service2LongDescription = "We create custom software solutions that perfectly align with your business processes and goals. From web applications to enterprise systems, we deliver robust, scalable solutions.",
  service2Pricing = "Project-based pricing",
  service2Timeline = "4-12 weeks per project",
  service2CTA = "Get Started",
  service2CTAHref = "/contact",
  service3Title = "UX Research & Design",
  service3Description = "User-centered design that drives engagement",
  service3LongDescription = "Our UX research and design services ensure your digital products meet user needs while achieving business objectives. We combine research insights with creative design to deliver exceptional experiences.",
  service3Pricing = "Starting at $3,000/project",
  service3Timeline = "2-4 weeks",
  service3CTA = "Get Started",
  service3CTAHref = "/contact",
  service4Title = "Security Audit & Compliance",
  service4Description = "Comprehensive security assessment and compliance",
  service4LongDescription = "Protect your business with our thorough security audits. We identify vulnerabilities, ensure compliance with industry standards, and provide actionable recommendations.",
  service4Badge = "Essential",
  service4Pricing = "Custom quotes available",
  service4Timeline = "1-2 weeks per audit",
  service4CTA = "Get Started",
  service4CTAHref = "/contact",
  bottomTitle = "Need a Custom Solution?",
  bottomDescription = "We offer tailored services to meet your unique requirements. Let's discuss how we can help.",
  bottomCTA = "Schedule a Consultation",
  bottomCTAHref = "/contact"
}: ServicesListDescriptionsProps) {
  const router = useRouter()

  const handleServiceCTA = (href: string) => {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      router.push(href)
    }
  }

  const handleBottomCTA = () => {
    if (bottomCTAHref.startsWith('http://') || bottomCTAHref.startsWith('https://')) {
      window.open(bottomCTAHref, '_blank', 'noopener,noreferrer')
    } else {
      router.push(bottomCTAHref)
    }
  }

  const services = [
    {
      id: "strategy-consulting",
      title: service1Title,
      description: service1Description,
      longDescription: service1LongDescription,
      icon: BarChart3,
      benefits: [
        "Market analysis and competitive positioning",
        "Business model innovation",
        "Digital transformation roadmap",
        "Performance optimization"
      ],
      pricing: service1Pricing,
      timeline: service1Timeline,
      featured: true,
      badge: service1Badge,
      cta: service1CTA,
      ctaHref: service1CTAHref
    },
    {
      id: "custom-development",
      title: service2Title,
      description: service2Description,
      longDescription: service2LongDescription,
      icon: Code2,
      benefits: [
        "Full-stack development expertise",
        "Agile methodology",
        "Cloud-native architecture",
        "Continuous integration/deployment"
      ],
      pricing: service2Pricing,
      timeline: service2Timeline,
      featured: false,
      badge: null,
      cta: service2CTA,
      ctaHref: service2CTAHref
    },
    {
      id: "ux-research",
      title: service3Title,
      description: service3Description,
      longDescription: service3LongDescription,
      icon: Palette,
      benefits: [
        "User research and persona development",
        "Information architecture",
        "Wireframing and prototyping",
        "Usability testing"
      ],
      pricing: service3Pricing,
      timeline: service3Timeline,
      featured: false,
      badge: null,
      cta: service3CTA,
      ctaHref: service3CTAHref
    },
    {
      id: "security-audit",
      title: service4Title,
      description: service4Description,
      longDescription: service4LongDescription,
      icon: Shield,
      benefits: [
        "Vulnerability assessment",
        "Penetration testing",
        "Compliance certification support",
        "Security training for teams"
      ],
      pricing: service4Pricing,
      timeline: service4Timeline,
      featured: false,
      badge: service4Badge,
      cta: service4CTA,
      ctaHref: service4CTAHref
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable-id="text-0">{badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable-id="text-1">{mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable-id="text-2">{mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable-id="text-3">{mainDescription}</span>
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const titleId = `text-${4 + (index * 7)}`
            const descId = `text-${5 + (index * 7)}`
            const longDescId = `text-${6 + (index * 7)}`
            const badgeId = index === 0 ? "text-7" : index === 3 ? "text-26" : null
            const pricingId = index === 0 ? "text-8" : index === 1 ? "text-14" : index === 2 ? "text-20" : "text-27"
            const timelineId = index === 0 ? "text-9" : index === 1 ? "text-15" : index === 2 ? "text-21" : "text-28"
            const ctaId = index === 0 ? "text-10" : index === 1 ? "text-16" : index === 2 ? "text-22" : "text-29"
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          <span data-editable-id={titleId}>{service.title}</span>
                        </h3>
                        {service.badge && badgeId && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            <span data-editable-id={badgeId}>{service.badge}</span>
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        <span data-editable-id={descId}>{service.description}</span>
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          <span data-editable-id={longDescId}>{service.longDescription}</span>
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              <span data-editable-id={pricingId}>{service.pricing}</span>
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              <span data-editable-id={timelineId}>{service.timeline}</span>
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                          onClick={() => handleServiceCTA(service.ctaHref)}
                          data-editable-id={ctaId}
                        >
                          {service.cta}
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            <span data-editable-id="text-30">{bottomTitle}</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            <span data-editable-id="text-31">{bottomDescription}</span>
          </p>
          <Button 
            size="lg"
            onClick={handleBottomCTA}
            data-editable-id="text-32"
          >
            {bottomCTA}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}