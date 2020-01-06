from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from .models import Product, Category

class IndexSitemap(Sitemap):
    changefreq = "daily"
    priority = 1
    def items(self):
        working_url = ['index']
        return working_url

    def location(self, item):
        return reverse(item)

class StaticViewSitemap(Sitemap):
    changefreq = "never"
    priority = 0.6
    def items(self):
        working_url = ['search', 'faq', 
                        'size', 'aboutus', 
                        'cart', 'checkout', 'charge']
        return working_url

    def location(self, item):
        return reverse(item)

class CategorySitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.8
    def items(self):
        return Category.objects.all()

class ProductSitemap(Sitemap):
    changefreq = "never"
    priority = 0.5
    def items(self):
        return Product.objects.all()
