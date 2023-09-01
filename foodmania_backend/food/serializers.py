from rest_framework import serializers
from .models import *


class blogSerializer(serializers.ModelSerializer):
    class Meta:
        model = blog
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = category
        fields = "__all__"
