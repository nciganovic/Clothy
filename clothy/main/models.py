from django.db import models
from django_mysql.models import ListCharField
from django.utils import timezone

CHOICES = [
    ('Man', 'Man'),
    ('Woman', 'Woman'),
    ('Kids', 'Kids'),
]

class Category(models.Model):
    category_name = models.CharField(max_length=50, choices=CHOICES)
    description = models.CharField(max_length=500)
    category_slug = models.SlugField(max_length=50) #, unique=True, default="ctg slug"
    class Meta:
        verbose_name_plural = "Categories"
    def __str__(self):
        """When class Cagories is called, category_name will be displayed"""
        return self.category_name

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    category_name = models.ForeignKey(Category, on_delete=models.CASCADE, default=None)
    size = ListCharField(
        base_field=models.CharField(max_length=3),
        size=6,
        max_length=(6*4)# 6 * 10 character nominals, plus commas
    )
    price = models.DecimalField(max_digits=6, decimal_places=2)
    date = models.DateTimeField('date published', default=timezone.now)
    product_slug = models.SlugField(max_length=50) #, unique=True, default="blog slug"
    def __str__(self):
        """When class Cagories is called, category_name will be displayed"""
        return self.name

class Image(models.Model):
    name = models.ForeignKey(Product, on_delete=models.CASCADE)
    image_1 = models.ImageField(upload_to="product_images", default=None)
    image_2 = models.ImageField(upload_to="product_images", default=None)
    image_3 = models.ImageField(upload_to="product_images", default=None)
    def __str__(self):
        """When class Cagories is called, category_name will be displayed"""
        return str(self.name)
        
class FeaturedProduct(models.Model):
    name = models.ForeignKey(Product, on_delete=models.CASCADE)
    def __str__(self):
        """When class Cagories is called, category_name will be displayed"""
        return str(self.name)