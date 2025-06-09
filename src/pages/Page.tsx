"use client"

import { useState } from "react"
import { Menu, X, Search, ShoppingBag, User, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function VastamStore() {  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70AyJfAj1mCqLX7mpUQPK4HXbkUzg6DvIGA&s",
      title: "New Summer Collection",
      subtitle: "Discover the latest trends in fashion",
      cta: "Shop Now",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Premium Quality Fabrics",
      subtitle: "Comfort meets style in every piece",
      cta: "Explore",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70AyJfAj1mCqLX7mpUQPK4HXbkUzg6DvIGA&s",
      title: "Exclusive Designs",
      subtitle: "Stand out with our unique collections",
      cta: "View Collection",
    },
  ]

  const categories = [
    { name: "Men's Wear", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70AyJfAj1mCqLX7mpUQPK4HXbkUzg6DvIGA&s", count: "120+ Items" },
    { name: "Women's Wear", image: "/placeholder.svg?height=300&width=250", count: "200+ Items" },
    { name: "Kids Wear", image: "/placeholder.svg?height=300&width=250", count: "80+ Items" },
    { name: "Accessories", image: "/placeholder.svg?height=300&width=250", count: "50+ Items" },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      price: "₹1,299",
      originalPrice: "₹1,599",
      image: "https://dennison.in/cdn/shop/files/1_385a399d-474e-4bc8-aa0b-7c7653db7d39.jpg?v=1709982307",
      rating: 4.5,
      reviews: 128,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Designer Kurta Set",
      price: "₹2,499",
      originalPrice: "₹2,999",
      image: "https://cdn.linenclub.com/media/catalog/product/cache/d8d099ed0f54be45d4eb2c71c1a3b40d/l/c/lcsfch6180334_04.jpg",
      rating: 4.8,
      reviews: 95,
      badge: "New Arrival",
    },
    {
      id: 3,
      name: "Casual Denim Jeans",
      price: "₹1,899",
      originalPrice: "₹2,299",
      image: "https://images-static.nykaa.com/media/catalog/product/e/9/e9ea3c5CAMAA00009431_4.jpg?tr=w-500",
      rating: 4.3,
      reviews: 203,
      badge: "Sale",
    },
    {
      id: 4,
      name: "Ethnic Saree",
      price: "₹3,299",
      originalPrice: "₹3,999",
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.7,
      reviews: 67,
      badge: "Premium",
    },
    {
      id: 5,
      name: "Formal Blazer",
      price: "₹4,599",
      originalPrice: "₹5,299",
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.6,
      reviews: 89,
      badge: "Trending",
    },
    {
      id: 6,
      name: "Summer Dress",
      price: "₹1,799",
      originalPrice: "₹2,199",
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.4,
      reviews: 156,
      badge: "Hot Deal",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-600 border-b">
            <div className="flex space-x-4">
              <span>Free shipping on orders over ₹999</span>
              <span>|</span>
              <span>Call us: +91 98765 43210</span>
            </div>
            <div className="flex space-x-4">
              <span>Track Order</span>
              <span>|</span>
              <span>Help & Support</span>
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                VASTAM
                <span className="text-sm font-normal text-gray-600 ml-2">Readymade</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Men
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Women
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Kids
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Accessories
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Sale
              </a>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="h-4 w-4 text-gray-500 mr-2" />
                <Input placeholder="Search products..." className="bg-transparent border-none focus:ring-0 text-sm" />
              </div>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Input placeholder="Search products..." className="mb-4" />
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                  Men
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                  Women
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                  Kids
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                  Accessories
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                  Sale
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl px-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg md:text-xl mb-8">{slide.subtitle}</p>
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of clothing collections designed for every occasion and style preference.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.count}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked selections from our latest collections, featuring the best in quality and style.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">{product.badge}</Badge>
                    )}
                    <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>

                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Vastam Readymade</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since our establishment, Vastam Readymade has been committed to providing high-quality, stylish clothing
                that combines traditional craftsmanship with modern design sensibilities. We believe that great fashion
                should be accessible to everyone.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our collections feature carefully selected fabrics, attention to detail, and designs that cater to
                diverse tastes and occasions. From casual wear to formal attire, we have something for every wardrobe.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
              </div>

              <Button size="lg">Learn More</Button>
            </div>

          <div className="relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.85970226934103!2d71.82226523460506!3d23.969093877351337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395b7b29a80cc643%3A0x722b701bc0d4c7df!2sVastram%20ReadyMade!5e0!3m2!1sen!2sin!4v1749451097171!5m2!1sen!2sin"
    className="w-full h-[450px] rounded-lg shadow-lg border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Vastram Readymade Location"
  />
</div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and fashion
            tips.
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <Input placeholder="Enter your email" className="bg-white text-gray-900 border-none" />
            <Button className="bg-white text-gray-900 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">VASTAM Readymade</h3>
              <p className="text-gray-300 mb-4">Your trusted destination for quality clothing and exceptional style.</p>
              <div className="text-gray-300">
                <p>📍 123 Fashion Street, Mumbai, India</p>
                <p>📞 +91 98765 43210</p>
                <p>✉️ info@vastamreadymade.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Men's Clothing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Women's Clothing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kids Wear
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sale Items
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Vastam Readymade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
