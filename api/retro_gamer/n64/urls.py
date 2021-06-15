from django.urls import path
from . import serializers

urlpatterns = [
    path('', serializers.n64ListSerializer ),
]