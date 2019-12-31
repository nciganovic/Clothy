from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ShippingCountry(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        """When class Cagories is called, category_name will be displayed"""
        return self.name

class ChekoutHistory(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    company_name = models.CharField(max_length=50)
    country =  models.CharField(max_length=50)
    street_address =  models.CharField(max_length=100)
    apartment =  models.CharField(max_length=50)
    postcode =  models.CharField(max_length=5)
    town = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)
    email = models.CharField(max_length=50)
    other_notes = models.TextField(max_length=300)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    customer = models.ForeignKey(User, default=1, on_delete=models.CASCADE)
    def __str__(self):
        """When class Cagories is called, category_name will be displayed"""
        return f'{self.first_name} {self.last_name}'