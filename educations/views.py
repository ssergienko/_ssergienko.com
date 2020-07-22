from .models import Education
from .serializers import EducationSerializer
from rest_framework import generics

class EducationListCreate(generics.ListCreateAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
