from django.contrib import admin
from .models import Education, EducationDocument


class EducationDocumentAdmin(admin.StackedInline):
  model=EducationDocument


@admin.register(Education)
class EdicationAdmin(admin.ModelAdmin):
  inlines = [EducationDocumentAdmin]

  class Meta:
    model = Education