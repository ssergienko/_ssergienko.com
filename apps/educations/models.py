from django.db import models


# class EducationCategory(models.Model):
#     title = models.CharField(max_length=100, blank=False, null=False)


class Education(models.Model):
    # educationCategoryId = models.ForeignKey(EducationCategory, related_name='education', default=1, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False, null=False)
    finishedAt = models.DateTimeField(blank=True, null=True)
    description = models.CharField(max_length=100, blank=True, null=True)
    order = models.IntegerField(blank=True, null=True)
    logo = models.ImageField(upload_to='images/education', blank=True, null=True)

    class Meta:
        ordering = ['order']


class EducationDocument(models.Model):
    education = models.ForeignKey(Education, related_name='documents', default=None, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False, null=False)
    document = models.FileField(upload_to='files/', blank=True, null=True)