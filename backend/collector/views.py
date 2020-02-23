from rest_framework import viewsets
from .models import IotData
from .serializers import IotDataSerializer
from django.http import JsonResponse

# Create your views here.
# DRY View for Saving Data from POST resqest 
class IotDataViewSet(viewsets.ModelViewSet):
    queryset = IotData.objects.all()
    serializer_class = IotDataSerializer
    http_method_names = [u'post']

def send_json(request):
    """
    Fetching the latest Data for Line chart and table on HTTP request
    """
    data = IotData.objects.order_by('-timestamp')[0]
    context = {
        'timestamp': data.timestamp,
        'reading': data.reading,
        'sensorType': data.sensorType
    }
    return JsonResponse(context, safe=False)