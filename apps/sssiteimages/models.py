from django.db import models

class SSSiteImage(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    url = models.ImageField(upload_to='images/general', blank=True, null=True)
