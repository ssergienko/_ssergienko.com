from django.db import models


class Customer(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    logoUrl = models.CharField(max_length=100, blank=False, null=False)