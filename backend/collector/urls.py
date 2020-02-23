from django.urls import path, include
from .views import IotDataViewSet
from rest_framework import routers 
from .views import send_json

router = routers.DefaultRouter()
router.register(r'iotdata', IotDataViewSet, )

urlpatterns = [
    #this end point will serve the REST API for POST data
    path('v1/', include((router.urls,'restapi'),namespace='restapi')),
    
    # this end point will serve the latest data
    path('', send_json),
]
