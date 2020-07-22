from rest_framework import serializers
from .models import Education, EducationDocument


class EducationDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationDocument
        fields = ['id', 'title', 'document']


class EducationSerializer(serializers.ModelSerializer):

    documents = EducationDocumentSerializer(many=True, read_only=True)

    class Meta:
        model = Education
        fields = ('id', 'title', 'logo', 'description', 'documents', 'finishedAt')
