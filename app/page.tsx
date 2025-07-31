"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Heart,
  Sparkles,
  MessageCircle,
} from "lucide-react"

export default function ElysianVows() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [galleryFilter, setGalleryFilter] = useState("all")

  const testimonials = [
    {
      name: "Lavneeta & Prasad",
      wedding: "South Indian & Bengali Wedding",
      quote:
        "Planning a wedding that brought together Bengali and South Indian traditions felt overwhelming at first—but Elysian Vows made it seamless. With different themes for each function, they not only listened to our vision but brought it to life beautifully for us and our families. Every detail was thoughtfully handled, and the coordinated looks made each moment feel truly special. We couldn’t have asked for a better team to bring our story to life.",
    },
    {
      name: "Krishna & Danny",
      wedding: "Gujarti & Punjabi Wedding",
      quote:
        "Planning a wedding from London for a destination celebration in Goa was a task I wasn’t sure how we’d pull off—until we found Elysian Vows. From the very first conversation, they just got us. Whether it was blending my Gujarati roots with Danny’s Punjabi side, or adding little details that reflected our story, every outfit felt thoughtful and completely ‘us.’ They managed everything remotely with ease—from fabric selections to fittings—without compromising on quality or creativity. What touched me most was how they extended that care to our families too. Every look was curated to match the themes of our events, and seeing our loved ones dressed in such coordinated, beautiful ensembles added so much soul to the celebrations. Thank you, Elysian Vows, for turning our vision into something even more magical than we imagined.",
    },
    {
      name: "Khushi Kalra",
      wedding: "A big Punjai Wedding",
      quote:
        "As a Punjabi bride, I had a few must-haves in mind—like phulkari and a touch of leheriya—but beyond that, I really needed guidance to bring my trousseau to life. Elysian Vows stepped in like a dream team. They took the time to understand my style, my comfort, and helped me build a collection that had the perfect balance—from intricate, statement pieces to lighter, easy-to-wear outfits. The colors, the detailing, the way every piece felt like me—it was so thoughtfully done. What I ended up with was more than just a trousseau… it was a wardrobe full of joy, emotion, and timeless beauty. Truly beyond what I had imagined.",
    },
  ]

  const galleryImages = [
    {
      id: 1,
      category: "bridal",
      alt: "",
      src: "/images/Bride/bride1.jpg",
    },
    {
      id: 2,
      category: "bridal",
      alt: "",
      src: "/images/Bride/bride2.jpg",
    },
    {
      id: 3,
      category: "bridal",
      alt: "",
      src: "/images/Bride/bride3.jpg",
    },
    {
      id: 4,
      category: "bridal",
      alt: "",
      src: "/images/Bride/bride4.jpg",
    },
    {
      id: 5,
      category: "groom",
      alt: "",
      src: "/images/Groom/groom1.jpg",
    },
    {
      id: 6,
      category: "groom",
      alt: "",
      src: "/images/Groom/groom2.jpg",
    },
    {
      id: 7,
      category: "groom",
      alt: "",
      src: "/images/Groom/groom3.jpg",
    },
    {
      id: 8,
      category: "groom",
      alt: "",
      src: "/images/Groom/groom4.jpg",
    },
    {
      id: 9,
      category: "mehendi",
      alt: "",
      src: "/images/Mehendi/mehendi1.jpg",
    },
    {
      id: 10,
      category: "reception",
      alt: "",
      src: "/images/Reception/reception2.jpg",
    },
    {
      id: 11,
      category: "reception",
      alt: "",
      src: "/images/Reception/reception3.jpg",
    },
    {
      id: 12,
      category: "reception",
      alt: "",
      src: "/images/Reception/reception4.jpg",
    },
    {
      id: 13,
      category: "reception",
      alt: "",
      src: "/images/Reception/reception5.jpg",
    },
    {
      id: 14,
      category: "reception",
      alt: "",
      src: "/images/Reception/reception6.jpg",
    },
    {
      id: 15,
      category: "reception",
      alt: "",
      src: "/images/Reception/reception7.jpg",
    },
    {
      id: 16,
      category: "reception",
      alt: "",
      src: "/images/Reception/reception8.jpg",
    },
    {
      id: 17,
      category: "reception",
      alt: "",
      src: "/images/Reception/reception9.jpg",
    },
    {
      id: 18,
      category: "sangeet",
      alt: "",
      src: "/images/Sangeet/sangeet1.jpg",
    },
    {
      id: 19,
      category: "sangeet",
      alt: "",
      src: "/images/Sangeet/sangeet2.jpg",
    },
    {
      id: 20,
      category: "shaadi",
      alt: "",
      src: "/images/Shaadi/Shaadi1.jpg",
    },
    {
      id: 21,
      category: "family",
      alt: "",
      src: "/images/Family/family1.jpg",
    },
    {
      id: 22,
      category: "family",
      alt: "",
      src: "/images/Family/family2.jpg",
    },
  ]

  const filteredGallery =
    galleryFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === galleryFilter)

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // WhatsApp function
  const openWhatsApp = () => {
    const phoneNumber = "917982393191"
    const message = "Hi! I'm interested in your bridal couture services. Could you please provide more information?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Book consultation function
  const bookConsultation = () => {
    scrollToSection("contact")
  }

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your interest! We'll contact you soon to schedule your consultation.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50">
      {/* Delicate decorative border */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 z-50"></div>

      {/* Elegant Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-amber-100 z-40 py-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Beautiful Text Logo */}
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700 font-playfair tracking-wide">
                Elysian <span className="text-amber-600">Vows</span>
              </div>
              <div className="text-xs text-slate-400 tracking-[0.3em] uppercase font-light mt-1">Couture Atelier</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Collections", id: "collections" },
                { name: "Gallery", id: "gallery" },
                { name: "Love Stories", id: "lovestories" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-amber-600 transition-colors font-light text-sm tracking-wide"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={bookConsultation}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-2 text-sm font-light rounded-full shadow-lg"
              >
                Book Consultation
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 border-t border-amber-100 absolute w-full">
            <nav className="flex flex-col space-y-4 p-6">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Collections", id: "collections" },
                { name: "Gallery", id: "gallery" },
                { name: "Love Stories", id: "lovestories" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-amber-600 transition-colors font-light text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={bookConsultation}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-2 text-sm font-light rounded-full shadow-lg mt-4"
              >
                Book Consultation
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Romantic Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bride.png"
            alt="Beautiful Indian bride in elegant wedding attire"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-amber-50/40 to-yellow-50/60"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-amber-400"></div>
              <Heart className="w-4 h-4 text-amber-500" />
              <div className="w-8 h-0.5 bg-amber-400"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-wide font-playfair text-slate-700">
          Your Story. Our Craft.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 font-normal italic">
            A Perfect Fit.
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-12 text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
          A dedicated top-tier couture services offering a harmonized yet personalized styling experience for all your celebrations.
          </p>
          <Button
            onClick={bookConsultation}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-10 py-4 text-lg font-light rounded-full shadow-xl"
          >
            Begin Your Love Story
            <Heart className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 animate-pulse">
          <Sparkles className="w-6 h-6 text-amber-300" />
        </div>
        <div className="absolute top-1/3 right-16 animate-pulse delay-1000">
          <Heart className="w-5 h-5 text-yellow-300" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-pulse delay-500">
          <Sparkles className="w-4 h-4 text-amber-300" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-amber-200 rounded-full"></div>
              <Image
                src="/images/Couple-backs.jpeg"
                alt="Elysian Vows Bridal Atelier"
                width={600}
                height={700}
                className="object-cover w-full h-[500px] relative z-10 rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full"></div>
            </div>
            <div className="max-w-xl">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-0.5 bg-amber-400"></div>
                <Heart className="w-4 h-4 text-amber-500" />
                <div className="w-8 h-0.5 bg-amber-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-8 font-playfair">
                Our <span className="text-amber-600 italic">Love Story</span>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed font-light">
                At Elysian Vows, we believe every wedding is a unique story woven with love, legacy, and celebration. Our bespoke
                Indian wedding ensembles are lovingly crafted to celebrate your unique love story, blending timeless
                traditions with contemporary elegance.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed font-light">
                From the first sketch to the final stitch, our master artisans pour their hearts into creating wearable
                poetry that captures the magic of your special moments. Each piece is a testament to love, tradition,
                and the beauty of new beginnings.
              </p>
              <Button
                onClick={() => scrollToSection("collections")}
                variant="outline"
                className="border border-amber-400 text-amber-600 hover:bg-amber-50 px-8 py-3 font-light rounded-full"
              >
                Discover Our Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 bg-gradient-to-b from-amber-50 to-yellow-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-8 h-0.5 bg-amber-400"></div>
              <Heart className="w-4 h-4 text-amber-500" />
              <div className="w-8 h-0.5 bg-amber-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-6 font-playfair">
              Our Wedding <span className="text-amber-600 italic">Collections</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Exquisite ensembles crafted for every moment of your wedding celebration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bridal Couture",
                description: "Where dreams are drapped in detail. Custom-crafted to reflect your unique essence with elegance and timeless allure. Every stitch is celebration of your story, designed to make you feel nothing less than extraordinary.",
                image: "/images/bridal-corture.jpg",
                icon: <Heart className="w-5 h-5" />,
              },
              {
                title: "Groom's Collection",
                description: "Sophistication, tailored to command the room. Impeccably crafted ensembles that balance heritage with modernity - designed for the man who leads with presence and dresses with intent.",
                image: "/images/mens-clothing.jpg",
                icon: <Sparkles className="w-5 h-5" />,
              },
              {
                title: "Trousseau Essentials",
                description: "A wardrobe that travels with you - stylishly. Curated with enduring charm and exquisite refinement, each piece is designed to accompany life's new chapter with grace, versatality, and poise.",
                image: "/images/trousseau-edit.jpg",
                icon: <Heart className="w-5 h-5" />,
              },
              {
                title: "Family Ensembles",
                description: "Style that celebrates togetherness. Coordinated, yet individually expressive, our designs bring the entire family into focus - crafted to complement every personailty while uniting the celebration in unforgettable style.",
                image: "/images/family-edit.jpg",
                icon: <Sparkles className="w-5 h-5" />,
              },
            ].map((collection, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-amber-600">
                    {collection.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-3 font-playfair" style={{ color: '#d27909' }}>{collection.title}</h3>
                  <p className="text-slate-500 mb-4 leading-relaxed text-sm font-light">
  {collection.description ? (
    <>
      <span className="font-bold">{collection.description.split('.')[0]}.</span>
      <br style={{ lineHeight: '2.5' }} />
      {collection.description.split('.').slice(1).join('.').trim()}
    </>
  ) : null}
</p>
                  {/*
                  <Button
                    onClick={openWhatsApp}
                    variant="ghost"
                    className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0 font-light"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-8 h-0.5 bg-amber-400"></div>
              <Heart className="w-4 h-4 text-amber-500" />
              <div className="w-8 h-0.5 bg-amber-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-6 font-playfair">
              Our <span className="text-amber-600 italic">Gallery</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              A glimpse into our world of wedding magic and timeless beauty
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["all", "bridal", "groom", "mehendi", "reception", "family", "sangeet", "shaadi"].map((filter) => (
              <Button
                key={filter}
                variant={galleryFilter === filter ? "default" : "outline"}
                onClick={() => setGalleryFilter(filter)}
                className={
                  galleryFilter === filter
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full"
                    : "border-amber-300 text-amber-600 hover:bg-amber-50 rounded-full"
                }
                size="sm"
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="columns-2 md:columns-4 lg:columns-5 gap-4 mb-16 space-y-4">
            {filteredGallery.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 block"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-sm font-medium mb-1">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={bookConsultation}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-3 font-light rounded-full"
            >
              Book your consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Love Stories (Testimonials) Section */}
      <section id="lovestories" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-8 h-0.5 bg-amber-400"></div>
              <Heart className="w-4 h-4 text-amber-500" />
              <div className="w-8 h-0.5 bg-amber-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-6 font-playfair">
              Beautiful <span className="text-amber-600 italic">Love Stories</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Heartfelt words from couples who trusted us with their special day
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div>
              <div className="flex items-center justify-center space-x-2 mb-8">
                <div className="w-8 h-0.5 bg-amber-400"></div>
                <Heart className="w-4 h-4 text-amber-500" />
                <div className="w-8 h-0.5 bg-amber-400"></div>
              </div>
              <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed font-playfair italic text-slate-600">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div>
                <p className="text-amber-600 text-lg font-medium mb-2 font-playfair">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-slate-500 font-light">{testimonials[currentTestimonial].wedding}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-16 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="border-amber-300 text-amber-600 hover:bg-amber-50 rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="border-amber-300 text-amber-600 hover:bg-amber-50 rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-8 h-0.5 bg-amber-400"></div>
              <Heart className="w-4 h-4 text-amber-500" />
              <div className="w-8 h-0.5 bg-amber-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-6 font-playfair">
              Let's Create <span className="text-amber-600 italic">Magic Together</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Schedule an intimate consultation at our beautiful atelier
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8">
              <h3 className="text-2xl font-light text-slate-700 mb-8 font-playfair">Book Your Dream Consultation</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="First Name"
                    className="bg-white border-amber-200 focus:border-amber-400 rounded-xl"
                    required
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-white border-amber-200 focus:border-amber-400 rounded-xl"
                  />
                </div>
                <Input
                  type="email ID"
                  placeholder="Email Address"
                  className="bg-white border-amber-200 focus:border-amber-400 rounded-xl"
                  required
                />
                <Input
                  type="Phone no."
                  placeholder="Phone Number"
                  className="bg-white border-amber-200 focus:border-amber-400 rounded-xl"
                  required
                />
                <Textarea
                  placeholder="Tell us about your dream wedding vision..."
                  className="bg-white border-amber-200 focus:border-amber-400 rounded-xl min-h-32"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white w-full py-3 font-light rounded-full"
                >
                  Schedule My Consultation
                  <Heart className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-light text-slate-700 mb-8 font-playfair">Visit Our Atelier</h3>
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-slate-700 mb-1">Elysian Vows Corture Atelier</p>
                    <p className="text-slate-500 font-light"> DLF Phase 4, Gurgaon, Haryana, India, 122009</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <button
                    onClick={() => window.open("tel:+917982393191")}
                    className="text-slate-500 font-light hover:text-amber-600 transition-colors"
                  >
                    +91 79823 93191
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <button
                    onClick={() => window.open("mailto:ny@elysianvows.com")}
                    className="text-slate-500 font-light hover:text-amber-600 transition-colors"
                  >
                    ny@elysianvows.com
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 mb-8">
                <h4 className="text-lg font-medium text-slate-700 mb-6">Consultation Hours</h4>
                <div className="space-y-3 text-slate-600 font-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment Only</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={() => window.open("https://instagram.com/elysianvowsofficial", "_blank")}
                  variant="outline"
                  size="icon"
                  className="border-amber-300 text-amber-600 hover:bg-amber-50 rounded-full"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  onClick={openWhatsApp}
                  variant="outline"
                  size="icon"
                  className="border-green-300 text-green-600 hover:bg-green-50 rounded-full"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-yellow-50 hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-8 h-0.5 bg-amber-400"></div>
              <Heart className="w-4 h-4 text-amber-500" />
              <div className="w-8 h-0.5 bg-amber-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-6 font-playfair">
              Follow Our <span className="text-amber-600 italic">Journey</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 font-light">
              Get inspired by our latest creations and behind-the-scenes magic
            </p>
            <Button
              onClick={() => window.open("https://instagram.com/elysianvowsofficial", "_blank")}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-3 font-light rounded-full"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow @elysianvowsofficial
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "/images/instagram-1.png",
              "/images/instagram-2.png",
              "/images/instagram-3.png",
              "/images/instagram-4.png",
              "/images/instagram-5.png",
              "/images/instagram-6.png",
            ].map((src, index) => (
              <div
                key={index}
                className="aspect-square relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => window.open("https://instagram.com/elysianvowsofficial", "_blank")}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-center mb-6">
                <div className="text-2xl font-bold font-playfair tracking-wide">
                  Elysian <span className="text-amber-400">Vows</span>
                </div>
                <div className="text-xs text-slate-400 tracking-[0.3em] uppercase font-light mt-1">Couture Atelier</div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed font-light text-center">
                Where love meets artistry. Creating bespoke Indian couture for your most precious moments.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={() => window.open("https://instagram.com/elysianvowsofficial", "_blank")}
                  variant="outline"
                  size="icon"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white rounded-full"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  onClick={openWhatsApp}
                  variant="outline"
                  size="icon"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-full"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-amber-400 font-medium mb-6 text-lg">Explore</h4>
              <div className="space-y-3">
                {[
                  { name: "About Us", id: "about" },
                  { name: "Collections", id: "collections" },
                  { name: "Gallery", id: "gallery" },
                  { name: "Love Stories", id: "lovestories" },
                  { name: "Contact", id: "contact" },
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-slate-300 hover:text-amber-400 transition-colors font-light text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-amber-400 font-medium mb-6 text-lg">Contact</h4>
              <div className="space-y-3 text-slate-300 font-light">
                <p>DLF Phase 4, Gurgaon, Haryana, India, 122009</p>
                <button
                  onClick={() => window.open("tel:+917982393191")}
                  className="block hover:text-amber-400 transition-colors"
                >
                  +91 79823 93191
                </button>
                <button
                  onClick={() => window.open("mailto:ny@elysianvows.com")}
                  className="block hover:text-amber-400 transition-colors"
                >
                  ny@elysianvows.com
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400 font-light">
            <p>&copy; {new Date().getFullYear()} Elysian Vows. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
