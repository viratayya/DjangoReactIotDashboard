from rest_framework import serializers
from .models import IotData

#serializers for IotData which helps for DRF
class IotDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = IotData
        fields = ('__all__')