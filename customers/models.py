from django.db import models


class Customer(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    logo = models.ImageField(upload_to='images/', blank=True, null=True)