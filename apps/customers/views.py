from .models import Customer
from .serializers import CustomerSerializer
from rest_framework import generics

class CustomerListCreate(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer