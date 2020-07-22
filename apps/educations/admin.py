from django.contrib import admin
from .models import Education, EducationDocument #, EducationCategory


class EducationDocumentAdmin(admin.StackedInline):
  model=EducationDocument


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
  inlines = [EducationDocumentAdmin]

  class Meta:
    model = Education


# @admin.register(EducationCategory)
# class EducationCategoryAdmin(admin.ModelAdmin):
#   inlines = [EducationDocumentAdmin]

#   class Meta:
#     model = EducationCategory