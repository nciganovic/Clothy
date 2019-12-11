from django.db import models

CHOICES = [
    ('Man', 'Man'),
    ('Woman', 'Woman'),
    ('Kids', 'Kids'),
]

class Category(models.Model):
    category_name = models.CharField(max_length=50, choices=CHOICES)
    description = models.CharField(max_length=500)
    class Meta:
            verbose_name_plural = "Categories"
    def __str__(self):
        """When class Cagories is called, category_name will be displayed"""
        return self.category_name

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    category_name = models.ForeignKey(Category, on_delete=models.CASCADE, default=None)
    def __str__(self):
        """When class Cagories is called, category_name will be displayed"""
        return self.name

